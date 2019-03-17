import { Injectable, Component, ElementRef, Input, Renderer2, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormatCodeService {
    constructor() { }
}
FormatCodeService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FormatCodeService.ctorParameters = () => [];
/** @nocollapse */ FormatCodeService.ngInjectableDef = defineInjectable({ factory: function FormatCodeService_Factory() { return new FormatCodeService(); }, token: FormatCodeService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormatCodeComponent {
    /**
     * @param {?} renderer
     * @param {?} el
     */
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.color = 'rgb(42,100,250)';
        this.bgColor = 'rgba(0,0,30,0.9)';
        this.font = 'consolas, monospace';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'color', this.color);
        this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'backgroundColor', this.bgColor);
        this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'font-family', this.font);
    }
}
FormatCodeComponent.decorators = [
    { type: Component, args: [{
                selector: 'Format-Code',
                template: `
    <div>
      <ng-content></ng-content>
    </div>
  `,
                styles: [`
      div {
        padding: 20px;
        margin: 10px auto;
        box-shadow: 1px 3px 10px 1px rgba(0, 0, 0, 0.3);
        border-radius: 7px;
      }
    `]
            }] }
];
/** @nocollapse */
FormatCodeComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
FormatCodeComponent.propDecorators = {
    color: [{ type: Input }],
    bgColor: [{ type: Input }],
    font: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormatCodeModule {
}
FormatCodeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FormatCodeComponent],
                imports: [],
                exports: [FormatCodeComponent]
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

export { FormatCodeService, FormatCodeComponent, FormatCodeModule };

//# sourceMappingURL=format-code.js.map