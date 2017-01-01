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
var VoterComponent = (function () {
    function VoterComponent() {
        this.voteCounter = 0;
        this.myVote = 0;
        this.vote = new core_1.EventEmitter();
    }
    VoterComponent.prototype.ngOnInit = function () { };
    VoterComponent.prototype.onClickUp = function () {
        if (this.myVote == 1) {
            return;
        }
        this.myVote += 1;
        this.voteCounter += 1;
        this.vote.emit({ myVote: this.myVote, voteCounter: this.voteCounter });
        console.log(this.myVote);
    };
    VoterComponent.prototype.onClickDown = function () {
        if (this.myVote == -1) {
            return;
        }
        this.myVote -= 1;
        this.voteCounter -= 1;
        this.vote.emit({ myVote: this.myVote, voteCounter: this.voteCounter });
        console.log(this.myVote);
    };
    return VoterComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], VoterComponent.prototype, "voteCounter", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], VoterComponent.prototype, "myVote", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], VoterComponent.prototype, "vote", void 0);
VoterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'voter',
        template: "\n    <i class=\"fa fa-chevron-up\" [class.highlighted]=\"myVote==1\" aria-hidden=\"true\" (click)=\"onClickUp()\"></i>\n    <span>{{voteCounter}}</span>\n    <i class=\"fa fa-chevron-down\" [class.highlighted]=\"myVote==-1\" aria-hidden=\"true\" (click)=\"onClickDown()\"></i>\n    ",
        styles: ["\n        .fa-chevron-up, .fa-chevron-down{\n            color: #ccc;\n            width:20px;\n            float: left;\n            clear: both;\n            cursor: pointer;\n        }\n        .highlighted{\n            color: orange;\n            cursor: auto;\n        }\n        span{\n            display:block;\n            width:20px;\n            font-weight: 1.1em;\n            float: left;\n            clear: both;\n            text-align: center;                     \n        }\n    "]
    }),
    __metadata("design:paramtypes", [])
], VoterComponent);
exports.VoterComponent = VoterComponent;
//# sourceMappingURL=voter.component.js.map