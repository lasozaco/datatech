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
        image: '/images/carrusel/imagen1.webp'
      },
      {
        image:'/images/carrusel/imagen2.webp'
      },
      {
        image:'/images/carrusel/imagen3.jpeg'
      },
      {
        image:'/images/carrusel/imagen4.jpeg'
      },
      {
        image:'/images/carrusel/imagen5.jpeg'
      },
      {
        image:'/images/carrusel/imagen6.jpeg'
      }
    ]
  }
}
