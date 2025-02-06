import { CommonModule } from '@angular/common';
import { Component, computed, ElementRef, EventEmitter, input, output, signal, SimpleChanges, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';

@Component({
  selector: 'haru-carousel',
  imports: [
    CommonModule,
    MatButtonModule,
    MatRippleModule,
  ],
  styleUrls: ['./carousel.component.scss'],
  templateUrl: './carousel.component.html',
})
export class CarouselComponent {
  sliderRef = viewChild.required<ElementRef<HTMLElement>>("sliderRef");
  currentSlide = signal<number>(0);
  dotHelper = computed<number[]>(() => {
    if (this.slideCount() === null) {
      return [...Array(this._dotHelperSize()).keys()];
    }
    return [...Array(this.slideCount()).keys()];
  });
  private _dotHelperSize = signal<number>(1);
  slider = signal<KeenSliderInstance | null>(null);
  onSlideChange = output<number>();
  slideCount = input<number | null>(null);
  lastChildCount = 0;

  ngAfterViewInit() {
    this.setSlider();
  }

  updateSlider() {
    this.slider()?.update();
  }
 
  ngAfterContentChecked(): void {
    if (this.lastChildCount !== this.sliderRef().nativeElement.childElementCount) {
      this.lastChildCount = this.sliderRef().nativeElement.childElementCount;
      this.updateSlider();
    }
  }

  setSlider() {
    this.lastChildCount = this.sliderRef().nativeElement.childElementCount;
    var slider = new KeenSlider(this.sliderRef().nativeElement, {
      initial: this.currentSlide(),
      slideChanged: (s) => {
        this.currentSlide.set(s.track.details.rel);
        this.onSlideChange.emit(s.track.details.rel);
      },
    });
    this.slider.set(slider);
    if (this.slideCount() === null) {
      this._dotHelperSize.set(slider.slides.length);
    }
  }

  ngOnDestroy() {
    if (this.slider) this.slider()?.destroy()
  }
}
