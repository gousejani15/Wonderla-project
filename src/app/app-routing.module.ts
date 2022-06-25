import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BooknowComponent } from './booknow/booknow.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MainComponent } from './main/main.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  {path:"main",component: MainComponent},
  {path:"about",component: AboutComponent},
  {path:"gallery",component: GalleryComponent},
  {path:"booknow",component: BooknowComponent},
  {path:"ticket",component: TicketComponent},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
