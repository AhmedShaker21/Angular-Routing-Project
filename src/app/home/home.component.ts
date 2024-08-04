import { Component } from '@angular/core';
import { StarComponent } from "../star/star.component";



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  homeImage: string = "../../assets/homeAssets/avatars.svg";
  homeImageText:string = "Home Image"
  colorCondition: boolean = false;

}
