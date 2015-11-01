# Ember CLI Tooltipster

An Ember CLI add-on that wraps [Tooltipster](http://iamceege.github.io/tooltipster/) into an ember component.
The component supports most of [Tooltipster](http://iamceege.github.io/tooltipster/) features.

[Demo](http://altrim.github.io/ember-cli-tooltipster/)

## Installation

```sh
ember install ember-cli-tooltipster
```

## Basic Usage

```handlebars
  {{#tool-tipster title="This is my tooltip message!"}} 
    This div has a tooltip when you hover over it! 
  {{/tool-tipster}}
```

### With options

```handlebars
  {{#tool-tipster title="This is my tooltip message!" triggerEvent="click" position="right"}} 
    This div has a tooltip on the right when you click it! 
  {{/tool-tipster}}
```

### Extending the component

You can also easily extend the component to modify it to your needs (e.g a button component)

Just import `TooltipsterComponent` into your component and extend it

```javascript
//components/my-button.js
import TooltipsterComponent from 'ember-cli-tooltipster/components/tool-tipster';

export default TooltipsterComponent.extend({
  tagName: 'button',

  classNames: ['my-awesome-button'],

  // define properties
  content: 'My awesome tooltip button',

  position: 'right',

  timer: 2000 // set the timer to automatically close after 2 seconds
});
```
Then in your template.

```handlebars
{{#my-button}} Tooltip Button {{/my-button}}
```
That's it, now your button will display a nice tooltip on the right that will automatically close after 2 seconds.

## Options

When using the component, the following options are available: 

#### animation
Type: `String`

Default: `fade`

Determines how the tooltip will animate in and out.

Available Options: `[fade, grow, swing, slide, fall]`

### arrow
Type: `Boolean`

Default: `true`

Adds the "speech bubble arrow" to the tooltip.

### arrowColor
Type:`hex code / rgb`

Default: `will inherit the tooltip's background color`

Select a specific color for the "speech bubble arrow".

### autoClose
Type: `Boolean`

Default: `true`

If autoClose is set to false, the tooltip will never close unless you call the 'hide' method yourself.

### content
Type: `String, jQuery object`

Default: `null`

If set, this will override the content of the tooltip. 

### contentAsHTML
Type: `Boolean`

Default: `false`

If the content of the tooltip is provided as a string, it is displayed as plain text by default. If this content should actually be interpreted as HTML, set this option to true. 

### debug
Type: `Boolean`

Default: `true`

Tooltipster logs notices into the console when you're doing something you ideally shouldn't be doing. Set to false to disable logging.

### delay
Type: `Number`

Default: `300`

Delay how long it takes (in milliseconds) for the tooltip to start animating in.

### interactive
Type: `Boolean`

Default: `false`

Enable access of intractive content on hover.

### minWidth
Type: `Number`

Default: `0` (auto width)

Set a minimum width for the tooltip.

### maxWidth
Type: `Number`

Default `null` (no max width)

Set a maximum width for the tooltip.


### offsetX
Type: `Number`

Default: 0

Offsets the tooltip (in pixels) farther left/right from the origin.

### offsetY
Type: `Number`

Default: 0

Offsets the tooltip (in pixels) farther up/down from the origin.

#### position
Type: `String`

Default: `top`

Set the position of the tooltip.

Available options: `[right, left, top, top-right, top-left, bottom, bottom-right, bottom-left]`

### positionTracker
Type: `Boolean`

Default: `false`

Will reposition the tooltip if the origin moves. As this option may have an impact on performance, we suggest you enable it only if you need to. 

### timer
Type: `Number`

Default: `0` (disabled)

How long the tooltip should be allowed to live before closing.

#### theme
Type: `String` (CSS class)

Default: `tooltipster-default`

Set the theme used for your tooltip. 

### triggerEvent
Type: `String`

Default: `hover`

Set how tooltips should be activated and closed.

Available options: `[hover, click]`

### updateAnimation
Type: `Boolean`

Default: `true`

If a tooltip is open while its content is updated, play a subtle animation when the content changes.

### icon
Type: `String, jQuery object`

Default: `(?)`

If using the iconDesktop or iconTouch options, this sets the content for your icon.

### iconCloning
Type: `Boolean`
Default: `true`

If you provide a jQuery object to the 'icon' option, this sets if it is a clone of this object that should actually be used.

### iconDesktop
Type: `Boolean`
Default: `false`

Generate an icon next to your content that is responsible for activating the tooltip on non-touch devices.

### iconTouch
Type: `Boolean`
Default: `false`

Generate an icon next to your content that is responsible for activating the tooltip on touch devices (tablets, phones, etc).

### iconTheme
Type: `CSS class`
Default: `tooltipster-icon`

If using the iconDesktop or iconTouch options, this sets the class on the icon (used to style the icon).

## Advanced Options

To be able to use the advanced options you need to [extend the component](#extending-the-component) and implement the functions. For more information check the examples on [Tooltipster Docs](http://iamceege.github.io/tooltipster/#options)

### functionInit
Type: `Function`

Default: `function(origin, content) {}`

Create a custom function to be fired only once at instantiation. If the function returns a value, this value will become the content of the tooltip

### functionBefore
Type: `Function`

Default: `function(origin, continueTooltip) { continueTooltip(); }`

Create a custom function to be fired before the tooltip opens. This function may prevent or hold off the opening. 

### functionReady
Type: `Function`

Default: `function(origin, tooltip) {}`

Create a custom function to be fired when the tooltip and its contents have been added to the DOM.

### functionAfter
Type: `Function`

Default: `function(origin) {}`

Create a custom function to be fired once the tooltip has been closed and removed from the DOM.

### positionTrackerCallback
Type: `Function`

Default: `A function that will close the tooltip if the trigger is 'hover' and autoClose is false.`

Called after the tooltip has been repositioned by the position tracker (if enabled). 
