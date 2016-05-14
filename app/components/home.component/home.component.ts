import {Component, OnInit} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
import {UrlForm}    from './modal/urlform.model';
import {LoginComponent} from './login.component/login.component';

@Component({
    selector: 'Home-View',
    templateUrl: '../app/components/home.component/home.view.html',
    styleUrls: ['../app/components/home.component/home.css'],
    directives: [ROUTER_DIRECTIVES, LoginComponent],
})

export class HomeComponent implements OnInit {
    private userLoginStatus: boolean = false;
    private urlModel = new UrlForm("");
    private active = true;
    private errorMessage: string;
    private createFormStatus: boolean;

    constructor(private route: Router) {
        this.errorMessage = "";
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
            this.route.navigate(['Profiler', { profileurl: formData.infoURL }]);
        } else {
            this.errorMessage = "Please write the url ...!";
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