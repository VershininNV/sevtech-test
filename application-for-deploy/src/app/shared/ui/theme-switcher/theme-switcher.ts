import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TUI_DARK_MODE, TuiButton  } from '@taiga-ui/core';

@Component({
  selector: 'app-theme-switcher',
  imports: [TuiButton],
  templateUrl: './theme-switcher.html',
  styleUrl: './theme-switcher.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeSwitcher {
  protected readonly darkMode = inject(TUI_DARK_MODE);
  protected readonly color = 'var(--tui-background-accent-opposite)';

  protected changeMode(): void {
    this.darkMode.set(!this.darkMode())
  } 
}
