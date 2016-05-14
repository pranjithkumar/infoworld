import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/common';
import {RouteParams, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {DelayService} from '../../../service/delayService';

@Component({
    selector: 'title-with-text-area',
    templateUrl: '../app/components/profiler.component/titlewithtextarea.component/titlewithtextarea.html',
    styleUrls: ['../app/components/profiler.component/titlewithtextarea.component/titlewithtextarea.css'],
    providers: [DelayService],
    directives: [ROUTER_DIRECTIVES]
})
export class TitleWithTextAreaComponent implements OnInit {
    @Input('cardEdit') cardEdit: boolean;
    @Input('cardMessage') cardMessage: string;
    @Input('cardTitle') title: string;

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