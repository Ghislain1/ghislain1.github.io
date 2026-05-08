import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { ScrollService } from './app/services/scroll.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withInMemoryScrolling({
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
    })),
    ScrollService
  ],
}).then((appRef) => {
  const scrollService = appRef.injector.get(ScrollService);
  scrollService.initSmoothScroll();
}).catch((err) => console.error(err));
