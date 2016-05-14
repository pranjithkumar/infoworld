import {Component, Input, OnInit} from '@angular/core';
import {RouteParams, ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';

@Component({
    selector: 'Basic-Info-View',
    templateUrl: '../app/components/profiler.component/base.info.component/base.info.view.html',
    directives: [ROUTER_DIRECTIVES]
})

export class BaseDetailComponent implements OnInit {
    @Input('baseInfoEdit') basicInfoEdit: boolean;
    @Input('baseInfoData') baseInfo: any;

    constructor(private _routeParams: RouteParams) {
    }

    ngOnInit() {
        
    }
}