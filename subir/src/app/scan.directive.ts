import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { QrscanService } from './shared/qrscan.service'
import jsQR from 'jsqr';


@Directive({
  selector: '[appScan]'
})
export class ScanDirective {


  constraints:any = {
    audio: false,
    video: true
  };
  constructor(private el: ElementRef,private qrScan: QrscanService, private renderer: Renderer2) { }

  @HostListener('click', ['$event.target'])
  onClick(e) {
    // console.log('button');
    // this.qrScan.init(e);
    const video = this.renderer.createElement('video');
    // const video = this.renderer.createElement('video');
    // this.video = this.vc.createEmbeddedView(this.template)
    const canvasElement = this.el.nativeElement.querySelector('canvas');
    const canvas = canvasElement.getContext("2d");
    const loadingMessage = this.el.nativeElement.querySelector('#loadingMessage');
    const outputContainer = this.el.nativeElement.querySelector('#output');
    const outputMessage = this.el.nativeElement.querySelector('#outputMessage');
    // const outputMessage = this.renderer.selectRootElement("#outputMsg");
    const outputData = this.el.nativeElement.querySelector('#outputData');

    function drawLine(begin, end, color) {
      canvas.beginPath();
      canvas.moveTo(begin.x, begin.y);
      canvas.lineTo(end.x, end.y);
      canvas.lineWidth = 4;
      canvas.strokeStyle = color;
      canvas.stroke();
    }

    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } }).then(function(stream) {
      this.renderer.setAttribute(video, 'srcObject', 'stream')
      // video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
      video.play();
      requestAnimationFrame(tick);
    });


    function tick() {
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
          outputData.innerText = code.data;
        } else {
          outputMessage.hidden = false;
          outputData.parentElement.hidden = true;
        }
      }
      requestAnimationFrame(tick);
    }
 }
}
