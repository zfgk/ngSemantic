[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/hyperium/hyper/master/LICENSE)

# Angular5 & Semantic UI
<p align="center">
  <img src="http://i.imgur.com/SCTxyan.jpg" alt="Angular"/><br/>
  <a href="http://www.angular.io" target="_blank">Angular5</a> - <a href="http://semantic-ui.com" target="_blank">Semantic UI</a>
</p>

## <Forked from https://github.com/vladotesanovic/ngSemantic.git, make it supporting Angular 5>

## Live demo (original demo based on Angular 2)
<a href="https://ng-semantic.herokuapp.com" target="_blank">ng-semantic.herokuapp.com</a>

<ul>
   <li>Angular 2 </li>
   <li>Semantic UI version demo based on: 2.3</li2>
</ul>

## Installation
```bash
npm install ng5-semantic --save
```

## Angular CLI configuration ( Webpack )

Install `jQuery` with NPM
```bash
npm install jquery --save
```

Download <a href="https://github.com/Semantic-Org/Semantic-UI-CSS/archive/master.zip" target="_blank">Official Semantic UI bundle ( .zip ) from Semantic-Org</a>

Add `semantic.min.css`, `semantic.min.js`, `jquery` to the `angular-cli.json` as follows:
```javascript

...

"apps": [{
  ... 
  "styles": [
      "styles.css",
      "../path/to/semantic.min.css" // 
  ],
  "scripts": [
      "../node_modules/jquery/dist/jquery.min.js",
      "../path/to/semantic.min.js"
  ],
  ...
}]


```

## Use

Then you can use in a component as follows:

```javascript
// Module
import { NgModule } from "@angular/core";
import { NgSemanticModule } from "ng5-semantic";

@NgModule({
    bootstrap:    [ AppComponent ],
    declarations: [ AppComponent ],
    imports:      [ BrowserModule, NgSemanticModule ]
})
export class AppModule {}

// Component
import {Component} from '@angular/core';

@Component({
selector: 'demo-cmp',
template: `
 <sm-segment class="raised">
    Hello
 </sm-segment>
 `
})
export class DemoComponent {}
```
## Custom configuration

Semantic UI ( minified versions of css and js ) must be loaded in index.html

```html
<link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css">

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.js"></script>
```

### Development
```bash
git clone https://github.com/zfgk/ngSemanticUI.git
cd ngSemanticUI

# install dependencies
npm install

# compile demo project
npm start
```

### Components

  - sm-accordion
  - sm-button
  - sm-loader
  - sm-header
  - sm-message
  - sm-popup
  - sm-segment
  - sm-modal
  - sm-sidebar
  - sm-dimmer
  - sm-flag
  - sm-input
  - sm-checkbox
  - sm-rating
  - sm-dropdown
  - sm-select
  - sm-search
  - sm-textarea
  - sm-progress
  - sm-card
  - sm-shape
  - sm-tabs & sm-tab
  - sm-list
  - sm-item
  - smDirTooltip
  - smDeviceVisibility
  - smDirVisibility

## Licence

MIT License
