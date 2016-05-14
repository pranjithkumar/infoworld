import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/common';
import {RouteParams, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {DelayService} from '../../../service/delayService';

import Skill = require("skill");

@Component({
    selector: 'list-item-with-progress',
    templateUrl: '../app/components/profiler.component/listwithprogressbar.component/listwithprogressbar.html',
    styleUrls: ['../app/components/profiler.component/listwithprogressbar.component/listwithprogressbar.css'],
    providers: [DelayService],
    directives: [ROUTER_DIRECTIVES]
})
export class ListWithProgressComponent implements OnInit {
    @Input('cardEdit') cardEdit: boolean;
    @Input('listItem') listItem: Skill[];
    @Input('listTitle') listTitle: string;

    constructor(private _routeParams: RouteParams, private delayAsyn: DelayService) {

    }

    ngOnInit() {
        let id = this._routeParams.get('profileurl');
        console.log(id);
    }
    
    private focusOn(elment){
        elment.focus();
    }

}