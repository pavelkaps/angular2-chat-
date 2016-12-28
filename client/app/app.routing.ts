/**
 * Created by Паша on 10.11.2016.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent} from './components/chat/chat.component';
import {MainComponent} from './components/main/main.component'
import {AuthGuard} from "./auth/auth.guard";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    },
    {
        path: 'authorization',
        component: MainComponent
    },
    {
        path: 'main',
        loadChildren: 'app/components/chat/chat.module#ChatModule',
        canLoad: [AuthGuard]

    },
    { path: "**",
        redirectTo:"/main"
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);