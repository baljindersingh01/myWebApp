import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  copyrightText = '© 2023 Baljinder Singh, Inc';
  socialMediaLinks = {
    linkedin: {
      title: 'Linkedin',
      link: 'https://www.linkedin.com/in/baljindersingh01',
    },
    youtube: {
      title: 'Youtube',
      link: 'https://www.youtube.com/princeblike',
    },
    instagram: {
      title: 'Instagram',
      link: 'https://www.instagram.com/iprinceblike',
    }
  };
}
