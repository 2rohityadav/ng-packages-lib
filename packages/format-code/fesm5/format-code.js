import { Injectable, Component, ElementRef, Input, Renderer2, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormatCodeService = /** @class */ (function () {
    function FormatCodeService() {
    }
    FormatCodeService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FormatCodeService.ctorParameters = function () { return []; };
    /** @nocollapse */ FormatCodeService.ngInjectableDef = defineInjectable({ factory: function FormatCodeService_Factory() { return new FormatCodeService(); }, token: FormatCodeService, providedIn: "root" });
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
        { type: Component, args: [{
                    selector: 'Format-Code',
                    template: "\n    <div>\n      <ng-content></ng-content>\n    </div>\n  ",
                    styles: ["\n      div {\n        padding: 20px;\n        margin: 10px auto;\n        box-shadow: 1px 3px 10px 1px rgba(0, 0, 0, 0.3);\n        border-radius: 7px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    FormatCodeComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    FormatCodeComponent.propDecorators = {
        color: [{ type: Input }],
        bgColor: [{ type: Input }],
        font: [{ type: Input }]
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
        { type: NgModule, args: [{
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

export { FormatCodeService, FormatCodeComponent, FormatCodeModule };

//# sourceMappingURL=format-code.js.map