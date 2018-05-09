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
var SemanticModalComponent = (function () {
    function SemanticModalComponent() {
        this.onModalShow = new core_1.EventEmitter();
        this.onModalHide = new core_1.EventEmitter();
    }
    SemanticModalComponent.prototype.show = function (data) {
        jQuery(this.modal.nativeElement)
            .modal(data || {})
            .modal('toggle');
        this.onModalShow.next(true);
    };
    SemanticModalComponent.prototype.hide = function () {
        jQuery(this.modal.nativeElement)
            .modal('hide');
        this.onModalHide.emit(true);
    };
    SemanticModalComponent.prototype.ngOnDestroy = function () {
        var parent = this.modal.nativeElement.parentElement;
        parent.removeChild(this.modal.nativeElement);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SemanticModalComponent.prototype, "class", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SemanticModalComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SemanticModalComponent.prototype, "icon", void 0);
    __decorate([
        core_1.ViewChild('modal'),
        __metadata("design:type", core_1.ElementRef)
    ], SemanticModalComponent.prototype, "modal", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], SemanticModalComponent.prototype, "onModalShow", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], SemanticModalComponent.prototype, "onModalHide", void 0);
    SemanticModalComponent = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'sm-modal',
            template: "<div class=\"ui modal {{class}}\" #modal>\n    <i class=\"close icon\"></i>\n    <div [ngClass]=\"{'icon': icon}\" class=\"ui header\">\n        <i *ngIf=\"icon\" class=\"icon {{icon}}\"></i>\n        {{title}}\n    </div>\n    <div class=\"content\">\n        <ng-content select=\"modal-content\"></ng-content>\n    </div>\n    <div class=\"actions\">\n        <ng-content select=\"modal-actions\"></ng-content>\n    </div>\n</div>"
        })
    ], SemanticModalComponent);
    return SemanticModalComponent;
}());
exports.SemanticModalComponent = SemanticModalComponent;
var SMModalTagsDirective = (function () {
    function SMModalTagsDirective() {
    }
    SMModalTagsDirective = __decorate([
        core_1.Directive({ selector: 'modal-content, modal-actions' })
    ], SMModalTagsDirective);
    return SMModalTagsDirective;
}());
exports.SMModalTagsDirective = SMModalTagsDirective;
