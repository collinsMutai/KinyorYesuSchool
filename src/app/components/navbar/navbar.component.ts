import { Component, HostListener } from '@angular/core';
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
  lastScrollTop = 0; // To track scroll direction

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe(() => {
      this.setActiveLink();
    });
  }

  // Scroll event listener
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    // If scrolling down, reduce logo size
    if (currentScroll > this.lastScrollTop) {
      // Scroll down, shrink the logo
      document.querySelector('.navbar-brand')?.classList.add('shrink');
    } else {
      // Scroll up, return to default size
      document.querySelector('.navbar-brand')?.classList.remove('shrink');
    }

    // Update the last scroll position
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  // Update active link based on the current route
  setActiveLink() {
    const currentRoute = this.router.url.split('/')[1];
    this.activeLink = currentRoute || 'home';
  }

  // Check if the route is active
  isActive(route: string): boolean {
    return this.activeLink === route;
  }

  // Close the menu on link click
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
