/**
 * Created by Паша on 26.12.2016.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from './chat.component';
import { AuthGuard } from "../../auth/auth.guard";

const routes: Routes = <Routes>[
    {
        path: '',
        component: ChatComponent,
        canActivate: [AuthGuard]
    }
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);