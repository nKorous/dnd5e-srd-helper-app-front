import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpellsHomeComponent } from './components/spells-home/spells-home.component';

const routes: Routes = [
  { path: '', component: SpellsHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
