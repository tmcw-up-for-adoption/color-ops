# color-ops

[![build status](https://secure.travis-ci.org/mapbox/color-ops.png)](http://travis-ci.org/mapbox/color-ops)

simple color operations


### `hue(color)`

Get the hue component of a color


### Parameters

| parameter | type  | description |
| --------- | ----- | ----------- |
| `color`   | Color |             |



**Returns** `Number`, hue


### `saturation(color)`

Get the saturation component of a color as a string
representing percentage


### Parameters

| parameter | type  | description |
| --------- | ----- | ----------- |
| `color`   | Color |             |



**Returns** `String`, saturation


### `lightness(color)`

Get the lightness component of a color as a string
representing percentage


### Parameters

| parameter | type  | description |
| --------- | ----- | ----------- |
| `color`   | Color |             |



**Returns** `String`, lightness


### `alpha(color)`

Get the alpha component of a color


### Parameters

| parameter | type  | description |
| --------- | ----- | ----------- |
| `color`   | Array |             |



**Returns** `Number`, alpha


### `saturate(color, amount)`

Saturate or desaturate a color by a given amount


### Parameters

| parameter | type   | description |
| --------- | ------ | ----------- |
| `color`   | Color  |             |
| `amount`  | Number |             |



**Returns** `Color`, color


### `lighten(color, amount)`

Lighten or darken a color by a given amount


### Parameters

| parameter | type   | description |
| --------- | ------ | ----------- |
| `color`   | Color  |             |
| `amount`  | Number |             |



**Returns** `Color`, color


### `fade(color, amount)`

Fade a color by a given amount


### Parameters

| parameter | type   | description |
| --------- | ------ | ----------- |
| `color`   | Color  |             |
| `amount`  | Number |             |



**Returns** `Color`, color


### `spin(color, degrees)`

Rotate the hue of a color by an amount given in decimal degrees.

### Parameters

| parameter | type   | description |
| --------- | ------ | ----------- |
| `color`   | Color  |             |
| `degrees` | Number |             |



**Returns** `Color`, output

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install color-ops
```

## Tests

```sh
$ npm test
```


