// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import {routes} from "./app/app.routes";
import {provideRouter} from "@angular/router";

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations() // ✅ Active les animations Angular
  ]
});
