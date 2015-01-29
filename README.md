# Ember CLI Tooltipster

An Ember CLI add-on that wraps [Tooltipster](http://iamceege.github.io/tooltipster/) into an ember component. 
The component supports only the basic options. Pull requests are welcome.

## Installation


```sh
# install via npm
$ npm install ember-cli-tooltipster --save-dev
# run blueprint to fetch dependencies
$ ember g ember-cli-tooltipster
```


## Basic Usage

```handlebars
  {{#tool-tipster title="This is my div's tooltip message!"}} 
    This div has a tooltip when you hover over it! 
  {{/tool-tipster}}
```

###with options

```handlebars
  {{#tool-tipster title="This is my div's tooltip message!" triggerEvent="click" position="right"}} 
    This div has a tooltip on the right when you click it! 
  {{/tool-tipster}}
```

### <a name="extend"></a> extending the component

You can also easily extend the component to modify it to your needs (e.g a button component)

Just import `TooltipsterComponent` into your component and extend it

```javascript
//components/my-button.js
import TooltipsterComponent from 'ember-cli-tooltipster/components/tool-tipster';

export default TooltipsterComponent.extend({
    tagName: 'button',
  
    classNames: ['my-button-class'],
    
    // define properties
    title: 'My tooltip',
    
    position: 'left',
    
    // example using one of the advanced options - check docs below
    functionInit: function(origin, content) {
      return "this value will become the content of the tooltip";
    }
});
```
Then in your template.


```handlebars
{{#my-button}} Tooltip Button {{/my-button}}
```
That's it now your button will have a nice tooltip on the left.

## Options

When using tooltipster, the following options are available: 

#### position
Type: `String`

Default: `top`

Set the position of the tooltip.

Available options: `[right, left, top, top-right, top-left, bottom, bottom-right, bottom-left]`

###offsetX
Type: `Number`

Default: 0

Offsets the tooltip (in pixels) farther left/right from the origin.

###offsetY
Type: `Number`

Default: 0

Offsets the tooltip (in pixels) farther up/down from the origin.

#### animation
Type: `String`

Default: `fade`

Determines how the tooltip will animate in and out.

Available Options: `[fade, grow, swing, slide, fall]`

### delay
Type: `Number`

Default: `300`

Delay how long it takes (in milliseconds) for the tooltip to start animating in.

#### theme
Type: `String` (CSS class)

Default: `tooltipster-default`

Set the theme used for your tooltip. 

###triggerEvent
Type: `String`

Default: `hover`

Set how tooltips should be activated and closed.

Available options: `[hover, click]`

###arrow
Type: `Boolean`

Default: `true`

Adds the "speech bubble arrow" to the tooltip.

###minWidth
Type: `Number`

Default: `0` (auto width)

Set a minimum width for the tooltip.

###maxWidth
Type: `Number`

Default `null` (no max width)

Set a maximum width for the tooltip.

###timer
Type: `Number`

Default: `0` (disabled)

How long the tooltip should be allowed to live before closing.

## Advanced Options

To be able to use the advanced options you need to [extend the component](#extend) and implement the functions. For more information check the examples on [Tooltipster Docs](http://iamceege.github.io/tooltipster/#options)

###functionInit
Type: `Function`

Default: `function(origin, content) {}`

Create a custom function to be fired only once at instantiation. If the function returns a value, this value will become the content of the tooltip

###functionBefore
Type: `Function`

Default: `function(origin, continueTooltip) { continueTooltip(); }`

Create a custom function to be fired before the tooltip opens. This function may prevent or hold off the opening. 

###functionReady
Type: `Function`

Default: `function(origin, tooltip) {}`

Create a custom function to be fired when the tooltip and its contents have been added to the DOM.

###functionAfter
Type: `Function`

Default: `function(origin) {}`

Create a custom function to be fired once the tooltip has been closed and removed from the DOM.

