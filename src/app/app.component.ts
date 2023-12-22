import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomepageComponent ,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myWebApp';
}
