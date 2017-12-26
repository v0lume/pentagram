import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';

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
