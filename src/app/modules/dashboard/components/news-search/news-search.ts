import { ChangeDetectionStrategy, Component, computed, linkedSignal, output, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiButton, TuiTextfield } from '@taiga-ui/core';
import { TuiButtonLoading } from '@taiga-ui/kit';

@Component({
  selector: 'app-news-search',
  imports: [FormsModule, TuiTextfield, TuiButton, TuiButtonLoading ],
  templateUrl: './news-search.html',
  styleUrl: './news-search.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsSearch {
  protected value = signal('')
  protected isLoading = signal(false)

  protected searchChange = output<string | null>()

  public isFullfilled = computed<boolean>(() => {
    return this.value() === '' ? true : false })
  

  protected onSearchChange(searchValue: string): void {
    if(searchValue === '') {
      this.searchChange.emit(null)
    }
  }

  protected search(): void {
    this.isLoading.set(true)
    this.searchChange.emit(this.value())
    setTimeout(() => {this.isLoading.set(false)},1500)
  }
}
