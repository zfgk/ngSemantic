import { Component } from '@angular/core';
import { DataServices } from '../../services/data';

@Component({
    providers: [DataServices],
    selector : 'sm-page-segment',
    template : `
	<div class="ui masthead vertical segment">
    <div class="ui container">
	<h1>Segment</h1>
	<p>Semantic UI segment element <i class="icon external"></i>
	<a href="http://semantic-ui.com/elements/segment.html" target="_blank">Semantic UI Segment</a></p>
    </div>
</div>
<div class="main ui container">
    <h4 class="ui header">Demo</h4>
    <sm-segment class="raised">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
    Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</sm-segment>

    <h4 class="ui header">Code</h4>
    <sm-codeblock smPrismjs="html">
&lt;sm-segment class="raised">...&lt;/sm-segment>
</sm-codeblock>
      <h4 class="ui header">Demo stacked</h4>
    <sm-segment class="stacked">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
    Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</sm-segment>

    <h4 class="ui header">Demo circular</h4>
    <sm-segment class="circular">
	<h2 class="ui header">
	    Buy Now
	    <div class="sub header">$10.99</div>
	</h2>
    </sm-segment>

    <h4 class="ui header">Demo compact</h4>
    <sm-segment class="compact">
	<p>
	    Pellentesque habitant morbi tristique senectus et netus et malesuada.
	</p>
    </sm-segment>

    <h4 class="ui header">Demo aligned</h4>
    <sm-segment class="right aligned">
	<p>
	    Pellentesque habitant morbi tristique senectus et netus et malesuada.
	</p>
    </sm-segment>

    <h4 class="ui header">Demo colored</h4>
    <sm-segment class="red">
	<p>
	    Pellentesque habitant morbi tristique senectus et netus et malesuada.
	</p>
    </sm-segment>
    <sm-segment class="blue">
	<p>
	    Pellentesque habitant morbi tristique senectus et netus et malesuada.
	</p>
    </sm-segment>

    <h4 class="ui header">Demo inverted</h4>
    <sm-segment class="inverted green">
	<p>
	    Pellentesque habitant morbi tristique senectus et netus et malesuada.
	</p>
    </sm-segment>
</div>
`
})

export class SegmentComponent {}
