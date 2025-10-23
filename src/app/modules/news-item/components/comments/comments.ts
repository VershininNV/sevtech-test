import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ItemData } from '@core';
import { EMPTY_ARRAY, TuiHandler } from '@taiga-ui/cdk';
import { TuiBadge, TuiTree } from '@taiga-ui/kit';

@Component({
  selector: 'app-comments',
  imports: [TuiTree, TuiBadge],
  templateUrl: './comments.html',
  styleUrl: './comments.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class Comments {
  comments = input<ItemData[]>()

  protected readonly handler: TuiHandler<ItemData, readonly ItemData[]> = (item) =>
        item.children || EMPTY_ARRAY;
}
