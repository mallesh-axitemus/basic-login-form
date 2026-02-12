import { Injectable, signal } from '@angular/core';

export interface ToastInfo {
  header: string;
  body: string;
  delay?: number;
}

@Injectable({ providedIn: 'root' })
export class AppToastService {

  private _toasts = signal<ToastInfo[]>([]);
  toasts = this._toasts.asReadonly();

  show(header: string, body: string, delay: number = 3000) {
    this._toasts.update(toasts => [...toasts, { header, body, delay }]);
  }

  remove(toast: ToastInfo) {
    this._toasts.update(toasts => toasts.filter(t => t !== toast));
  }
}
