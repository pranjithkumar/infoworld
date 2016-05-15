import { bootstrap }    from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {AppComponent} from './components/app.component/app.component';
import {ToastOptions} from "ng2-toastr/ng2-toastr";


let options = {
      positionClass: 'toast-bottom-right',
    };


bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    provide(ROUTER_PROVIDERS, { useValue: '/' }),
    provide(ToastOptions, { useValue: new ToastOptions(options)}),
]);