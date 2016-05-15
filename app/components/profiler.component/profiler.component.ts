import {Component, OnInit} from '@angular/core';
import {RouteParams, ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
import {CardComponent} from './cards.component/cards.component';
import {BaseDetailComponent} from './base.info.component/base.info.component';
import {TitleWithTextAreaComponent} from './titlewithtextarea.component/titlewithtextarea.component';
import {ListItemComponent} from './list.item.component/list.item.component';
import {ListWithProgressComponent} from './listwithprogressbar.component/listwithprogressbar.component';
import {DelayService} from '../../service/delayService';
import {SessionUrlHandler} from '../../shared/infostorage';

import CardInfo = require("cardinfo");
import Profile = require("profileData");
import Knowledge = require("knowledge");

@Component({
    templateUrl: '../app/components/profiler.component/profiler.view.html',
    styleUrls: ['../app/components/profiler.component/profiler.css'],
    directives: [ROUTER_DIRECTIVES, CardComponent, BaseDetailComponent, TitleWithTextAreaComponent, ListItemComponent, ListWithProgressComponent],
    providers: [DelayService, SessionUrlHandler]
})

export class ProfilerComponent implements OnInit {
    private editStatus: boolean = false;
    private userUrl: string;
    private workExperienceTitle: string;
    private educationTitle: string;
    private aboutTitle: string;
    private aboutMessage: string;
    private objectiveTitle: string;
    private objectiveMessage: string;
    private knowledgeTitle: string;
    private knowledgeList: Knowledge[];
    private skillTitle: string;
    private skillList: Skill[];
    private profile: Profile;
    private expList: CardInfo[];
    private eduList: CardInfo[];

    constructor(private _routeParams: RouteParams,
        private route: Router, private UrlSession: SessionUrlHandler) {
            $('#col1').hide();
    }

    ngOnInit() {
        var self = this;
        self.userUrl = self._routeParams.get('profileurl');

        if (self._routeParams.get('edit')) {
            var paramsValue = self._routeParams.get('edit');
            self.editStatus = (paramsValue == "edit" || paramsValue == "create") ? true : false;
        }

        self.workExperienceTitle = "Work Experience";
        self.educationTitle = "Education Value";
        self.objectiveTitle = "Objective";
        self.aboutTitle = "About";
        self.knowledgeTitle = "Hobbies";
        self.skillTitle = "Skills";
        self.UrlSession.getOrCreateContent();
        console.log(self.UrlSession.getOrCreateContent());
        self.profile = self.UrlSession.getOrCreateContent();
        self.knowledgeList = self.profile.knowledge;
        self.aboutMessage = self.profile.about;
        self.objectiveMessage = self.profile.objective;
        self.skillList = self.profile.skill;
        self.expList = self.profile.exprience;
        self.eduList = self.profile.education;
    }

    GoToEditOrPreview() {
        let self = this;
        if (self.editStatus) {
            this.route.navigate(['Profiler', { profileurl: self.userUrl }]);
        } else {
            this.route.navigate(['ProfilerEdit', { profileurl: self.userUrl, edit: "edit" }]);
        }
    }
}