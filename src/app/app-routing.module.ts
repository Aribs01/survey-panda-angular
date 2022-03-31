import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMainComponent } from './app.main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { ResponseComponent } from './components/response/response.component';

const routes: Routes = [
  {path: '', component: AppMainComponent,
  children: [
      {path: '', redirectTo:"dashboard", pathMatch:"full"},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'quiz', component: QuizComponent},
      {path: 'response', component: ResponseComponent}
      ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
