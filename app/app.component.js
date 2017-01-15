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
var AppComponent = (function () {
    function AppComponent() {
        this.title = "test";
        this.votes = {
            counter: 10,
            cachedVote: 1
        };
        this.likes = {
            numLikes: 10,
            isLiked: false
        };
        this.post = {
            title: "title",
            isFavorite: true
        };
        this.pipepost = {
            title: 'Esto es el titulo para custom pipe',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum cupiditate vitae officiis quam esse quis quasi! Placeat, at corrupti. Voluptates dolorem, quia suscipit enim beatae laboriosam consequuntur amet maxime perspiciatis.'
        };
    }
    AppComponent.prototype.onChangeFavorite = function ($event) {
        console.log($event);
    };
    AppComponent.prototype.onChangeVote = function ($event) {
        console.log($event);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>Gabi App</h1>\n  <input type=\"text\" \n    [value]=\"title\" \n    (input)=\"title = $event.target.value\">\n\n  <input type=\"text\"  \n    [(ngModel)]=\"title\">\n\n  <input type=\"button\" \n    (click)=\"title = ''\" \n    value=\"Clear\">  \n\n  Preview: {{title}}\n  <courses></courses>\n  <authors></authors>\n\n  \n  <h2>Pr\u00E1ctica star </h2>\n  <favorite \n    [isFavorite]=\"post.isFavorite\"\n    (change)=\"onChangeFavorite($event)\"  \n  ></favorite> \n  \n\n    <h2>Pr\u00E1ctica likes </h2>\n    <like \n      [isLiked]=\"likes.isLiked\"\n      [numberLikes]=\"likes.numLikes\"\n       \n    ></like> \n     <h2>Pr\u00E1ctica likes </h2>\n    <voter \n      [voteCounter] = \"votes.counter\"\n      [myVote] =\"votes.cachedVote\"\n      (vote)=\"onChangeVote($event)\"\n       \n    ></voter>   \n    <br>\n    <br>\n    <h2>Pr\u00E1ctica Tweet</h2>\n    <tweet></tweet>\n\n    <h2>Pr\u00E1ctica Custom Pipe</h2>\n    <div>\n    {{pipepost.title}}\n    <br>\n    {{pipepost.body |summary:[10]}}\n    \n    </div>\n\n    <h2>Zippy Component</h2>\n     <zippy [title]=\"'Esto es el titulo 1'\" >Contenido opcion 1</zippy>\n      <zippy [title]=\"'Esto es el titulo 2'\" >Contenido opcion 2</zippy>\n\n  ",
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map