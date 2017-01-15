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
var core_1 = require("@angular/core");
var ZippyComponent = (function () {
    function ZippyComponent() {
        this.title = "";
        this.isOpen = false;
    }
    ZippyComponent.prototype.ngOnInit = function () { };
    ZippyComponent.prototype.onClick = function () {
        this.isOpen = !this.isOpen;
    };
    return ZippyComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ZippyComponent.prototype, "title", void 0);
ZippyComponent = __decorate([
    core_1.Component({
        selector: 'zippy',
        template: "\n    <div class=\"list-group\">\n    <li class=\"list-group-item header\" (click)=\"onClick()\">\n    {{title}}\n    <span class=\"fa  float-xs-right\"\n        [ngClass]=\"{\n            'fa-chevron-up': isOpen,\n            'fa-chevron-down': !isOpen\n        }\"\n\n    ></span>\n    </li>\n    <li class=\"list-group-item\" [hidden]=\"!isOpen\"    >    \n    <ng-content></ng-content>\n    </li>\n  \n\n</div>",
        styles: ["\n    div{\n        margin-left:10px;\n        width:50%;\n    }\n    .header{\n        cursor:pointer;\n    }\n"]
    }),
    __metadata("design:paramtypes", [])
], ZippyComponent);
exports.ZippyComponent = ZippyComponent;
//# sourceMappingURL=zippy.component.js.map