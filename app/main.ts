import { bootstrap }    from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {AppComponent} from './components/app.component/app.component';
import {HttpServices} from './service/httpServices';
import {ToastOptions} from "ng2-toastr/ng2-toastr";


let options = {
      positionClass: 'toast-bottom-right',
    };

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(ROUTER_PROVIDERS, { useValue: '/' }),
    HttpServices
    provide(ToastOptions, { useValue: new ToastOptions(options)}),
]);