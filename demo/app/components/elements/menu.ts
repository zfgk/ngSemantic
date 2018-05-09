import { Component } from '@angular/core';

@Component({
    selector: 'sm-menu-card',
    template: `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Menu</h1>
        <p>Semantic UI Menu component <i class="icon external"></i>
        <a href="http://semantic-ui.com/collections/menu.html" target="_blank">Semantic UI Menu</a></p>
    </div>
</div>
<div class="main ui container">
    <h4 class="ui header">Demo inverted ( with sidebar )</h4>
    <sm-menu title="Angular2" class="inverted teal" logo="/demo/assets/images/semantic.png">
        <a sm-item href="#/elements/menu" *ngFor="let item of items" [icon]="item?.icon">{{item?.title}}</a>

        <sm-menu class="menu right secondary icon">
            <a sm-item href="#/elements/menu"
            image="http://semantic-ui.com/images/avatar/small/stevie.jpg">Elliot Fu</a>

            <a sm-item icon="sidebar big" (click)="menuSidebar.show({transition: 'overlay'})"></a>
            <sm-sidebar class="right vertical inverted sidebar labeled menu teal huge" #menuSidebar>
                <a class="item">
                    <i class="home icon"></i>
                    Home
                </a>
                <a class="item">
                    <i class="block layout icon"></i>
                    Topics
                </a>
                <a class="item">
                    <i class="smile icon"></i>
                    Friends
                </a>
            </sm-sidebar>
        </sm-menu>
    </sm-menu>

    <h4 class="ui header">Code</h4>
    <sm-codeblock smPrismjs="html">
&lt;sm-menu title="Angular2" class="inverted teal" logo="/assets/images/semantic.png">
    &lt;a sm-item *ngFor="let item of items" [icon]="item.icon">{{'{'}}{{'{'}}item?.title{{'}'}}{{'}'}}&lt;/a>

    &lt;sm-menu class="menu right secondary">
        &lt;a sm-item href="#/elements/menu"
            image="http://semantic-ui.com/images/avatar/small/stevie.jpg">Elliot Fu&lt;/a>
        &lt;a sm-item icon="sidebar big">&lt;/a>
    &lt;/sm-menu>
&lt;/sm-menu>
</sm-codeblock>

    <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
    <h4 class="ui header">Demo three item</h4>
    <sm-menu title="" class="three item">
        <a sm-item *ngFor="let item of ['Editorials', 'Reviews', 'Upcoming Events']">{{item}}</a>
    </sm-menu>

    <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
    <h4 class="ui header">Demo pointing</h4>
    <sm-menu class="three item pointing">
        <a sm-item *ngFor="let item of ['Editorials', 'Reviews', 'Upcoming Events']; let i = index"
        [ngClass]="{'active': i == 1}" >{{item}}</a>
    </sm-menu>

    <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
    <h4 class="ui header">Labeled fluid icon menu</h4>
    <sm-menu title="Labeled Icon" class="fluid four item labeled icon inverted blue">
        <a sm-item *ngFor="let item of labeledIcons" [icon]="item?.icon">{{item?.title}}</a>
    </sm-menu>

    <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
    <h4 class="ui header">Demo vertical</h4>
    <sm-menu title="Vertical" class="vertical">
        <a sm-item *ngFor="let item of items" [icon]="item?.icon">{{item?.title}}</a>
    </sm-menu>

    <h4 class="ui header">Code</h4>
<sm-codeblock smPrismjs="html">
&lt;sm-menu title="Vertical" class="ui menu vertical">
    &lt;a sm-item *ngFor="let item of items" [icon]="item.icon">{{'{'}}{{'{'}}item?.title{{'}'}}{{'}'}}&lt;/a>
&lt;/sm-menu>
</sm-codeblock>
    <div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
    <h4 class="ui header">Demo secondary</h4>
    <sm-menu title="Secondary" class="secondary">
        <a sm-item *ngFor="let item of items" [icon]="item.icon">{{item?.title}}</a>
    </sm-menu>

    <h4 class="ui header">Code</h4>
<sm-codeblock smPrismjs="html">
&lt;sm-menu title="Secondary" class="secondary">
    &lt;a sm-item *ngFor="let item of items" [icon]="item.icon">{{'{'}}{{'{'}}item?.title{{'}'}}{{'}'}}&lt;/a>
&lt;/sm-menu>
</sm-codeblock>

<div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
<h4 class="ui header">Options</h4>
<table class="ui celled striped table">
  <tbody>
    <tr><td colspan="2">Options</td>
    </tr>
    <tr>
      <td>
        <i class="arrow circle down icon"></i> [logo]
      </td>
      <td>URL pointing to logo image.</td>
    </tr>
    <tr>
      <td>
        <i class="arrow circle down icon"></i> [class]
      </td>
      <td>List of CSS classes associated with menu element.</td>
    </tr>

    <tr>
      <td>
        <i class="arrow circle down icon"></i> [logoClass]
      </td>
      <td>List of CSS classes that will be applied on logo.</td>
    </tr>
    <tr>
      <td>
        <i class="arrow circle down icon"></i> [title]
      </td>
      <td>Menu title ( will appear if logo is not present ).</td>
    </tr>
  </tbody>
</table>
</div>
`
})

export class MenuComponent {
    items: Array<any> = [];
    labeledIcons: Array<any> = [];

    constructor() {
        this.items = [{
            'title': 'Home',
            'link': 'Home',
            'icon': 'home'
        }, {
                'title': 'About Us',
                'link': '#/'
            }, {
                'title': 'Contact',
                'link': '#/'
            }];

        this.labeledIcons = [{
            'title': 'Games',
            'link': 'Home',
            'icon': 'gamepad'
        }, {
                'title': 'Chanel',
                'link': 'Chanel',
                'icon': 'video camera'
            }, {
                'title': 'Videos',
                'link': 'Videos',
                'icon': 'video play'
            }];

    }
}
