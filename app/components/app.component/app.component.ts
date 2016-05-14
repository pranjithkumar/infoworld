import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {HomeComponent} from '../home.component/home.component';

@Component({
    selector: 'my-app',
    templateUrl: '../app/components/app.component/app.view.html', 
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true }
])

export class AppComponent { }