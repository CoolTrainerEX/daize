import { Component } from '@angular/core';
import { CountService } from '../count.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  public constructor(private countService: CountService) {}

  public countUp(): void {
    this.countService.addCount();
  }
}
