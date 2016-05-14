import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/common';
import {RouteParams, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {DelayService} from '../../../service/delayService';

import CardInfo = require("cardinfo");

@Component({
    selector: 'card-with-title',
    templateUrl: '../app/components/profiler.component/cards.component/cards.view.html',
    styleUrls: ['../app/components/profiler.component/cards.component/cards.css'],
    providers: [DelayService],
    directives: [ROUTER_DIRECTIVES]
})
export class CardComponent implements OnInit {
    @Input('cardEdit') cardEdit: boolean;
    @Input('cardArray') cardArray: CardInfo[];
    @Input('cardTitle') title: string;

    private cardEditUi: boolean = false;
    private editStatus: boolean = false;
    private cardInfo: CardInfo;
    private year = [];
    private editOpen: boolean = false;
    private today: Date = new Date();

    constructor(private _routeParams: RouteParams, private delayAsyn: DelayService) {

    }

    ngOnInit() {
        let id = this._routeParams.get('profileurl');
        console.log(id);

        for (var i = 1930; i <= this.today.getFullYear() + 1; i++) {
            this.year.push(i);
        }
    }

    public AddCard() {
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
            removeAnim: false
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
        self.delayAsyn.Delay(300, function (i) {
            array.splice(index, 1);
            self.cardArray = array;
        }, index);
    }
}