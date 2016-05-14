import {Component, OnInit} from '@angular/core';
import {RouteParams, ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
import {BaseDetailComponent} from './base.info.component/base.info.component';
import {TitleWithTextAreaComponent} from './titlewithtextarea.component/titlewithtextarea.component';
import {ListItemComponent} from './list.item.component/list.item.component';
import {DelayService} from '../../service/delayService';

@Component({
    templateUrl: '../app/components/profiler.component/profiler.view.html',
    directives: [ROUTER_DIRECTIVES, BaseDetailComponent, TitleWithTextAreaComponent, ListItemComponent], 
    providers: [DelayService]
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