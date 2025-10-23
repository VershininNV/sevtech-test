import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { TuiBadge } from '@taiga-ui/kit';

@Component({
  selector: 'app-description',
  imports: [TuiBadge],
  templateUrl: './description.html',
  styleUrl: './description.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Description {
  author = input('')
  points = input(0)
  text = input('')
  title = input('')
}
