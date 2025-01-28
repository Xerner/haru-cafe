import { CommonModule } from '@angular/common';
import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';

@Component({
  selector: 'haru-carousel',
  imports: [
    CommonModule,
  ],
  templateUrl: './carousel.component.html',
})
export class CarouselComponent {
  sliderRef = viewChild.required<ElementRef<HTMLElement>>("sliderRef");

  currentSlide: number = 1
  dotHelper: Array<Number> = []
  slider: KeenSliderInstance | null = null

  ngAfterViewInit() {
    setTimeout(() => {
      this.slider = new KeenSlider(this.sliderRef().nativeElement, {
        initial: this.currentSlide,
        slideChanged: (s) => {
          this.currentSlide = s.track.details.rel
        },
      })
      this.dotHelper = [
        ...Array(this.slider.track.details.slides.length).keys(),
      ]
    })
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }
}
