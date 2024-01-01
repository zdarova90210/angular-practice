import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterLink, RouterLinkActive, RouterModule } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }
}
