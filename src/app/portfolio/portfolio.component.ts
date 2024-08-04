import { Component } from '@angular/core';
import { StarComponent } from "../star/star.component";
import { ModelSelectedComponent } from "../model-selected/model-selected.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [StarComponent, ModelSelectedComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  portComponent: string = 'portfolio component';
  starComponentBackgroundBlack: boolean = true;
  nameImage!: string;
  selectedImage(imageUrl: string) {
this.nameImage = imageUrl;
  }
}
