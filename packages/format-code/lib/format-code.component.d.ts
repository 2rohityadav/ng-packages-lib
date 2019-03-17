import { ElementRef, OnInit, Renderer2 } from '@angular/core';
export declare class FormatCodeComponent implements OnInit {
    private renderer;
    private el;
    color: string;
    bgColor: string;
    font: string;
    constructor(renderer: Renderer2, el: ElementRef);
    ngOnInit(): void;
}
