import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { TopnavComponent } from '../topnav/topnav.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [TopnavComponent, RouterModule],
})
export class NavbarComponent {
  activeLink: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe(() => {
      this.setActiveLink();
    });
  }

  setActiveLink() {
    const currentRoute = this.router.url.split('/')[1];
    this.activeLink = currentRoute || 'home';
  }

  isActive(route: string): boolean {
    return this.activeLink === route;
  }

  closeMenu() {
    const navbarToggler = document.querySelector(
      '.navbar-toggler'
    ) as HTMLElement;
    const navbarMenu = document.querySelector('#navbarNav') as HTMLElement;

    if (navbarMenu.classList.contains('show')) {
      navbarToggler.click();
    }
  }
}
