import {Component, OnInit} from '@angular/core';
import {RouteParams, ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
import {BaseDetailComponent} from './base.info.component/base.info.component';
import {TitleWithTextAreaComponent} from './titlewithtextarea.component/titlewithtextarea.component';
import {DelayService} from '../../service/delayService';

import Profile = require("profileData");

@Component({
    templateUrl: '../app/components/profiler.component/profiler.view.html',
    directives: [ROUTER_DIRECTIVES, BaseDetailComponent, TitleWithTextAreaComponent],
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
    private skillTitle: string;
    private profile: Profile;
    
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
        }

        console.log(self.profile.basicInfo);
    }
}