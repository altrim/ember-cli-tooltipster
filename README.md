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

with options

```handlebars
  {{#tool-tipster title="This is my div's tooltip message!" triggerEvent="click" position="right"}} 
    This div has a tooltip on the right when you click it! 
  {{/tool-tipster}}
```

## Options

When using tooltipster, the following options are available: 

#### position
Type: `String`
Default: `top`

Set the position of the tooltip.

Available options: `[right, left, top, top-right, top-left, bottom, bottom-right, bottom-left]`

#### animation
Type: `String`
Default: `fade`

Determines how the tooltip will animate in and out.

Available Options: `[fade, grow, swing, slide, fall]`

### delay
Type: `Number`
Default: `200`

Delay how long it takes (in milliseconds) for the tooltip to start animating in.

#### theme
Type: `String`
Default: `tooltipster-default`

Set the theme used for your tooltip. 

###triggerEvent
Type: `String`
Default: 'hover'

Set how tooltips should be activated and closed.

Available options: `[hover, click]`

