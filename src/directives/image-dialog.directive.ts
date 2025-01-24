import { Directive, ElementRef, input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IImageDialogData, ImageDialogComponent } from 'components/image-dialog/image-dialog.component';

@Directive({
  selector: '[imageDialog]',
})
export class ImageDialogDirective {
  imageDialog = input.required<string>();

  constructor(
    private elementRef: ElementRef<HTMLImageElement>,
    private dialog: MatDialog,
  ) {
    this.initialize();
  }

  initialize() {
    this.elementRef.nativeElement.addEventListener('click', () => {
      this.openImageInDialog();
    });
    this.elementRef.nativeElement.style.cursor = 'pointer';
  }

  openImageInDialog() {
    var data: IImageDialogData = {
      name: this.imageDialog(),
      src: this.elementRef.nativeElement.src,
      alt: this.elementRef.nativeElement.alt,
    };
    this.dialog.open(ImageDialogComponent, { 
      data: data,
      maxWidth: "80vw",
      maxHeight: "90vh",
      panelClass: "bg-transparent",
    });
  }
}
