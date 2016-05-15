import {Component, Input, OnInit} from '@angular/core';
import { FORM_DIRECTIVES, NgControlGroup, Control, FormBuilder, ControlGroup, Validators, AbstractControl  } from '@angular/common';
import {RouteParams, ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
import {SessionUrlHandler} from '../../../shared/infostorage';
import {SessionProfileHandler} from '../../../shared/profilestorage';
import {DateToAgePipe} from '../../../pipes/datetoage.pipe';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';


@Component({
    selector: 'Basic-Info-View',
    templateUrl: '../app/components/profiler.component/base.info.component/base.info.view.html',
    styleUrls: ['../app/components/profiler.component/base.info.component/base.info.css', "../app/components/profiler.component/profiler.css"],

    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES],
    providers: [SessionUrlHandler, SessionProfileHandler, ToastsManager],
    pipes: [DateToAgePipe]
})


export class BaseDetailComponent implements OnInit { 
    @Input('baseInfoEdit') basicInfoEdit: boolean;
    @Input('baseInfoData') baseInfo: any;
    private basicinfoForm: ControlGroup;
    private profileImage: string;
    private openEditPanel: boolean;

constructor(private _routeParams: RouteParams,                 
                 private UrlSession: SessionUrlHandler,
                 private prof:SessionProfileHandler,
                 public toastr: ToastsManager,
                 builder: FormBuilder) { 
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
        self.showSuccess();
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
    
    showSuccess() {
        this.toastr.success('You are awesome!', 'Success!');
    }

    showError() {
        this.toastr.error('This is not good!', 'Oops!');
    }

    showWarning() {
        this.toastr.warning('You are being warned.', 'Alert!');
    }

    showInfo() {
        this.toastr.info('Just some information for you.');
    }
    
}