import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ItemData } from '@core';
import { Loader } from '@shared';
import { ListItem } from '../list-item';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [Loader, ListItem],
  templateUrl: './news-list.html',
  styleUrl: './news-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsList {
  public isLoading = input<boolean>(false)
  public news = input<ItemData[]>([])
}
