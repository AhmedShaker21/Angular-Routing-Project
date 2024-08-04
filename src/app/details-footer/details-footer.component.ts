import { Component } from '@angular/core';
import { detailsFooter } from '../interface/detailsFooter';


@Component({
  selector: 'app-details-footer',
  standalone: true,
  imports: [],
  templateUrl: './details-footer.component.html',
  styleUrl: './details-footer.component.css'
})
export class DetailsFooterComponent {
  iconsBrands: string[] = ["facebook", "twitter", "linkedin-in"];
  detail: detailsFooter[] = [
    {
      sectionName: 'LOCATION',
      address: '2215 John Daniel Drive',
      details: 'Clark, MO 65243'
    },
    {
      sectionName: 'AROUND THE WEB',
    },
    {
      sectionName: 'ABOUT FREELANCER',
      details: 'Freelance is a free to use, licensed Bootstrap theme created by Route'
    }
  ]
}
