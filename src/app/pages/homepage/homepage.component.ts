import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  landingName = 'Baljinder Singh';
  aboutMe = {
    title: 'About Me',
    description: `Passionate about crafting seamless user experiences and bringing
    designs to life, I am a Junior Frontend Angular Developer with a keen
    eye for detail and a love for clean, efficient code. Armed with a
    solid foundation in HTML, CSS, and JavaScript, I have delved into the
    Angular framework to build dynamic and responsive web applications.`,
    seeMoreBtn: 'See More',
    moreAboutMe: {
      title: 'More About Me.',
      keySkills: {
        title: '🚀 Key Skills:',
        angular:
          'Angular: Proficient in creating modular, reusable components and implementing two-way data binding for a smoother user interaction.',
        htmlCss:
          'HTML/CSS: Experienced in crafting pixel-perfect layouts and styles to enhance user interfaces.',
        javaScript:
          'JavaScript: Familiar with ES6+ features and adept at leveraging JavaScript to enhance website interactivity.',
        versionControl:
          'Version Control: Skilled in using Git for collaborative development and version control.',
      },
      closeBtn: 'Close',
    },
  };
  contactMe ={
    title1:'Contact us for...',
    title2:'Business Enquires.',
    title3:'We need your email to reach you back...',
    formControlText:{
      nameLabel:'Your Name',
      emailLabel:'Email address',
      submitText:'Submit',
      miniDescription:`Thanks for reaching out! we'll get back to you at our earliest
      convenience.`
    },
  }
}
