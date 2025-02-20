import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from '@angular/router';
import {CharacterGridDetailComponent} from './app/components/character-grid-detail/character-grid-detail.component';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideHttpClient} from '@angular/common/http';

const routes: Routes = [
  {path: '', component: CharacterGridDetailComponent}
]

bootstrapApplication(AppComponent, {
  providers:[
    provideAnimations(),
    provideRouter(routes),
    provideHttpClient()
  ]
})
  .catch((err) => console.error(err));
