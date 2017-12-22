import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'user', component: UserComponent },
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes),
      NgbModule,
    ],
    exports: [ RouterModule ],
})

export class AppRoutingModule { }
