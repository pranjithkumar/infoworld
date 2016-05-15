import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {HomeComponent} from '../home.component/home.component';
import {ProfilerComponent} from '../profiler.component/profiler.component';
import {HttpServices} from '../../service/httpServices';

@Component({
    selector: 'my-app',
    templateUrl: '../app/components/app.component/app.view.html',
    directives: [ROUTER_DIRECTIVES, HttpServices]
})

@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/:profileurl', name: 'Profiler', component: ProfilerComponent },
    { path: '/:profileurl/:edit', name: 'ProfilerEdit', component: ProfilerComponent }
])

export class AppComponent {
    private loacationUrl: string;

    constructor(private httpServices: HttpServices) {
        let self = this;
        this.httpServices.GetHttp()
            .map(res => res.json())
            .subscribe(data => self.SuccessOn(data), error => self.ErrorOn(error));
    }
    
    public SuccessOn(result: any) {
        console.log(result);
    }

    public ErrorOn(err: any) {
        console.log(err);
    }
}