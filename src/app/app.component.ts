import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {DomSanitizer} from '@angular/platform-browser';
import {SharedService} from './shared/shared.service';
import {Storage} from '@ionic/storage';
import {MenuController} from '@ionic/angular';
import {AuthService} from './shared/authguard/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [],
})
export class AppComponent implements OnDestroy, OnInit, AfterViewInit {
  themeState$: Subject<String>;
  sideMenu = [
    {labelName: 'TOPページ', iconName: 'home', routerLink: '/top'},
    {labelName: 'マイページ', iconName: 'happy', routerLink: '/profile'},
    {labelName: 'ブログ', iconName: 'text', routerLink: '/blog'},
    // { labelName: '職務経歴', iconName: 'filing', routerLink: '' },
    // { labelName: '技術プレビュー', iconName: 'construct', routerLink: '' },
    {labelName: '管理者ページ', iconName: 'glasses', routerLink: '/admin'},
  ];

  constructor(private domSanitizer: DomSanitizer, private sharedservice: SharedService, private storage: Storage,
              private menu: MenuController, private authService: AuthService) {
    this.sharedservice.initTheme();
    this.themeState$ = this.sharedservice.themesubject;

  }

  ngOnInit() {
    this.sharedservice.routeingtop();
  }

  ngOnDestroy(): void {
  }

  ngAfterViewInit(): void {

  }

  toggleTheme() {
    const themeState = this.sharedservice.toggleTheme(this.sharedservice.themeState);
    this.storage.set('Theme', themeState).then();
  }

}
