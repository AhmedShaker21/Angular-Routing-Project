import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-model-selected',
  standalone: true,
  imports: [ NgClass  ],
  templateUrl: './model-selected.component.html',
  styleUrl: './model-selected.component.css'
})
export class ModelSelectedComponent {

  imagesURL:string[] = [
    "./assets/portfolioImages/photo6.png",
    "./assets/portfolioImages/photo1.png",
    "./assets/portfolioImages/photo2.png",
    "./assets/portfolioImages/photo5.png",
    "./assets/portfolioImages/photo3.png",
    "./assets/portfolioImages/photo4.png"
  ];

  flag: boolean = true;
  currentImage: number = 0;
  closeLightBox(e: Event): void {
    e.stopPropagation();
    this.flag = true;
  }
  openLightBox(): void {
    this.flag = false;
  }
  currentImageIndex(currentIndex: number): void {
    this.currentImage = currentIndex;
  }
  imgLightBox(e: Event): void {
    e.stopPropagation();
  }
}
