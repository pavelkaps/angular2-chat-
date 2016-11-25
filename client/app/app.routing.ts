/**
 * Created by Паша on 10.11.2016.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorizationComponent} from './components/authorization/authorization.component';
import { RegistrationComponent} from './components/registration/registration.component';
import { ChatComponent} from './components/chat/chat.component';
import {MainComponent} from './components/main/main.component'

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/authorization',
        pathMatch: 'full'
    },
    {
        path: 'authorization',
        component: MainComponent
    },
    {
        path: 'main',
        component: ChatComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);