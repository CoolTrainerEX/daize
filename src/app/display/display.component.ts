import { Component } from '@angular/core';
import { CountService } from '../count.service';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [],
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss',
})
export class DisplayComponent {
  count!: number;

  public constructor(private countService: CountService) {
    countService.getCount.subscribe((value) => (this.count = value));
  }
}
