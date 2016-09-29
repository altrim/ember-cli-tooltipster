# Ember CLI Tooltipster

An Ember CLI add-on that wraps [Tooltipster](http://iamceege.github.io/tooltipster/) into an ember component.
The component supports most of [Tooltipster](http://iamceege.github.io/tooltipster/) features.

[DEMO](http://altrim.github.io/ember-cli-tooltipster/)

## Installation

```sh
ember install ember-cli-tooltipster
```

## Basic Usage

```handlebars
  {{#tool-tipster title="This is my tooltip message!"}} 
    Checkout my tooltip
  {{/tool-tipster}}
```

### With options

```handlebars
  {{#tool-tipster 
     content="This is my tooltip message!" 
     triggerEvent="click" 
     side="right"
   }} 
   The tooltip is displayed on the right when you click it!
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

  side: 'right',

  timer: 2000 // set the timer to automatically close after 2 seconds
});
```
Then in your template.

```handlebars
{{#my-button}} Tooltip Button {{/my-button}}
```
That's it, now your button will display a nice tooltip on the right that will automatically close after 2 seconds.

## Themes

Besides the default theme [four other themes](http://iamceege.github.io/tooltipster/#themes) are available that you can use for your tooltip.

By default the themes are `not included` when you install the addon. 

To include the desired theme you need to set the corresponding setting in your build file.

```javascript
//ember-cli-build.js

/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'ember-cli-tooltipster': {
      importTooltipsterPunk: true
    }
  });

  return app.toTree();
};
```
Available Settings

```javascript
importTooltipsterBorderless:  false,
importTooltipsterLight:  false,
importTooltipsterNoir:   false,
importTooltipsterPunk:   false,
importTooltipsterShadow: false
```

## Default/Bundled Styles

Unlike the themes above, the default base styles are `included` when you install the addon.  To remove the base styles you need to set ```importTooltipsterDefaultStyles``` to ```false``` in your build file.

## Available Options

When using the component, the following options are available: 

#### animation
Type: `string`

Default: `fade`

Determines how the tooltip will animate in and out. In addition to the built-in transitions, you may also create custom transitions in your CSS files. In IE9 and lower, all animations default to a JavaScript generated, fade animation

Available Options: `[fade, grow, swing, slide, fall]`

#### animationDuration
Type: `integer`, `integer[]`

Default: `350`

Sets the duration of the animation, in milliseconds. If you wish to provide different durations for the opening and closing animations, provide an array of two different values.

### arrow
Type: `boolean`

Default: `true`

Adds the "speech bubble arrow" to the tooltip.

### content
Type: `String`,`jQuery object`

Default: `null`

If set, this will override the content of the tooltip. If you provide something else than a string or jQuery-wrapped HTML element, you will need to use the 'functionFormat' option to format your content for display.

### contentAsHTML
Type: `boolean`

Default: `false`

If the content of the tooltip is provided as a string, it is displayed as plain text by default. If this content should actually be interpreted as HTML, set this option to true. 

### contentCloning
Type: `boolean`

Default: `false`

If you provide a jQuery object to the 'content' option, this sets if it is a clone of this object that should actually be used.

### debug
Type: `boolean`

Default: `true`

Tooltipster logs hints and notices into the console when you're doing something you ideally shouldn't be doing. Set to false to disable logging.

### delay
Type: `integer`, `integer[]`

Default: `300`

Upon mouse interaction, this is the delay before the tooltip starts its opening and closing animations when the 'hover' trigger is used. If you wish to specify different delays for opening and closing, you may provide an array of two different values.

### delayTouch
Type: `integer`, `integer[]`

Default: `[300, 500]`

Upon touch interaction, this is the delay before the tooltip starts its opening and closing animations when the 'hover' trigger is used (*). If you wish to specify different delays for opening and closing, you may provide an array of two different values.

### distance
Type: `integer`, `integer[]`

Default: `6`

The distance between the origin and the tooltip, in pixels. The value may be an integer or an array of integers (in the usual CSS syntax) if you wish to specify a different distance for each side.

### IEmin
Type: `integer`

Default: `6`

The minimum version of Internet Explorer to run on.

### interactive
Type: `boolean`

Default: `false`

Give users the possibility to interact with the content of the tooltip. If you want them to be able to make clicks, fill forms or do other interactions inside the tooltip, you have to set this option to true. When the 'hover' close trigger is used, the user has to move the cursor to the tooltip before it starts closing (this lapse of time has its duration set by the 'delay' option)

### minWidth
Type: `integer`

Default: `0` (auto width)

Set a minimum width for the tooltip.

### minIntersection
Type: `integer`

Default: `16`

Corresponds to the minimum distance to enforce between the center of the arrow and the edges of the tooltip. Mainly used to create an arrow bigger than those of the default themes.

### maxWidth
Type: `integer`

Default `null` (no max width)

Set a maximum width for the tooltip.

### repositionOnScroll
Type: `boolean`

Default `fale`

Repositions the tooltip if it goes out of the viewport when the user scrolls the page, in order to keep it visible as long as possible.

### restoration
Type: `string`

Default `none`

Specifies if a TITLE attribute should be restored on the HTML element after a call to the 'destroy' method. This attribute may be omitted, or be restored with the value that existed before Tooltipster was initialized, or be restored with the stringified value of the current content. Note: in case of multiple tooltips on a single element, only the last destroyed tooltip may trigger a restoration. 

Available options: `none`, `previous`, `current`

### selfDestruction
Type: `boolean`

Default `true`

Sets if the tooltip should self-destruct after a few seconds when its origin is removed from the DOM. This prevents memory leaks.

#### side
Type: `string`, `string[]`

Default: `['top', 'bottom', 'right', 'left']`

Sets the side of the tooltip. The value may one of the following: 'top', 'bottom', 'left', 'right'. It may also be an array containing one or more of these values. When using an array, the order of values is taken into account as order of fallbacks and the absence of a side disables it

Available options: `['top', 'bottom', 'right', 'left']`

### timer
Type: `integer`

Default: `0` (disabled)

How long the tooltip should be allowed to live before hiding.

#### theme
Type: `string`,`string[]` (CSS class)

Default: `empty array`

Set a theme that will override the default tooltip appearance. You may provide an array of strings to apply several themes at once.

#### trackerInterval
Type: `integer`

Default: `500`

Sets how often the tracker should run (see trackOrigin and trackTooltip), in milliseconds. The tracker runs even if trackOrigin and trackTooltip are false to check if the origin has not been removed while the tooltip was open, so you shouldn't set too high or too low values unless you need to.

#### trackOrigin

Type: `boolean`

Default: `false`

Repositions the tooltip if the origin moves or is resized. As this option may have an impact on performance, we suggest you enable it only if you need to. 

#### trackTooltip

Type: `boolean`

Default: `false`

Repositions the tooltip if its size changes. When the size change results from a call to the 'content' method, the tooltip is already repositioned without the need to enable this option. As this option may have an impact on performance, we suggest you enable it only if you need to.

### triggerEvent
Type: `string`

Default: `hover`

Sets when the tooltip should open and close. 'hover' and 'click' correspond to predefined sets of built-in triggers, while 'custom' lets you create your own, for a completely customized behavior.

Available options: `hover`, `click`, `custom`

### triggerClose
Type: `object `

When 'trigger' is set to 'custom', all built-in close triggers are disabled by default. This option allows you to reactivate the triggers of your choice to create a customized behavior. Only applies if 'trigger' is set to 'custom'. 

### triggerOpen
Type: `object `

Similar to 'triggerClose'.

### updateAnimation
Type: `string`

Default: `rotate`

Plays a subtle animation when the content of the tooltip is updated (if the tooltip is open). You may create custom animations in your CSS files. Set to null to disable the animation.

Available options: `fade`, `rotate`, `scale`, `null`

### viewportAware
Type: `boolean`

Default: `true`

Tries to place the tooltip in such a way that it will be entirely visible on screen when it's opened. If the tooltip is to be opened while its origin is off screen (using a method call), you may want to set this option to false.


### zIndex
Type: `integer`

Default: `9999999 `

Set the z-index of the tooltip.

## Advanced Options

In order to use the advanced options you need to [extend the component](#extending-the-component) and implement the functions. For more information check the examples on [Tooltipster Docs](http://iamceege.github.io/tooltipster/#options)

### functionInit
Type: `function`

Default: `none(null)`

A custom function to be fired only once at instantiation.

### functionBefore
Type: `function`

Default: `none(null)`

A custom function to be fired before the tooltip is opened. This function may prevent the opening if it returns false. 

### functionReady
Type: `function`

Default: `none(null)`

A custom function to be fired when the tooltip and its contents have been added to the DOM.

### functionAfter
Type: `function`

Default: `none(null)`

A custom function to be fired once the tooltip has been closed and removed from the DOM.


### functionFormat
Type: `function`

Default: `none(null)`

A custom function that does not modify the content but that can format it for display. It gets the two first usual arguments and also the content as third argument. It must return the value that will be displayed in the tooltip, either a string or a jQuery-wrapped HTML element.

### functionPosition
Type: `function`

Default: `none(null)`

A custom function fired when the tooltip is repositioned. It gives you the ability to slightly or completely modify the position that Tooltipster is about to give to the tooltip. It gets the proposed set of placement values as third argument. The function must return the set of placement values, which you may have edited.
