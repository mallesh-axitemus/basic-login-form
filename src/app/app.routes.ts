import { Routes } from '@angular/router';
import { App } from './app';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Signup } from './pages/signup/signup';
import { ForgotPassword } from './pages/forgotpassword/forgotpassword';
import { Button } from './pages/button/button';

export const routes: Routes = [
    {
        path: '',
        component: App
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'dashboard', 
        component: Dashboard
    },
    {
        path:'signup',
        component:Signup
    },
    {
        path:'forgot-password',
        component:ForgotPassword
    },
    {
        path:'button',
        component:Button
    }
];
