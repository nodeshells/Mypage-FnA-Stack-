import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/authguard/user.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
  providers: [UserService]
})
export class TopComponent implements OnInit {
  user_photo_url = '';
  user_name = '';

  constructor(private user: UserService) { }

  ngOnInit() {
    this.getUserdata();
  }

  async getUserdata() {
    const user = await this.user.getCurrentUser();
    this.user_photo_url = user.photoURL;
    this.user_name = user.displayName;
  }

}
