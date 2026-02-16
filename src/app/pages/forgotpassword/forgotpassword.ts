import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppToastService } from '../../services/app-toast.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './forgotpassword.html',
  styleUrl: './forgotpassword.css',
})
export class ForgotPassword {

  email = '';
  captchaInput = '';
  captcha = this.generateCaptcha();

  private toast = inject(AppToastService);

  generateCaptcha(): string {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789abcdefghijklmnopqrstuvwxyz';
    let value = '';
    for (let i = 0; i < 6; i++) {
      value += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return value;
  }

  refreshCaptcha() {
    this.captcha = this.generateCaptcha();
  }

  sendTemporaryPassword() {

    if (!this.email) {
      this.toast.show('Error', 'Please enter email');
      return;
    }

    if (this.captchaInput !== this.captcha) {
      this.toast.show('Error', 'Invalid captcha ❌');
      this.refreshCaptcha();
      this.captchaInput = '';
      return;
    }

    // Fake success behavior
    this.toast.show('Success', 'Temporary password sent to email ✅');

    this.email = '';
    this.captchaInput = '';
    this.refreshCaptcha();
  }
}
