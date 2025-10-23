import { TUI_DARK_MODE, TuiRoot } from "@taiga-ui/core";
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "@core/layout/header/header";
import { Footer } from "@core/layout/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly darkMode = inject(TUI_DARK_MODE);
}
