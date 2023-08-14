import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ComponentsComponent } from './components/components.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { HomeComponent } from './home/home.component';
import { SingleReviewComponent } from './single.review/single.review.component';
const routes: Routes = [
  {path: "components", component: ComponentsComponent},
  {path: "reviews", component: ReviewsComponent},
  {path: "", component: HomeComponent},
  {path: "reviews/:id", component: SingleReviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
