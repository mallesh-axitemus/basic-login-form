import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AppToastService } from '../../services/app-toast.service';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgClass, RouterLink, NgIf],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  password = '';
  showPassword = false;

  private router = inject(Router);
  private toast = inject(AppToastService);

  login() {
    if (!this.email || !this.password) {
      this.toast.show('Error', 'Please provide credentials');
      return;
    }

    if (this.email === 'admin@gmail.com' && this.password === 'Admin@1234') {
      this.toast.show('Success', 'Logged in successfully ✅');
      this.router.navigate(['/dashboard']);
    } else {
      this.toast.show('Error', 'Invalid credentials ❌');
    }
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
