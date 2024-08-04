import { Component, Input, NgModule } from '@angular/core';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { HomeComponent } from '../home/home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent {
  @Input() isBackgroundBlack: boolean = false;

}
