import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  render: boolean;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '', render: false },
  { path: '/usermanagment', title: 'Users', icon: 'group', class: '', render: true },
  { path: '/transactions', title: 'Transactions', icon: 'content_paste', class: '', render: true },
  { path: '/notifications', title: 'Notifications', icon: 'notifications', class: '', render: true },
  { path: '/user-profile', title: 'Profile', icon: 'person', class: '', render: true },
  { path: '/user/new', title: 'Users', icon: '', class: '', render: false },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => { if (menuItem.render) return menuItem });
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
