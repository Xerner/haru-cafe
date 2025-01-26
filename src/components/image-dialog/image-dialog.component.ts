import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';

export interface IImageDialogData {
  src: string;
  alt: string;
}

@Component({
  selector: 'haru-image-dialog',
  templateUrl: './image-dialog.component.html',
  host: {
    class: "h-full w-full"
  }
})
export class ImageDialogComponent {
  constructor(
    @Inject(DIALOG_DATA) protected data: IImageDialogData
  ) { }
}
