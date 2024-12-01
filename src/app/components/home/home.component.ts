import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SliderComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
