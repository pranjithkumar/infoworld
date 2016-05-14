import {Component, OnInit} from '@angular/core';
import {RouteParams, ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
import {BaseDetailComponent} from './base.info.component/base.info.component';

@Component({
    templateUrl: '../app/components/profiler.component/profiler.view.html',
    directives: [ROUTER_DIRECTIVES, BaseDetailComponent]
})

export class ProfilerComponent implements OnInit {
    private userUrl: string;

    constructor(private _routeParams: RouteParams,
        private route: Router) {
    }

    ngOnInit() {
        var self = this;
        self.userUrl = self._routeParams.get('profileurl');
    }
}