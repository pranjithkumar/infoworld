import {Component, OnInit} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
import {UrlForm}    from './modal/urlform.model';
import {LoginComponent} from './login.component/login.component';
import {SessionProfileHandler} from '../../shared/profilestorage';

@Component({
    selector: 'Home-View',
    templateUrl: '../app/components/home.component/home.view.html',
    styleUrls: ['../app/components/home.component/home.css'],
    providers: [SessionProfileHandler],
    directives: [ROUTER_DIRECTIVES, LoginComponent]
})

export class HomeComponent implements OnInit {
    private userLoginStatus: boolean = false;
    private urlModel = new UrlForm("");
    private active = true;
    private errorMessage: string;
    private createFormStatus: boolean;
    private loacationUrl: string;
    private words = [];

    constructor(private route: Router, private prof: SessionProfileHandler) {

        let self = this;
        this.errorMessage = "";
        this.loacationUrl = window.location.origin;

        this.loacationUrl = window.location.origin;

        console.log(this.prof.getProfiles());

        let data = this.prof.getProfiles();

        data.forEach(function (element) {
            let objWord = {
                text: element.url.charAt(0).toUpperCase() + element.url.slice(1),
                weight: element.visit,
                handlers: {
                    click: function () {
                        self.route.navigate(['Profiler', { profileurl: element.url }]);
                    }
                }
            };
            self.words.push(objWord);
        })

        $('#col1').show();

        if (!$('#col1').html()) {
            $('#col1').jQCloud(this.words, {
                width: 500,
                height: 250
            });
        } else {
            $('#col1').jQCloud('update', this.words);
        }

    }

    ngOnInit() {
        if (localStorage.getItem("userStatus")) {
            this.userLoginStatus = true;
        }
    }

    private closeCreatePanel() {
        this.errorMessage = "";
        this.createFormStatus = false;
    }

    private addAndRemoveAnimation(classStatus: boolean, topElement: any, bottomElement: any, errorElement: any) {
        console.log(classStatus);

        if (topElement.classList.contains("add-info-up")) {
            topElement.classList.remove("add-info-up");
            topElement.classList.add("add-info-down");
        } else {
            topElement.classList.remove("add-info-down");
            topElement.classList.add("add-info-up");
        }

        if (bottomElement.classList.contains("add-info-down")) {
            bottomElement.classList.remove("add-info-down");
            bottomElement.classList.add("add-info-up");
        } else {
            bottomElement.classList.remove("add-info-up");
            bottomElement.classList.add("add-info-down");
        }

        if (!localStorage.getItem("id_token")) {
            this.errorMessage = "";
            if (errorElement.classList.contains("error-message-show")) {
                errorElement.classList.remove("error-message-show");
            }
        }
    }

    private onSubmit(formData: UrlForm, upProgressElement: any, downProgressElement: any, errorElement: any) {
        console.log("submitForm *******", formData);
        if (formData.infoURL.trim()) {
            upProgressElement.classList.add("loading-progress-up");
            downProgressElement.classList.add("loading-progress-down");
            $('#col1').hide();
            this.route.navigate(['Profiler', { profileurl: formData.infoURL }]);
        } else {
            this.errorMessage = "Please Write URL";
            this.createFormStatus = false;
            if (errorElement.classList.contains("error-message-show")) {
                errorElement.classList.remove("error-message-show");
                errorElement.classList.add("error-message-show");
            } else {
                errorElement.classList.add("error-message-show");
            }
        }
    }
}