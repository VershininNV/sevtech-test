import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TuiLoader, tuiLoaderOptionsProvider } from '@taiga-ui/core';

@Component({
  selector: 'app-loader',
  imports: [TuiLoader],
  templateUrl: './loader.html',
  styleUrl: './loader.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    tuiLoaderOptionsProvider({
      inheritColor: false,
      overlay: true,
    }),
  ],
  
})
export class Loader {
  public size = input<"l" | "m" | "s" | "xs" | "xl" | "xxl">('xxl')
  public isLoading = input.required<boolean>()
  
}
