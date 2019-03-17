(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('format-code', ['exports', '@angular/core'], factory) :
    (factory((global['format-code'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormatCodeService = /** @class */ (function () {
        function FormatCodeService() {
        }
        FormatCodeService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        FormatCodeService.ctorParameters = function () { return []; };
        /** @nocollapse */ FormatCodeService.ngInjectableDef = i0.defineInjectable({ factory: function FormatCodeService_Factory() { return new FormatCodeService(); }, token: FormatCodeService, providedIn: "root" });
        return FormatCodeService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormatCodeComponent = /** @class */ (function () {
        function FormatCodeComponent(renderer, el) {
            this.renderer = renderer;
            this.el = el;
            this.color = 'rgb(42,100,250)';
            this.bgColor = 'rgba(0,0,30,0.9)';
            this.font = 'consolas, monospace';
        }
        /**
         * @return {?}
         */
        FormatCodeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'color', this.color);
                this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'backgroundColor', this.bgColor);
                this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'font-family', this.font);
            };
        FormatCodeComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'Format-Code',
                        template: "\n    <div>\n      <ng-content></ng-content>\n    </div>\n  ",
                        styles: ["\n      div {\n        padding: 20px;\n        margin: 10px auto;\n        box-shadow: 1px 3px 10px 1px rgba(0, 0, 0, 0.3);\n        border-radius: 7px;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        FormatCodeComponent.ctorParameters = function () {
            return [
                { type: i0.Renderer2 },
                { type: i0.ElementRef }
            ];
        };
        FormatCodeComponent.propDecorators = {
            color: [{ type: i0.Input }],
            bgColor: [{ type: i0.Input }],
            font: [{ type: i0.Input }]
        };
        return FormatCodeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormatCodeModule = /** @class */ (function () {
        function FormatCodeModule() {
        }
        FormatCodeModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [FormatCodeComponent],
                        imports: [],
                        exports: [FormatCodeComponent]
                    },] }
        ];
        return FormatCodeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.FormatCodeService = FormatCodeService;
    exports.FormatCodeComponent = FormatCodeComponent;
    exports.FormatCodeModule = FormatCodeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=format-code.umd.js.map