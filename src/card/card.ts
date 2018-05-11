import {Component, Input, ChangeDetectionStrategy} from '@angular/core';

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
  template: `<div class="ui cards {{class}}"><ng-content></ng-content></div>`
})
export class SemanticCardsComponent {
  @Input() class: string;
}


/**
 * Implementation of Card collection
 *
 * @link http://semantic-ui.com/views/card.html
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sm-card5',
  template: `<div class="ui {{class}}">
    <div class="image" *ngIf="image">
        <img [src]="image">
    </div>
    <div class="content">
        <div *ngIf="title" [innerHtml]="title"></div>
        <div class="meta" *ngIf="subtitle" [innerHtml]="subtitle">
        </div>
        <div class="description" *ngIf="content" [innerHtml]="content">
        </div>
    </div>
    <div class="extra content" *ngIf="extra" [innerHtml]="extra">
    </div>
</div>`
})
export class SemanticCard5Component {
  @Input() class: string;
  @Input() image: string;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() content: string;
  @Input() extra: string;
}
