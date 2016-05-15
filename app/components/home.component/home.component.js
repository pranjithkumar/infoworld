System.register(['@angular/core', '@angular/router-deprecated', './modal/urlform.model', './login.component/login.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_deprecated_1, urlform_model_1, login_component_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (urlform_model_1_1) {
                urlform_model_1 = urlform_model_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(route) {
                    this.route = route;
                    this.userLoginStatus = false;
                    this.urlModel = new urlform_model_1.UrlForm("");
                    this.active = true;
                    this.errorMessage = "";
                }
                HomeComponent.prototype.ngOnInit = function () {
                    if (localStorage.getItem("userStatus")) {
                        this.userLoginStatus = true;
                    }
                };
                HomeComponent.prototype.closeCreatePanel = function () {
                    this.errorMessage = "";
                    this.createFormStatus = false;
                };
                HomeComponent.prototype.addAndRemoveAnimation = function (classStatus, topElement, bottomElement, errorElement) {
                    console.log(classStatus);
                    if (topElement.classList.contains("add-info-up")) {
                        topElement.classList.remove("add-info-up");
                        topElement.classList.add("add-info-down");
                    }
                    else {
                        topElement.classList.remove("add-info-down");
                        topElement.classList.add("add-info-up");
                    }
                    if (bottomElement.classList.contains("add-info-down")) {
                        bottomElement.classList.remove("add-info-down");
                        bottomElement.classList.add("add-info-up");
                    }
                    else {
                        bottomElement.classList.remove("add-info-up");
                        bottomElement.classList.add("add-info-down");
                    }
                    if (!localStorage.getItem("id_token")) {
                        this.errorMessage = "";
                        if (errorElement.classList.contains("error-message-show")) {
                            errorElement.classList.remove("error-message-show");
                        }
                    }
                };
                HomeComponent.prototype.onSubmit = function (formData, upProgressElement, downProgressElement, errorElement) {
                    console.log("submitForm *******", formData);
                    if (formData.infoURL.trim()) {
                        upProgressElement.classList.add("loading-progress-up");
                        downProgressElement.classList.add("loading-progress-down");
                        this.route.navigate(['Profiler', { profileurl: formData.infoURL }]);
                    }
                    else {
                        this.errorMessage = "Please Write URL";
                        this.createFormStatus = false;
                        if (errorElement.classList.contains("error-message-show")) {
                            errorElement.classList.remove("error-message-show");
                            errorElement.classList.add("error-message-show");
                        }
                        else {
                            errorElement.classList.add("error-message-show");
                        }
                    }
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'Home-View',
                        templateUrl: '../app/components/home.component/home.view.html',
                        styleUrls: ['../app/components/home.component/home.css'],
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES, login_component_1.LoginComponent],
                    }), 
                    __metadata('design:paramtypes', [router_deprecated_1.Router])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map