import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { Photos } from '../../models/Photos';

@Component({
  selector: 'app-hero',
  imports: [CarouselModule, TagModule, ButtonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit {
  
  photos!: Photos[];
  
  ngOnInit(): void {
    this.photos=[
      {
        image: '/images/background-shape/feature-bg-2.png'
      },
      {
        image:'/images/background-shape/feature-bg-2.png'
      },
      {
        image:'/images/background-shape/feature-bg-2.png'
      },
      {
        image:'/images/background-shape/feature-bg-2.png'
      },
      {
        image:'/images/background-shape/feature-bg-2.png'
      }
    ]
  }
}
