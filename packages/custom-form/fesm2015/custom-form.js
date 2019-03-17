import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomFormService {
    constructor() { }
}
CustomFormService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CustomFormService.ctorParameters = () => [];
/** @nocollapse */ CustomFormService.ngInjectableDef = defineInjectable({ factory: function CustomFormService_Factory() { return new CustomFormService(); }, token: CustomFormService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomFormComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
CustomFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'Custom-Form',
                template: `
    <p>
      custom-form works ❤️!
    </p>
  `
            }] }
];
/** @nocollapse */
CustomFormComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomFormModule {
}
CustomFormModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CustomFormComponent],
                imports: [],
                exports: [CustomFormComponent]
            },] }
];

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