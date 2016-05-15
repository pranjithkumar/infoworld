import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/common';
import {RouteParams, Router} from '@angular/router-deprecated';
import {DelayService} from '../../../service/delayService';
import {SessionUrlHandler} from '../../../shared/infostorage';

@Component({
    selector: 'title-with-text-area',
    templateUrl: '../app/components/profiler.component/titlewithtextarea.component/titlewithtextarea.html',
    styleUrls: ['../app/components/profiler.component/titlewithtextarea.component/titlewithtextarea.css'],
    providers: [DelayService, SessionUrlHandler]
})
export class TitleWithTextAreaComponent implements OnInit {
    @Input('cardEdit') cardEdit: boolean;
    @Input('cardMessage') cardMessage: string;
    @Input('cardTitle') title: string;

    private errorForms: boolean;
    private urlSearch: string;

    constructor(private _routeParams: RouteParams, private delayAsyn: DelayService, private UrlSession: SessionUrlHandler, private route: Router) {

    }

    ngOnInit() {
        this.urlSearch = this._routeParams.get('profileurl');
        console.log(this.urlSearch);
    }

    private focusOn(elment) {
        elment.focus();
    }

    private AddItem() {
        if (!this.cardEdit) {
            this.route.navigate(['ProfilerEdit', { profileurl: this.urlSearch, edit: "edit" }]);
            return;
        }
    }

    private SaveListData(dataElement: any) {
        console.log(dataElement.textContent);
        let self = this;
        self.errorForms = false;

        let key = "";
        if (self.title == "Objective") {
            key = "objective"
        } else if (self.title == "About") {
            key = "about"
        }

        self.UrlSession.updateKeyContent(key, dataElement.textContent);
    }
}