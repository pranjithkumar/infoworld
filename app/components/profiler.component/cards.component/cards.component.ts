import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/common';
import {RouteParams, Router} from '@angular/router-deprecated';
import {DelayService} from '../../../service/delayService';
import {SessionUrlHandler} from '../../../shared/infostorage';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';

import CardInfo = require("cardinfo");

@Component({
    selector: 'card-with-title',
    templateUrl: '../app/components/profiler.component/cards.component/cards.view.html',
    styleUrls: ['../app/components/profiler.component/cards.component/cards.css'],
    providers: [DelayService, SessionUrlHandler, ToastsManager]
})
export class CardComponent implements OnInit {
    @Input('cardEdit') cardEdit: boolean;
    @Input('cardArray') cardArray: CardInfo[];
    @Input('cardTitle') title: string;

    private urlSearch: string;
    private cardEditUi: boolean = false;
    private defaltCard: boolean = false;
    private editStatus: boolean = false;
    private cardInfo: CardInfo;
    private year = [];
    private editOpen: boolean = false;
    private today: Date = new Date();
    private errorForms: boolean;
    private errorMessage: string;

    constructor(private _routeParams: RouteParams, private delayAsyn: DelayService, private UrlSession: SessionUrlHandler, private route: Router, public toastr: ToastsManager) {

    }

    ngOnInit() {
        var self = this;
        this.urlSearch = this._routeParams.get('profileurl');
        console.log(this.urlSearch);
        self.defaltCard = (this.cardArray.length == 0) ? true : false;
        for (var i = 1930; i <= this.today.getFullYear() + 1; i++) {
            this.year.push(i);
        }
    }

    public AddCard() {
        if (!this.cardEdit) {
            this.route.navigate(['ProfilerEdit', { profileurl: this.urlSearch, edit: "edit" }]);
            return;
        }

        if (this.cardArray.length > 0) {
            this.cardArray[0].addAnim = false;
        }

        this.cardArray.forEach(function (element) {
            element.removeAnim = false;
        })

        var card = {
            from: 0,
            to: 0,
            title: "",
            subTitle: "",
            editInfo: true,
            addAnim: true,
            removeAnim: false,
            errorForms: false
        }

        this.cardArray.unshift(card);

    }

    public OpenEdit(event, model, editStatus) {
        model.editInfo = editStatus;
    }

    public DeleteCard(event, index, model) {
        var self = this;
        model.removeAnim = true;
        var array = self.cardArray;
        self.showInfo();
        self.delayAsyn.Delay(300, function (i) {
            array.splice(index, 1);
            self.cardArray = array;
        }, index);
    }

    public SaveCardData(model) {
        let self = this;

        self.errorForms = false;
        self.errorMessage = "";

        self.cardArray.forEach(function (element) {
            if (element.from == 0 || element.to == 0 || !element.title.trim() || !element.subTitle.trim()) {
                self.errorForms = true;
                element.errorForms = true;
                self.errorMessage = "Please fill the error forms.";
            } else {
                element.errorForms = false;
            }
        });

        let key = "";
        if (self.title == "Work Experience") {
            key = "exprience"
        } else if (self.title == "Education Value") {
            key = "education"
        }

        if (self.errorForms) {
            self.showError();
            let filterNonErrorForms = self.cardArray.filter(function (element) {
                return !element.errorForms;
            });
            console.log("error*****()()***", filterNonErrorForms);
            self.UrlSession.updateKeyContent(key, filterNonErrorForms);
            return;
        }

        self.showSuccess();
        console.log(self.cardArray);
        self.UrlSession.updateKeyContent(key, self.cardArray);
        console.log(self.cardArray);
    }
    
    
    showSuccess() {
        this.toastr.success('Your data saved!', 'Success !');
    }

    showError() {
        this.toastr.error('Something went wrong!', 'Oops !');
    }

    showWarning() {
        this.toastr.warning('You are deleted something.', 'Alert !');
    }

    showInfo() {
        this.toastr.info('You are deleted something.', 'Information !');
    }
    
}