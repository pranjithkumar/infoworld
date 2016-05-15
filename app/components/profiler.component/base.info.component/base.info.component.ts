import {Component, Input, OnInit} from '@angular/core';
import { FORM_DIRECTIVES, NgControlGroup, Control, FormBuilder, ControlGroup, Validators, AbstractControl  } from '@angular/common';
import {RouteParams, ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
import {SessionUrlHandler} from '../../../shared/infostorage';
import {DateToAgePipe} from '../../../pipes/datetoage.pipe';


@Component({
    selector: 'Basic-Info-View',
    templateUrl: '../app/components/profiler.component/base.info.component/base.info.view.html',
    styleUrls: ['../app/components/profiler.component/base.info.component/base.info.css', "../app/components/profiler.component/profiler.css"],
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES],
    providers: [SessionUrlHandler],
    pipes: [DateToAgePipe]
})

export class BaseDetailComponent implements OnInit { 
    @Input('baseInfoEdit') basicInfoEdit: boolean;
    @Input('baseInfoData') baseInfo: any;
    private basicinfoForm: ControlGroup;
    private profileImage: string;
    private openEditPanel: boolean;

    constructor(private _routeParams: RouteParams, builder: FormBuilder, private UrlSession: SessionUrlHandler) {
        this.basicinfoForm = builder.group({
            displayname: ["", Validators.required],
            currentProfession: ["", Validators.required],
            address: ["", Validators.required],
            contryCode: ["", Validators.compose([Validators.required, Validators.pattern('\d+')])],
            phoneNumber: ["", Validators.compose([Validators.required, Validators.pattern('\d+')])],
            emailAddress: ["", Validators.compose([Validators.required, this.emailValidator])],
            dob: ["", Validators.required],
        });
    }

    ngOnInit() {
        let self = this;
        console.log(this.baseInfo);
        this.profileImage = self.UrlSession.getgravitor(250);
        console.log(self.UrlSession.getgravitor(250));
        if(this.basicInfoEdit) {
            this.openEditPanel = true;
        } else {
            this.openEditPanel = false;
        }

    }

    saveBasicInfo(data: any) {
        let self = this;
        console.log(data.value);
        self.UrlSession.updateKeyContent("basicInfo", data.value);
        this.openEditPanel = false;
    }
    
    emailValidator(control: Control): { [key: string]: any } {
        var emailRegexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (control && "value" in control) {
            if (control.value && !emailRegexp.test(control.value)) {
                return { invalidEmail: true };
            }
        }
    }
    
    OpenAndCloseBasicInfo(status){
        this.openEditPanel = status;
    }
}