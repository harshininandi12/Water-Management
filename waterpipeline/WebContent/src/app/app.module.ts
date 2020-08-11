import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { FunctionaltiesComponent } from './functionalties/functionalties.component';
import {HttpClientModule} from '@angular/common/http';
import { WaterqualityComponent } from './waterquality/waterquality.component';
import { ContaminationComponent } from './contamination/contamination.component';
import { TestComponent } from './test/test.component';
const appRoot: Routes = [{path:'',component:HomeComponent},
                          {path:'login',component:LoginComponent},
                          {path:'register',component:RegisterComponent},
                          {path:'functionalties',component:FunctionaltiesComponent},
                          {path:'appComponent',component:AppComponent},
                          {path:'waterquality',component:WaterqualityComponent},
                          {path:'contamination',component:ContaminationComponent},
                          {path:'test',component:TestComponent}];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FunctionaltiesComponent,
    WaterqualityComponent,
    ContaminationComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    RouterModule.forRoot(appRoot)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
