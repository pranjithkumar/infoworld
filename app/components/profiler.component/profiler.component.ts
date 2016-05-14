import {Component, OnInit} from '@angular/core';
import {RouteParams, ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
import {CardComponent} from './cards.component/cards.component';
import {BaseDetailComponent} from './base.info.component/base.info.component';
import {TitleWithTextAreaComponent} from './titlewithtextarea.component/titlewithtextarea.component';
import {ListItemComponent} from './list.item.component/list.item.component';
import {ListWithProgressComponent} from './listwithprogressbar.component/listwithprogressbar.component';
import {DelayService} from '../../service/delayService';

import CardInfo = require("cardinfo");
import Profile = require("profileData");
import Knowledge = require("knowledge");

@Component({
    templateUrl: '../app/components/profiler.component/profiler.view.html',
    directives: [ROUTER_DIRECTIVES, CardComponent, BaseDetailComponent, TitleWithTextAreaComponent, ListItemComponent, ListWithProgressComponent],
    providers: [DelayService]
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
        private route: Router) {
    }

    ngOnInit() {
        var self = this;
        self.userUrl = self._routeParams.get('profileurl');

        if (self._routeParams.get('edit')) {
            var paramsValue = self._routeParams.get('edit');
            self.editStatus = (paramsValue == "edit" || paramsValue == "create") ? true : false;
        }

        self.objectiveTitle = "Objective";
        self.aboutTitle = "About";
        self.knowledgeTitle = "Knowledge";
        self.skillTitle = "Skill";

        self.profile = {
            "searchUrl": "sample",
            "basicInfo": {
                "profileImage": "",
                "title": "Mr",
                "name": "Sample Name",
                "phoneNumber": 9715261931,
                "address": "No. 50 second cross, kargil nagar, velrampet.",
                "currentProfession": "Web & UI Developer"
            },

            "objective": "These samples of resumes and cover letters are intended purely as a guide to what is possible. Do not simply try to copy them for your own resume, because your resume should be unique (like you!).",
            "about": "These samples of resumes and cover letters are intended purely as a guide to what is possible. Do not simply try to copy them for your own resume, because your resume should be unique (like you!).",
            "knowledge": [
                {
                    "title": "Knowledge you gainde",
                    "editStatus": false
                },
                {
                    "title": "Knowledge you gainde",
                    "editStatus": false
                },
            ],
            "skill": [
                {
                    "title": "Technologies",
                    "percentage": 80
                },
                {
                    "title": "Specialities",
                    "percentage": 60
                }
            ],
            "exprience": [
                {
                    "from": 2015,
                    "to": 2016,
                    "title": "Example Data (Profession)",
                    "subTitle": "Company name",
                    "editInfo": false,
                    "addAnim": false,
                    "removeAnim": false
                }
            ],
            "education": [
                {
                    "from": 2015,
                    "to": 2016,
                    "title": "Institue Name",
                    "subTitle": "Course or Class",
                    "editInfo": false,
                    "addAnim": false,
                    "removeAnim": false
                }
            ]
        };

        self.knowledgeList = self.profile.knowledge;
        self.aboutMessage = self.profile.about;
        self.objectiveMessage = self.profile.objective;
        self.skillList = self.profile.skill;
        self.expList = self.profile.exprience;
        self.eduList = self.profile.education;
        console.log(self.profile.basicInfo);
    }
}