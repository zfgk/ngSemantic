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
    SemanticCardsComponent.prototype.ngAfterViewInit = function () {
        $('.special.cards .image').dimmer({
            on: 'hover'
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SemanticCardsComponent.prototype, "class", void 0);
    SemanticCardsComponent = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'sm-cards',
            template: "<div class=\"ui {{class}} cards\"><ng-content></ng-content></div>"
        })
    ], SemanticCardsComponent);
    return SemanticCardsComponent;
}());
exports.SemanticCardsComponent = SemanticCardsComponent;
var SemanticCardDimmerComponent = (function () {
    function SemanticCardDimmerComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SemanticCardDimmerComponent.prototype, "class", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SemanticCardDimmerComponent.prototype, "image", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SemanticCardDimmerComponent.prototype, "dimmerClass", void 0);
    SemanticCardDimmerComponent = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'sm-card-dimmer',
            template: "<div class=\"ui {{class}}\">\n    <div class=\"blurring dimmable image\">\n        <div class=\"ui dimmer {{dimmerClass}}\">\n        <div class=\"content\">\n        <ng-content select=\"dimmer-content\"></ng-content>\n</div>\n</div>\n        <img src=\"{{image}}\" class=\"\" >\n    </div>\n    <div class=\"content\">\n        <ng-content select=\"card-title\"></ng-content>\n        <div class=\"meta\">\n            <ng-content select=\"card-subtitle\"></ng-content>\n        </div>\n    </div>\n    <div class=\"extra content\">\n        <ng-content select=\"card-extra\"></ng-content>\n    </div>\n    <ng-content></ng-content>\n</div>"
        })
    ], SemanticCardDimmerComponent);
    return SemanticCardDimmerComponent;
}());
exports.SemanticCardDimmerComponent = SemanticCardDimmerComponent;
var SemanticCardDoubleImageComponent = (function () {
    function SemanticCardDoubleImageComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SemanticCardDoubleImageComponent.prototype, "class", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SemanticCardDoubleImageComponent.prototype, "image", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SemanticCardDoubleImageComponent.prototype, "hoverImage", void 0);
    SemanticCardDoubleImageComponent = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'sm-card-double-image',
            template: "<div class=\"ui {{class}}\">\n    <div [class]=\"(imageClass?imageClass: 'ui slide masked reveal image')\"\n     *ngIf=\"image && hoverImage\">\n        <img src=\"{{image}}\" class=\"visible content\">\n        <img src=\"{{hoverImage}}\" class=\"hidden content\">\n    </div>\n    <div class=\"content\">\n        <ng-content select=\"card-title\"></ng-content>\n        <div class=\"meta\">\n            <ng-content select=\"card-subtitle\"></ng-content>\n        </div>\n        <div class=\"description\">\n            <ng-content select=\"card-content\"></ng-content>\n        </div>\n    </div>\n    <div class=\"extra content\">\n        <ng-content select=\"card-extra\"></ng-content>\n    </div>\n    <ng-content></ng-content>\n</div>"
        })
    ], SemanticCardDoubleImageComponent);
    return SemanticCardDoubleImageComponent;
}());
exports.SemanticCardDoubleImageComponent = SemanticCardDoubleImageComponent;
var SemanticCardExtComponent = (function () {
    function SemanticCardExtComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SemanticCardExtComponent.prototype, "class", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SemanticCardExtComponent.prototype, "image", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SemanticCardExtComponent.prototype, "hoverImage", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SemanticCardExtComponent.prototype, "imageClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SemanticCardExtComponent.prototype, "extra", void 0);
    SemanticCardExtComponent = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'sm-card-ext',
            template: "<div [class]=\"'ui ' + (class ? class : 'card')\">\n    <div [class]=\"(imageClass?imageClass: '')+' image'\" *ngIf=\"image && !hoverImage\">\n        <img [src]=\"image\" >\n    </div>\n\n    <div [class]=\"(imageClass?imageClass: 'ui slide masked reveal')+' image'\"\n     *ngIf=\"hoverImage\">\n        <img [src]=\"image\" class=\"visible content\">\n        <img [src]=\"hoverImage\" class=\"hidden content\">\n    </div>\n    <div class=\"content\">\n        <ng-content select=\"card-title\"></ng-content>\n        <div class=\"meta\" >\n          <ng-content select=\"card-subtitle\"></ng-content>\n        </div>\n        <div class=\"description\" >\n          <ng-content select=\"card-content\"></ng-content>\n        </div>\n    </div>\n    <div class=\"extra content\" *ngIf=\"extra\">\n      <ng-content select=\"card-extra\"></ng-content>\n    </div>\n    <ng-content></ng-content>\n</div>"
        })
    ], SemanticCardExtComponent);
    return SemanticCardExtComponent;
}());
exports.SemanticCardExtComponent = SemanticCardExtComponent;
