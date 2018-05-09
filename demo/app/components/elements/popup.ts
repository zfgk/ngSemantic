import { Component } from '@angular/core';

@Component({
    selector : 'sm-page-popup',
    template : `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Popup &amp; Tooltip</h1>
        <p>Semantic UI Popup component <i class="icon external"></i>
        <a href="http://semantic-ui.com/modules/popup.html" target="_blank">Semantic UI Popup</a></p>
    </div>
</div>
<div class="main ui container">
<h4 class="ui header">Demo tooltip ( pure CSS )</h4>
<button class="ui button" smDirTooltip="Pellentesque habitant morbi tristique." smDirPosition="right center">Hover me</button>

<h4 class="ui header">Code</h4>
<sm-codeblock smPrismjs="html">
&lt;button class="ui button" smDirTooltip="text..." smDirPosition="right center">Hover me&lt;/button>
</sm-codeblock>
<div class="ui horizontal section icon divider"><i class="icon setting"></i></div>

<h4 class="ui header">Hover</h4>
<button class="ui button blue" (mouseenter)="myPopup.show($event,
{position: 'right center', on: 'hover'})">Hover me</button>

<h4 class="ui header">Click</h4>
<button class="ui button green" (click)="myPopup.show($event,
{position: 'right center'})">Click me</button>

<sm-popup #myPopup>
<sm-card class="card">
    <card-title> Kristy </card-title>
    <card-subtitle> Joined in 2013 </card-subtitle>
    <card-content>
        Kristy is an art director living in New York.
    </card-content>
    <sm-button class="bottom attached fluid primary" (click)="myPopup.hide()" icon="close">Close popup</sm-button>
</sm-card>
</sm-popup>

<h4 class="ui header">Code</h4>
<sm-codeblock smPrismjs="html">
&lt;button class="ui button blue" (click)="myPopup.show($event,
{{ '{' }}position: 'right center', on: 'hover'{{ '}' }})">Hover me&lt;/button>

&lt;button class="ui button green" (click)="myPopup.show($event, {{ '{' }}position: 'right center'{{ '}' }})">Click me&lt;/button>

&lt;sm-popup #myPopup>
    &lt;sm-card class="card">
        &lt;card-title> Kristy &lt;/card-title>
        &lt;card-subtitle> Joined in 2013 &lt;/card-subtitle>
        &lt;card-content>
            Kristy is an art director living in New York.
        &lt;/card-content>
        &lt;sm-button class="bottom attached fluid primary" (click)="myPopup.hide()" icon="close">Close popup&lt;/sm-button>
    &lt;/sm-card>
&lt;/sm-popup>
</sm-codeblock>


<div class="ui horizontal section icon divider"><i class="icon setting"></i></div>
<h4 class="ui header">Options</h4>
<table class="ui celled striped table">
  <tbody>
    <tr><td colspan="2">Methods</td>
    </tr>
    <tr>
      <td>
        <i class="arrow circle down icon"></i> show($event, options)
      </td>
      <td>Semantic UI options object for Popup element: .
      <a href="http://semantic-ui.com/modules/popup.html#/settings"
       target="_blank"><i class="icon external"></i> </a></td>
    </tr>
    <tr>
      <td>
        <i class="arrow circle down icon"></i> hide()
      </td>
      <td>Hide popup</td>
    </tr>
  </tbody>
</table>
</div>
`
})

export class PopupComponent {}
