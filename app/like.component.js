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
var LikeComponent = (function () {
    function LikeComponent() {
        this.numberLikes = 0;
        this.isLiked = false;
    }
    LikeComponent.prototype.ngOnInit = function () { };
    LikeComponent.prototype.onClick = function () {
        this.isLiked = !this.isLiked;
        this.numberLikes += (this.isLiked) ? 1 : -1;
    };
    return LikeComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LikeComponent.prototype, "numberLikes", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LikeComponent.prototype, "isLiked", void 0);
LikeComponent = __decorate([
    core_1.Component({
        selector: 'like',
        template: "\n        <i class=\"fa fa-heart\" \n        aria-hidden=\"true\"\n        [class.like]=\"isLiked\"\n        \n        (click)=\"onClick()\"\n        ></i><span>{{numberLikes}}</span>    \n    ",
        styles: ["\n        .fa-heart{\n            color: #ccc;\n            cursor:pointer;\n        }\n        .like{\n            color:deeppink;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [])
], LikeComponent);
exports.LikeComponent = LikeComponent;
//# sourceMappingURL=like.component.js.map