import {
  Component, Input, ChangeDetectionStrategy, SimpleChanges, ViewContainerRef, OnInit,
  AfterViewInit
} from '@angular/core';

/**
 * Implementation of Card collection
 *
 * @link http://semantic-ui.com/views/card.html
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sm-card',
  template: `<div class="ui {{class}}">
    <div class="image" *ngIf="image">
        <img src="{{image}}">
    </div>
    <div class="content">
        <ng-content select="card-title"></ng-content>
        <div class="meta">
            <ng-content select="card-subtitle"></ng-content>
        </div>
        <div class="description">
            <ng-content select="card-content"></ng-content>
        </div>
    </div>
    <div class="extra content">
        <ng-content select="card-extra"></ng-content>
    </div>
    <ng-content></ng-content>
</div>`
})
export class SemanticCardComponent {
  @Input() class: string;
  @Input() image: string;
}

/**
 * Implementation of Cards collection
 *
 * @link http://semantic-ui.com/views/card.html
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sm-cards',
  template: `<div class="ui {{class}} cards"><ng-content></ng-content></div>`
})
export class SemanticCardsComponent {
  @Input() class: string;

  ngAfterViewInit(){
    $('.special.cards .image').dimmer({
      on: 'hover'
    });
  }
}


/**
 * Implementation of Card collection
 *
 * @link http://semantic-ui.com/views/card.html
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sm-card-dimmer',
  template: `<div class="ui {{class}}">
    <div class="blurring dimmable image">
        <div class="ui dimmer {{dimmerClass}}">
        <div class="content">
        <ng-content select="dimmer-content"></ng-content>
</div>
</div>
        <img src="{{image}}" class="" >
    </div>
    <div class="content">
        <ng-content select="card-title"></ng-content>
        <div class="meta">
            <ng-content select="card-subtitle"></ng-content>
        </div>
    </div>
    <div class="extra content">
        <ng-content select="card-extra"></ng-content>
    </div>
    <ng-content></ng-content>
</div>`
})
export class SemanticCardDimmerComponent {
  @Input() class: string;
  @Input() image: string;
  @Input() dimmerClass: string;



}

/**
 * Implementation of Card collection
 *
 * @link http://semantic-ui.com/views/card.html
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sm-card-double-image',
  template: `<div class="ui {{class}}">
    <div [class]="(imageClass?imageClass: 'ui slide masked reveal image')"
     *ngIf="image && hoverImage">
        <img src="{{image}}" class="visible content">
        <img src="{{hoverImage}}" class="hidden content">
    </div>
    <div class="content">
        <ng-content select="card-title"></ng-content>
        <div class="meta">
            <ng-content select="card-subtitle"></ng-content>
        </div>
        <div class="description">
            <ng-content select="card-content"></ng-content>
        </div>
    </div>
    <div class="extra content">
        <ng-content select="card-extra"></ng-content>
    </div>
    <ng-content></ng-content>
</div>`
})
export class SemanticCardDoubleImageComponent {
  @Input() class: string;
  @Input() image: string;
  @Input() hoverImage: string;
}

/**
 * Implementation of Card collection
 *
 * @link http://semantic-ui.com/views/card.html
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sm-card-ext',
  template: `<div [class]="'ui ' + (class ? class : 'card')">
    <div [class]="(imageClass?imageClass: '')+' image'" *ngIf="image && !hoverImage">
        <img [src]="image" >
    </div>

    <div [class]="(imageClass?imageClass: 'ui slide masked reveal')+' image'"
     *ngIf="hoverImage">
        <img [src]="image" class="visible content">
        <img [src]="hoverImage" class="hidden content">
    </div>
    <div class="content">
        <ng-content select="card-title"></ng-content>
        <div class="meta" >
          <ng-content select="card-subtitle"></ng-content>
        </div>
        <div class="description" >
          <ng-content select="card-content"></ng-content>
        </div>
    </div>
    <div class="extra content" *ngIf="extra">
      <ng-content select="card-extra"></ng-content>
    </div>
    <ng-content></ng-content>
</div>`
})
export class SemanticCardExtComponent {
  @Input() class: string;
  @Input() image: string;
  @Input() hoverImage: string;
  @Input() imageClass: string;
  @Input() extra: string;


}
