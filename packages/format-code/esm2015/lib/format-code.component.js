/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
export class FormatCodeComponent {
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
if (false) {
    /** @type {?} */
    FormatCodeComponent.prototype.color;
    /** @type {?} */
    FormatCodeComponent.prototype.bgColor;
    /** @type {?} */
    FormatCodeComponent.prototype.font;
    /**
     * @type {?}
     * @private
     */
    FormatCodeComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    FormatCodeComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LWNvZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm9ybWF0LWNvZGUvIiwic291cmNlcyI6WyJsaWIvZm9ybWF0LWNvZGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBbUJoRixNQUFNLE9BQU8sbUJBQW1COzs7OztJQUk5QixZQUFvQixRQUFtQixFQUFVLEVBQWM7UUFBM0MsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLE9BQUUsR0FBRixFQUFFLENBQVk7UUFIdEQsVUFBSyxHQUFXLGlCQUFpQixDQUFDO1FBQ2xDLFlBQU8sR0FBVyxrQkFBa0IsQ0FBQztRQUNyQyxTQUFJLEdBQVcscUJBQXFCLENBQUM7SUFDb0IsQ0FBQzs7OztJQUNuRSxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FDcEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQ3ZDLGlCQUFpQixFQUNqQixJQUFJLENBQUMsT0FBTyxDQUNiLENBQUM7UUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVGLENBQUM7OztZQS9CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7OztHQUlUO3lCQUVDOzs7Ozs7O0tBT0M7YUFFSjs7OztZQWxCOEMsU0FBUztZQUFwQyxVQUFVOzs7b0JBb0IzQixLQUFLO3NCQUNMLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUZOLG9DQUEyQzs7SUFDM0Msc0NBQThDOztJQUM5QyxtQ0FBOEM7Ozs7O0lBQ2xDLHVDQUEyQjs7Ozs7SUFBRSxpQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnRm9ybWF0LUNvZGUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXY+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIGRpdiB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgICAgICBib3gtc2hhZG93OiAxcHggM3B4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgfVxuICAgIGAsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1hdENvZGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nID0gJ3JnYig0MiwxMDAsMjUwKSc7XG4gIEBJbnB1dCgpIGJnQ29sb3I6IHN0cmluZyA9ICdyZ2JhKDAsMCwzMCwwLjkpJztcbiAgQElucHV0KCkgZm9udDogc3RyaW5nID0gJ2NvbnNvbGFzLCBtb25vc3BhY2UnO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLCAnY29sb3InLCB0aGlzLmNvbG9yKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLFxuICAgICAgJ2JhY2tncm91bmRDb2xvcicsXG4gICAgICB0aGlzLmJnQ29sb3IsXG4gICAgKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCwgJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250KTtcbiAgfVxufVxuIl19