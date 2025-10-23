import { provideEventPlugins } from "@taiga-ui/event-plugins";
import { provideAnimations } from "@angular/platform-browser/animations";
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { APP_ROUTES } from "./app.routes";
import { provideHttpClient } from "@angular/common/http";


export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideEventPlugins(),
    provideHttpClient(),
    provideRouter(APP_ROUTES, withComponentInputBinding()),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideEventPlugins()
    ]
};
