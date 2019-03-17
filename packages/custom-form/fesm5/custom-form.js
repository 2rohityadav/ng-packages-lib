import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomFormService = /** @class */ (function () {
    function CustomFormService() {
    }
    CustomFormService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CustomFormService.ctorParameters = function () { return []; };
    /** @nocollapse */ CustomFormService.ngInjectableDef = defineInjectable({ factory: function CustomFormService_Factory() { return new CustomFormService(); }, token: CustomFormService, providedIn: "root" });
    return CustomFormService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomFormComponent = /** @class */ (function () {
    function CustomFormComponent() {
    }
    /**
     * @return {?}
     */
    CustomFormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    CustomFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'Custom-Form',
                    template: "\n    <p>\n      custom-form works \u2764\uFE0F!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    CustomFormComponent.ctorParameters = function () { return []; };
    return CustomFormComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomFormModule = /** @class */ (function () {
    function CustomFormModule() {
    }
    CustomFormModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [CustomFormComponent],
                    imports: [],
                    exports: [CustomFormComponent]
                },] }
    ];
    return CustomFormModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CustomFormService, CustomFormComponent, CustomFormModule };

//# sourceMappingURL=custom-form.js.map