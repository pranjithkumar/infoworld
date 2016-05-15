import {Component,OnInit} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {HomeComponent} from '../home.component/home.component';
import {ProfilerComponent} from '../profiler.component/profiler.component';
import {HttpServices} from '../../service/httpServices';
import {SeederUrlHandler} from '../../shared/seeder';

@Component({
    selector: 'my-app',
    templateUrl: '../app/components/app.component/app.view.html',
    providers: [HttpServices,SeederUrlHandler],
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/:profileurl', name: 'Profiler', component: ProfilerComponent },
    { path: '/:profileurl/:edit', name: 'ProfilerEdit', component: ProfilerComponent }
])

export class AppComponent implements OnInit {
    private loacationUrl: string;

    constructor(private httpServices: HttpServices,private SeederHandler: SeederUrlHandler) {
        
       
    }
    ngOnInit() {
        let self = this; 
        this.httpServices.GetHttp()
            .map(res => res.json())
            .subscribe(data => self.SuccessOn(data,this.SeederHandler), error => self.ErrorOn(error));
    }
    public SuccessOn(result: any,SeederHandler: SeederUrlHandler) {
        console.log(result);
        SeederHandler.update_seeder(result);
        
    }

    public ErrorOn(err: any) {
        console.log(err);
    }
}