import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title: any;

  ngOnInit() {
    this.title = 'ng-app';
  }

  testTitle(titleVal: string) {
    console.log('testTitle::', this.title == titleVal);
  }
}
