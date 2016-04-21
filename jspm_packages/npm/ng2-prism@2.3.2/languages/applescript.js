/* */ 
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('prismjs/components/prism-applescript');
var core_1 = require('angular2/core');
var Applescript = (function () {
    function Applescript(el) {
        this.el = el;
    }
    Applescript.prototype.ngOnInit = function () {
        this.codeblock = this.el.internalElement.componentView.context;
        this.codeblock.language = 'applescript';
    };
    Applescript = __decorate([
        core_1.Directive({
            selector: 'codeblock[applescript]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Applescript);
    return Applescript;
}());
exports.Applescript = Applescript;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGVzY3JpcHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHBsZXNjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsUUFBTyxzQ0FBc0MsQ0FBQyxDQUFBO0FBQzlDLHFCQUFvQyxlQUFlLENBQUMsQ0FBQTtBQU1wRDtJQUlFLHFCQUFvQixFQUFhO1FBQWIsT0FBRSxHQUFGLEVBQUUsQ0FBVztJQUFLLENBQUM7SUFFdkMsOEJBQVEsR0FBUjtRQUVFLElBQUksQ0FBQyxTQUFTLEdBQVMsSUFBSSxDQUFDLEVBQUcsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUN0RSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUM7SUFDMUMsQ0FBQztJQWJIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx3QkFBd0I7U0FDbkMsQ0FBQzs7bUJBQUE7SUFhRixrQkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBWlksbUJBQVcsY0FZdkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWFwcGxlc2NyaXB0JztcbmltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdjb2RlYmxvY2tbYXBwbGVzY3JpcHRdJ1xufSlcbmV4cG9ydCBjbGFzcyBBcHBsZXNjcmlwdCB7XG5cbiAgY29kZWJsb2NrOmFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOkVsZW1lbnRSZWYpIHsgIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBnZXQgdGhlIGhvc3RcbiAgICB0aGlzLmNvZGVibG9jayA9ICg8YW55PnRoaXMuZWwpLmludGVybmFsRWxlbWVudC5jb21wb25lbnRWaWV3LmNvbnRleHQ7XG4gICAgdGhpcy5jb2RlYmxvY2subGFuZ3VhZ2UgPSAnYXBwbGVzY3JpcHQnO1xuICB9XG5cbn1cbiJdfQ==