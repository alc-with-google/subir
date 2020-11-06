import { Injectable, Input } from '@angular/core';
import jsQR from "jsqr";

@Injectable({
  providedIn: 'root'
})
export class QrscanService {

  constructor() { }

  async init (constraints: any){
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        console.log('getUserMedia() got stream:', stream);
        // const code = jsQR (imageData, width, height, options?);
        // handleSuccess(stream);
      } catch (e) {
        console.error('navigator.getUserMedia error:', e);
        // errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
      }
  }



}
