import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeSwitcher } from '@shared';
import { TUI_DARK_MODE } from '@taiga-ui/core';

@Component({
  selector: 'app-header',
  imports: [ThemeSwitcher],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header {
  protected readonly darkMode = inject(TUI_DARK_MODE);
  protected readonly path = this.darkMode() ? '/assets/images/logotype/logo_accent.png' : '/assets/images/logotype/logo.png';
}
