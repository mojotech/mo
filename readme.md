mo – a better sass base
===============

```scss
@import "mo";
```


API
-----------


```scss
@include below(100px) {
  background: red;
}

@include above(200px) {
  background: teal;
}

@include between(200px, 300px) {
  background: yellow
}

// hex
@include bg-color(#FF0000, 0.4);

// rgba
@include bg-color(100, 200, 20, 0.5);

// top right bottom left
@include pos(10px, false, 2px, 10px);

//convert text area to a single line ellipsis overflow area
@include ellipsis(50px);

//short hand for setting width and height of an element
@include size(100px, 200px);

//you can also set both the width and height with a single value
@include size(300px);
```

