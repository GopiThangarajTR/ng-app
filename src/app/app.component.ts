import { Component, OnInit } from '@angular/core';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TestComponent],
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
