import { Component } from '@angular/core';

@Component({
    selector: 'sm-page-dimmer',
    template: `
	<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Dimmer</h1>
        <p>Semantic UI Dimmer module <i class="icon external"></i>
        <a href="http://semantic-ui.com/modules/dimmer.html" target="_blank">Semantic UI Dimmer</a></p>
    </div>
</div>
<div class="main ui container">
    <p>Note that selector attribute on sm-dimmer and value in smDirDimmer must be same.</p>
    <h4 class="ui header">Demo ( page dimmer )</h4>
    <sm-dimmer #dimmer>
        <div class="center">
            <h2 class="ui inverted icon header">
                <i class="mail icon"></i>
                Dimmer Message
                <div class="sub header">With {{ '{' }}opacity: .7, transition: 'slide up'{{ '}' }}</div>
            </h2>
        </div>
    </sm-dimmer>
    <sm-button (click)="dimmer.show({opacity: .7, transition: 'slide up'})" class="primary">Page dimmer</sm-button>

    <h4 class="ui header">Code</h4>
    <sm-codeblock smPrismjs="html">
&lt;sm-dimmer #dimmer>
    &lt;div class="center">
        &lt;h2 class="ui inverted icon header">
            &lt;i class="mail icon">&lt;/i>
            Dimmer Message
            &lt;div class="sub header">Dimmer sub-header&lt;/div>
        &lt;/h2>
    &lt;/div>
&lt;/sm-dimmer>
&lt;sm-button (click)="dimmer.show({{ '{' }}opacity: .7, transition: 'slide up'{{ '}' }})" class="primary">Page dimmer&lt;/sm-button>
</sm-codeblock>
</div>
`
})

export class DimmerComponent {}
