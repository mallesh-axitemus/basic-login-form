import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppToastService } from '../../services/app-toast.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email = '';
  password = '';

  private router = inject(Router);
  private toast = inject(AppToastService);

  login() {
    if (this.email === 'admin@gmail.com' && this.password === 'Admin@1234') {

      this.toast.show('Success', 'Logged in successfully ✅');

      this.router.navigate(['/dashboard']);

    } 
    else {
      this.toast.show('Error', 'Invalid credentials ❌');
    }
  }
}
