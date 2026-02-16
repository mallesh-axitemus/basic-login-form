import { Component ,inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { AppToastService } from '../../services/app-toast.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterLink, NgIf],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {

  email = '';
  phone = '';
  password = '';
  confirmPassword = '';

  private toast = inject(AppToastService);

  signup() {
    if (!this.email || !this.phone || !this.password || !this.confirmPassword) {
      this.toast.show('Error', 'Please provide credentials');
      return;
    }
  }
}
