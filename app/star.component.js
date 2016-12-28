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
var FavoriteComponent = (function () {
    function FavoriteComponent() {
        this.isFavorite = false;
    }
    FavoriteComponent.prototype.ngOnInit = function () { };
    FavoriteComponent.prototype.changeHighlight = function () {
        console.log('click');
        this.isFavorite = !this.isFavorite;
    };
    return FavoriteComponent;
}());
FavoriteComponent = __decorate([
    core_1.Component({
        selector: 'favorite',
        template: "\n    <i class=\"fa\" \n        [class.fa-star]=\"isFavorite\" \n        [class.fa-star-o]=\"!isFavorite\" \n        aria-hidden=\"true\" \n        (click)=\"changeHighlight()\">\n    </i>\n    "
    }),
    __metadata("design:paramtypes", [])
], FavoriteComponent);
exports.FavoriteComponent = FavoriteComponent;
//# sourceMappingURL=star.component.js.map