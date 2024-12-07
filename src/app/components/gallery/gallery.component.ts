import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  imports: [CommonModule],
})
export class GalleryComponent {
  // Array of image objects with source and alt text
  images = [
    { src: 'assets/kinyoryesu2.jpeg', alt: 'Image 1' },
    { src: 'assets/kinyoryesu3.jpeg', alt: 'Image 1' },
    { src: 'assets/kinyoryesu4.jpeg', alt: 'Image 1' },
    { src: 'assets/kinyoryesu5.jpeg', alt: 'Image 1' },
    { src: 'assets/kinyoryesu6.jpeg', alt: 'Image 1' },
    { src: 'assets/kinyoryesu8.jpeg', alt: 'Image 1' },
    { src: 'assets/kinyoryesu9.jpeg', alt: 'Image 1' },
    { src: 'assets/kinyoryesu10.jpeg', alt: 'Image 1' },
  ];

  
}
