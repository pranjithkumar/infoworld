import {Component, Input, Output, EventEmitter} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
import {JwtHelper} from 'angular2-jwt/angular2-jwt';


@Component({
    selector: 'Login-View',
    templateUrl: '../app/components/home.component/login.component/login.view.html',
    styleUrls: ['../app/components/home.component/login.component/login.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class LoginComponent {
    private jwtHelper: JwtHelper = new JwtHelper();

    constructor(private route: Router) {
        
    }
}