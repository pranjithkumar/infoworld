import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Router} from "@angular/router-deprecated";
import 'rxjs/Rx';

@Injectable()
export class HttpServices {
    private apiUrl = 'http://localhost:9080/';
   
    constructor(private http: Http, private router: Router) {
    }

    GetHttp() {
        var self = this;
        return self.http.get('http://localhost:9080/').catch(self.ErrorHandler);
    }

    private ErrorHandler(error: Response) {
        console.log(error.json());
        return Observable.throw(error.json() || null);
    }
}