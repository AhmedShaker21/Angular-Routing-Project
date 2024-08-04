import { Component } from '@angular/core';
import { StarComponent } from "../star/star.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {
  starComponentBackgroundBlack: boolean = true;

  userName: boolean = false;
  age: boolean = false;
  email: boolean = false;
  password: boolean = false;

    userNameInput(e: any, name: string): void {
      if(e.target.value !== '') {
      switch (name) {
        case 'userName':
          this.userName = true;
          break;
        case 'userAge':
          this.age = true;
          break;
        case 'userPassword':
          this.password = true;
          break;
        case 'userEmail':
          this.email = true;
          break;
      }
    } else {
      switch (name) {
        case 'userName':
          this.userName = false;
          break;
        case 'userAge':
          this.age = false;
          break;
        case 'userPassword':
          this.password = false;
          break;
        case 'userEmail':
          this.email = false;
          break;
      }
    }
  }
  }
