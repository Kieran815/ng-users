import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent }   from './users/users.component';
import { ArticlesComponent } from './articles/articles.component';
import { UserViewComponent } from './user-view/user-view.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent }   from './user-edit/user-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full'},
  { path: 'users', component: UsersComponent },
  { path: 'users/view/:id', component: UserViewComponent },
  { path: 'users/create', component: UserCreateComponent },
  { path: 'users/edit/:id', component: UserEditComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/view/:id', component: ArticleViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
