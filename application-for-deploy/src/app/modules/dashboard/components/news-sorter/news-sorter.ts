import { ChangeDetectionStrategy, Component, computed, output, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiButton, TuiGroup, TuiTextfield } from '@taiga-ui/core';
import { TuiBlock, TuiButtonLoading, TuiInputNumber, TuiRadio } from '@taiga-ui/kit';


interface SortValue  {
  readonly signType: string; 
  readonly ratingValue: number
}

@Component({
  selector: 'app-news-sorter',
  imports: [FormsModule, TuiTextfield, TuiButton, TuiButtonLoading, TuiInputNumber, ReactiveFormsModule, TuiBlock, TuiGroup, TuiRadio],
  templateUrl: './news-sorter.html',
  styleUrl: './news-sorter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})
export class NewsSorter {
  protected value = signal<number | null>(null)
  protected isLoading = signal(false)
  protected isFullfilled = computed<boolean>(() => {
    return this.value() === null ? true : false })

  protected optionChange = output<SortValue | null>()

  protected readonly signForm = new FormGroup({
        sign: new FormControl('<'),
    });

  
  
  protected onSorterChange(sorterValue: number | null): void {
    if(sorterValue === null) {
      this.optionChange.emit(null)
    }
  }


  protected search(): void {
    this.isLoading.set(true)
    this.optionChange.emit({signType: this.signForm.get('sign')?.value!, ratingValue: this.value()!})
    setTimeout(() => {this.isLoading.set(false)},1500)
  }
}
