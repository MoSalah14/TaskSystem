import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TaskSystem';
  showNavAndFooter: boolean = true;

 constructor(private router:Router)
 {
  this.router.events.pipe(
    filter(event => event instanceof NavigationEnd)
  ).subscribe(() => {
    this.checkIfNotLoginFormRoute();
  }); 
 } 
 checkIfNotLoginFormRoute(): void {
  this.showNavAndFooter = this.router.url !== '/login' && this.router.url!=='/register';
}
}
