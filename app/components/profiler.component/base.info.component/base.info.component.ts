import {Component, Input, OnInit} from '@angular/core';
import { FORM_DIRECTIVES, NgControlGroup, Control, FormBuilder, ControlGroup, Validators, AbstractControl  } from '@angular/common';
import {RouteParams, ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
import {SessionUrlHandler} from '../../../shared/infostorage';


@Component({
    selector: 'Basic-Info-View',
    templateUrl: '../app/components/profiler.component/base.info.component/base.info.view.html',
    styleUrls: ['../app/components/profiler.component/base.info.component/base.info.css', "../app/components/profiler.component/profiler.css"],
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES],
    providers: [SessionUrlHandler]
})

export class BaseDetailComponent implements OnInit {
    @Input('baseInfoEdit') basicInfoEdit: boolean;
    @Input('baseInfoData') baseInfo: any;
    private basicinfoForm: ControlGroup;

    constructor(private _routeParams: RouteParams, builder: FormBuilder, private UrlSession: SessionUrlHandler) {
        this.basicinfoForm = builder.group({
            displayname: ["", Validators.required],
            currentProfession: ["", Validators.required],
            address: ["", Validators.required],
            contryCode: ["", Validators.compose([Validators.required, Validators.pattern('\d+')])],
            phoneNumber: ["", Validators.compose([Validators.required, Validators.pattern('\d+')])],
        });
    }

    ngOnInit() {
        console.log(this.baseInfo);
        
        
    }

    saveBasicInfo(data: any) {
        let self = this;
        console.log(data.value);
        self.UrlSession.updateKeyContent("basicInfo", data.value);
    }
}