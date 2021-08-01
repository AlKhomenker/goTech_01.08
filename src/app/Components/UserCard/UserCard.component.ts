import { Component } from '@angular/core';
import { faMapMarkerAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-userCard',
  templateUrl: './UserCard.component.html',
  styleUrls: ['./UserCard.component.css']
})
export class UserCard {

  faBriefcase = faBriefcase;
  faMapMarkerAlt = faMapMarkerAlt;
}


