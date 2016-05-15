System.register(['@angular/platform-browser-dynamic', '@angular/core', '@angular/http', '@angular/router-deprecated', './components/app.component/app.component', './service/httpServices'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, core_1, http_1, router_deprecated_1, app_component_1, httpServices_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (httpServices_1_1) {
                httpServices_1 = httpServices_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
                router_deprecated_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                core_1.provide(router_deprecated_1.ROUTER_PROVIDERS, { useValue: '/' }),
                httpServices_1.HttpServices
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map