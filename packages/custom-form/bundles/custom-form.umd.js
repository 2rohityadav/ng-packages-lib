(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('custom-form', ['exports', '@angular/core'], factory) :
    (factory((global['custom-form'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomFormService = /** @class */ (function () {
        function CustomFormService() {
        }
        CustomFormService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        CustomFormService.ctorParameters = function () { return []; };
        /** @nocollapse */ CustomFormService.ngInjectableDef = i0.defineInjectable({ factory: function CustomFormService_Factory() { return new CustomFormService(); }, token: CustomFormService, providedIn: "root" });
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
            { type: i0.Component, args: [{
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
            { type: i0.NgModule, args: [{
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

    exports.CustomFormService = CustomFormService;
    exports.CustomFormComponent = CustomFormComponent;
    exports.CustomFormModule = CustomFormModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=custom-form.umd.js.map