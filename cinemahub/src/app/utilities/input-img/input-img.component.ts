import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import EventEmitter from 'events';
import { toBase64 } from '../utils';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent implements OnInit {

  constructor() { }

  @Output()
  onImageSelected = new EventEmitter<File>();

  imageBase64: string;

  ngOnInit(): void {
  }


  change(event){
    if(event.target.files.length > 0){
      const file: File = event.target.files[0];
      toBase64(file).then((value: any) => this.imageBase64 = value);
      this.onImageSelected.emit(file);
    }
  }
}
