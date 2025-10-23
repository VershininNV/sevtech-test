import { ChangeDetectionStrategy, Component, computed, input, linkedSignal, output, WritableSignal } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';
import { TuiBadge, TuiPagination } from '@taiga-ui/kit';

@Component({
  selector: 'app-news-pagination',
  imports: [TuiPagination, TuiButton],
  templateUrl: './news-pagination.html',
  styleUrl: './news-pagination.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsPagination {
  public numberPage = input<number>(0)
  public numberPages = input<number>(0)

  public pageChanged = output<number>()

  public index: WritableSignal<number> = linkedSignal(() => this.numberPage())

  public isFirst = computed<boolean>(() => {
    return this.index()! + 1 === 1
  })
  public isLast = computed<boolean>(() => {
    return this.index()! + 1 === this.numberPages()
  })

  protected back(): void {
    this.index.update((a) => a - 1)
    this.goToPage(this.index())
  }

  protected next(): void {
    this.index.update((a) => a + 1)
    this.goToPage(this.index())
  }
  
  protected goToPage(numberPage: number): void {
    this.pageChanged.emit(numberPage)
  }
}
