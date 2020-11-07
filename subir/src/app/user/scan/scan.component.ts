import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { QrscanService } from '../../shared/qrscan.service'
import jsQR from "jsqr";
import { LoyaltyI } from '../loyalty-i';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {


  newLoyalty: any;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private scanService: QrscanService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }


  scanQR(): void {

    const testResult = { id: 19, product: 'Test', price: 1500, loyaltypercent: .1, seller: 'Lagos' };
    const video = this.renderer.createElement('video') as HTMLVideoElement;
    const canvasElement = this.el.nativeElement.querySelector('canvas');
    const canvas = canvasElement.getContext("2d");
    const loadingMessage = this.el.nativeElement.querySelector('#loadingMessage');
    const outputContainer = this.el.nativeElement.querySelector('#output');
    const outputMessage = this.el.nativeElement.querySelector('#outputMessage');
    const outputData = this.el.nativeElement.querySelector('#outputData');
    const scannedLoyalty = this.el.nativeElement.querySelector('#scannedResult');

    function drawLine(begin, end, color) {
      canvas.beginPath();
      canvas.moveTo(begin.x, begin.y);
      canvas.lineTo(end.x, end.y);
      canvas.lineWidth = 4;
      canvas.strokeStyle = color;
      canvas.stroke();
    }

    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } }).then(function (stream) {

      video.srcObject = stream;
      // video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
      video.play();
      requestAnimationFrame(tick);
    });


    const tick = () => {
      loadingMessage.innerText = "⌛ Loading video..."
      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        loadingMessage.hidden = true;
        canvasElement.hidden = false;
        outputContainer.hidden = false;

        canvasElement.height = video.videoHeight;
        canvasElement.width = video.videoWidth;
        canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
        var imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
        var code = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: "dontInvert",
        });
        if (code) {
          drawLine(code.location.topLeftCorner, code.location.topRightCorner, "#FF3B58");
          drawLine(code.location.topRightCorner, code.location.bottomRightCorner, "#FF3B58");
          drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner, "#FF3B58");
          drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner, "#FF3B58");
          outputMessage.hidden = true;
          outputData.parentElement.hidden = false;
          outputData.innerText = code.data
          scannedLoyalty.hidden = false
          this.newLoyalty = testResult;
          // this.scanService.addLoyalty(testResult)
          return
        } else {
          outputMessage.hidden = false;
          outputData.parentElement.hidden = true;
        }
      }
      requestAnimationFrame(tick);
    }
  }

  save(): void {
    const outputData = this.el.nativeElement.querySelector('#outputData');
    console.log('Trying to save', this.newLoyalty)
    this.scanService.addLoyalty(this.newLoyalty as LoyaltyI)
      .subscribe(
        (data) => {
          this.newLoyalty.id = data.id;
          this.router.navigate(['/loyalties/:id', { id: this.newLoyalty.id }]);
        })
  }

  gotoLoyalties() {
    const loyaltyId = this.newLoyalty ? this.newLoyalty.id : null;
    console.log('gotoLoyalties', loyaltyId)
    // Pass along the crisis id if available
    // so that the CrisisListComponent can select that crisis.
    // Add a totally useless `foo` parameter for kicks.
    // Relative navigation back to the crises
    this.router.navigate(['/loyalties/:id', { id: loyaltyId }]);
  }
}
