import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  imports: [CommonModule],
})
export class SliderComponent implements OnInit, OnDestroy {
  images: any[] = [
    {
      src: 'https://www.kinyoryesuschool.com/wp-content/uploads/2024/08/kinyoryesu3.jpeg',
      alt: 'Image 1',
      title: 'Kinyor Yesu School',
      subtitle: 'Education For Transformation',
    },
    {
      src: 'https://www.kinyoryesuschool.com/wp-content/uploads/2024/08/kinyoryesu6.jpeg',
      alt: 'Image 2',
      title: 'Kinyor Yesu School',
      subtitle: 'Education For Transformation',
    },
    {
      src: 'https://www.kinyoryesuschool.com/wp-content/uploads/2024/08/kinyoryesu8.jpeg',
      alt: 'Image 3',
      title: 'Kinyor Yesu School',
      subtitle: 'Education For Transformation',
    },
  ];

  currentIndex = 0;
  slideInterval: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    console.log('Slider component initialized');

    if (isPlatformBrowser(this.platformId)) {
      this.slideInterval = setInterval(() => {
        this.moveSlide(1);
      }, 3000);
    }
  }

  ngOnDestroy(): void {
    console.log('Slider component destroyed');

    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  moveSlide(step: number): void {
    this.currentIndex =
      (this.currentIndex + step + this.images.length) % this.images.length;
  }

  onButtonClick(action: string, index: number): void {
    console.log(`Button clicked: ${action} on image index: ${index}`);
  }
}
