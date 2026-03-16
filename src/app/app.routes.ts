import { Routes } from '@angular/router';
import { App } from './app';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Signup } from './pages/signup/signup';
import { ForgotPassword } from './pages/forgotpassword/forgotpassword';
import { Button } from './pages/button/button';
import { Inputfield } from './pages/inputfield/inputfield';
import { Textareacomponent } from './pages/textareacomponent/textareacomponent';
import { Verificationcode } from './pages/verificationcode/verificationcode';
import { Modals } from './pages/modals/modals';
import { Inputdropdownmenu } from './pages/inputdropdownmenu/inputdropdownmenu';
import { Dropdownmenu } from './pages/dropdownmenu/dropdownmenu';

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
    },
    {
        path:'input-field',
        component:Inputfield
    },
    {
        path:'textarea',
        component:Textareacomponent
    },
    {
        path:'verification',
        component:Verificationcode
    },
    {
        path:'modals',
        component:Modals
    },
    {
        path:'input-dropdown-menu',
        component:Inputdropdownmenu
    },
    {
        path:'dropdown',
        component:Dropdownmenu
    }
];
