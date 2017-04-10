# color-ops

[![Greenkeeper badge](https://badges.greenkeeper.io/tmcw/color-ops.svg)](https://greenkeeper.io/)

[![build status](https://secure.travis-ci.org/mapbox/color-ops.png)](http://travis-ci.org/mapbox/color-ops)

simple color operations


### `toHSL(color)`

Convert a color specified as an RGBA array
into an HSL object.


### Parameters

| parameter | type  | description |
| --------- | ----- | ----------- |
| `color`   | Array | rgba color  |



**Returns** `Object`, hsl representation of that color


### `rgb(r, g, b)`

Given an r, g, b color, return a 4-element RGBA array

### Parameters

| parameter | type   | description |
| --------- | ------ | ----------- |
| `r`       | number | red         |
| `g`       | number | green       |
| `b`       | number | blue        |



**Returns** `Array`, rgba array


### `rgba(r, g, b, a)`

Given an rgba color as number-like objects, return that array
with numbers if possible, and null otherwise


### Parameters

| parameter | type   | description |
| --------- | ------ | ----------- |
| `r`       | number | red         |
| `g`       | number | green       |
| `b`       | number | blue        |
| `a`       | number | alpha       |



**Returns** `Array`, rgba array


### `hsl(h, s, l)`

Given an HSL color as components, return an RGBA array with 100% alpha


### Parameters

| parameter | type   | description |
| --------- | ------ | ----------- |
| `h`       | number | hue         |
| `s`       | number | saturation  |
| `l`       | number | luminosity  |



**Returns** `Array`, rgba color


### `hsla(h, s, l, a)`

Given an HSL color as components, return an RGBA array


### Parameters

| parameter | type   | description |
| --------- | ------ | ----------- |
| `h`       | number | hue         |
| `s`       | number | saturation  |
| `l`       | number | luminosity  |
| `a`       | number | alpha       |



**Returns** `Array`, rgba color


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


### `mix(color1, color2, degrees)`

Mix two colors.

### Parameters

| parameter | type   | description |
| --------- | ------ | ----------- |
| `color1`  | Color  |             |
| `color2`  | Color  |             |
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


