import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {HomeComponent} from '../home.component/home.component';
import {ProfilerComponent} from '../profiler.component/profiler.component';

@Component({
    selector: 'my-app',
    templateUrl: '../app/components/app.component/app.view.html',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/:profileurl', name: 'Profiler', component: ProfilerComponent },
    { path: '/:profileurl/:edit', name: 'ProfilerEdit', component: ProfilerComponent }
])

export class AppComponent {
    private loacationUrl: string;

    constructor() {
        
    }
}