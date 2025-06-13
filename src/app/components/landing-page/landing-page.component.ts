import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

   images = [
    'assets/images/NineArchBridge.jpg',
    'assets/images/Sigiriya.jpg',
    'assets/images/SriDaladaMaligawa.webp',
    'assets/images/LotusTower.webp'
  ];

  currentIndex = 0;
  slideInterval?: any;

  ngOnInit() {
    this.slideInterval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 4000); // Change slide every 4 seconds
  }

  ngOnDestroy() {
    clearInterval(this.slideInterval);
  }

}
