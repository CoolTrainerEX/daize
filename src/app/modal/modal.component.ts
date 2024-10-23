import { Component } from '@angular/core';
import { CountService } from '../count.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  public constructor(private countService: CountService) {
    countService.getCount.subscribe((value) => {
      if (value % 5 == 0)
        (document.getElementById('modal') as HTMLDialogElement).showModal();
    });
  }
}
