import { Component } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeatureComponent } from './components/feature/feature.component';
import { MarketingComponent } from './components/marketing/marketing.component';
import { ServiceComponent } from './components/service/service.component';
import { TeamComponent } from './components/team/team.component';
import { ClientSlideComponent } from './components/client-slide/client-slide.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';

@Component({
  selector: 'app-root',
  imports: [
    FooterComponent,
    HeaderComponent,
    HeroComponent,
    FeatureComponent,
    MarketingComponent,
    ServiceComponent,
    TeamComponent,
    ClientSlideComponent,
    NewsletterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'datatech';
}
