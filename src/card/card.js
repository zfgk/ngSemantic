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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SemanticCardComponent = (function () {
    function SemanticCardComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SemanticCardComponent.prototype, "class", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SemanticCardComponent.prototype, "image", void 0);
    SemanticCardComponent = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'sm-card',
            template: "<div class=\"ui {{class}}\">\n    <div class=\"image\" *ngIf=\"image\">\n        <img src=\"{{image}}\">\n    </div>\n    <div class=\"content\">\n        <ng-content select=\"card-title\"></ng-content>\n        <div class=\"meta\">\n            <ng-content select=\"card-subtitle\"></ng-content>\n        </div>\n        <div class=\"description\">\n            <ng-content select=\"card-content\"></ng-content>\n        </div>\n    </div>\n    <div class=\"extra content\">\n        <ng-content select=\"card-extra\"></ng-content>\n    </div>\n    <ng-content></ng-content>\n</div>"
        })
    ], SemanticCardComponent);
    return SemanticCardComponent;
}());
exports.SemanticCardComponent = SemanticCardComponent;
var SemanticCardsComponent = (function () {
    function SemanticCardsComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SemanticCardsComponent.prototype, "class", void 0);
    SemanticCardsComponent = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'sm-cards',
            template: "<div class=\"ui cards {{class}}\"><ng-content></ng-content></div>"
        })
    ], SemanticCardsComponent);
    return SemanticCardsComponent;
}());
exports.SemanticCardsComponent = SemanticCardsComponent;
var SemanticCard5Component = (function () {
    function SemanticCard5Component() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SemanticCard5Component.prototype, "class", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SemanticCard5Component.prototype, "image", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SemanticCard5Component.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SemanticCard5Component.prototype, "subtitle", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SemanticCard5Component.prototype, "content", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SemanticCard5Component.prototype, "extra", void 0);
    SemanticCard5Component = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'sm-card5',
            template: "<div class=\"ui {{class}}\">\n    <div class=\"image\" *ngIf=\"image\">\n        <img [src]=\"image\">\n    </div>\n    <div class=\"content\">\n        <div *ngIf=\"title\" [innerHtml]=\"title\"></div>\n        <div class=\"meta\" *ngIf=\"subtitle\" [innerHtml]=\"subtitle\">\n        </div>\n        <div class=\"description\" *ngIf=\"content\" [innerHtml]=\"content\">\n        </div>\n    </div>\n    <div class=\"extra content\" *ngIf=\"extra\" [innerHtml]=\"extra\">\n    </div>\n</div>"
        })
    ], SemanticCard5Component);
    return SemanticCard5Component;
}());
exports.SemanticCard5Component = SemanticCard5Component;
