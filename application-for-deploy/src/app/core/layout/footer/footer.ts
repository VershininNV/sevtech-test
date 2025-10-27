import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiIcon, tuiIconResolverProvider } from '@taiga-ui/core';

@Component({
  selector: 'app-footer',
  imports: [TuiIcon],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Footer {

}
