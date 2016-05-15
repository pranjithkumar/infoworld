import { bootstrap }    from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {AppComponent} from './components/app.component/app.component';
import {HttpServices} from './service/httpServices';


bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(ROUTER_PROVIDERS, { useValue: '/' }),
    HttpServices
]);