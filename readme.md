mo -- better mixins
===============

[![Build Status](https://travis-ci.org/mojotech/mo.png)](https://travis-ci.org/mojotech/mo)

mo provides a basic set of mixins to make styling your app simple.

The problem right now is that you have to include a tool like bourbon or compass. (which are massive)

mo is simple and small. built out of my need.


## Documentation Index
* [Installing](#installing)
* [API](#api)
	* [Below](#below)
	* [Above](#above)
	* [Between](#between)
	* [Hide At](#hide-at)
	* [Full Width At](#full-width-at)
	* [Center Text At](#center-text-at)
	* [Background Color](#background-color)
	* [Position](#position)
	* [Ellipsis](#ellipsis)
	* [Size](#size)
	* [Retina Background Image](#retina-background-image)


## Installing

```scss
@import "mo";
```


## API


### Below

This mixin is used apply custom styles **at and below** a given pixel width.

```scss
.headline {
	@include below(100px) {
	  background: red;
	}
}
```

### Above

This mixin is used apply custom styles **at and above** a given above pixel width.

```scss
.headline {
	@include above(200px) {
	  background: teal;
	}
}
```

### Between

This mixin is used apply custom styles **between** a given pixel width range.

```scss
.headline {
	@include between(200px, 300px) {
	  background: yellow;
	}
}
```

### Hide At

This mixin hides a given selector at and below a given pixel width.

```scss
.headline {
	@include hideAt(500px);
}
```

### Full Width At

This mixin sets an element to `width: 100%;` at and below a given pixel width.

```scss
.headline {
	@include fullWidthAt(500px);
}
```

### Center Text At

This mixin sets `text-align: center;` at and below a given width.

```scss
.headline {
	@include centerTextAt(500px);
}
```

### Background Color

This mixin provides a way to set transparent backgrounds
in ie8 and up.
It support an rgba syntax along with a hex and % opaque param.

```scss
// hex
.headline {
	@include bg-color(#FF0000, 0.4);
}
// rgba
.headline {
	@include bg-color(100, 200, 20, 0.5);
}
```

### Position

This mixin provides a terse syntax for setting the `position`, `top`, `right`, `bottom`, and `left` properties of a given selector.

It takes an optional `position` param, and then takes 4 arguments for setting `top`, `right`, `bottom`, and `left` respectively.

Any value that is set to `false` will not be set.

```scss
.headline {
	// position top right bottom left
	@include pos(fixed, 10px, false, 2px, 10px);
}

.headline {
	// top right bottom left
	@include pos(10px, false, 2px, 10px);
}
```

### Ellipsis

This mixin provides a simple mechanism to turn a selector into single line ellipsis overflow area with an ellipsis.

```scss
.headline {
	@include ellipsis(50px);
}
```

### Size

This mixin provides a short hand for setting width and height of an element. One can also set both the width and height with a single value when you want them to be equal.

```scss
.headline {
	@include size(100px, 200px);
}

.headline {
	// sets both the width and height to 300px
	@include size(300px);
}
```

### Retina Background Image

This mixin provides you with a simple mechanism for setting a conditional retina background image.

Pass filepath for original image and filepath for retina image as first and second args respectively.

```scss
.headline {
	@include retina-background-image('img/cat.png', 'img/cat@2x.png');
}
```

