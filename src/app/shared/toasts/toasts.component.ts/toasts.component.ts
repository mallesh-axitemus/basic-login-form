import { Component, inject } from '@angular/core';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { AppToastService } from '../../../services/app-toast.service';

@Component({
  selector: 'app-toasts',
  standalone: true,
  imports: [NgbToastModule],
  templateUrl: './toasts.component.html',
  styleUrl: './toasts.component.css'
})
export class ToastsComponent {
  toastService = inject(AppToastService);
}
