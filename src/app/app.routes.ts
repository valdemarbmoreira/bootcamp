import {ChatComponent} from './chat/chat.component';
import { RouterModule, Routes} from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';
import {AppComponent} from './app.component';

const appRoutes: Routes = [
{path: '', component: ChatComponent},
{path: 'chat', component: ChatComponent},
{path: 'sobre', component: SobreComponent},
{path: '**', component: ChatComponent},


];

export const routing = RouterModule.forRoot(appRoutes);
