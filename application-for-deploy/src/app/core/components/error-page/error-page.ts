import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from '@core/constants/enums';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'app-error-page',
  imports: [TuiButton],
  templateUrl: './error-page.html',
  styleUrl: './error-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorPage {
 protected readonly router = inject(Router)

 public redirectToHome(): void {
  this.router.navigateByUrl(AppRoutes.HOME)
 }
}
