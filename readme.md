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

// rgba
@include bg-color(100, 200, 100, 0.1);

// top right bottom left
@include pos(10px, false, 2px, 10px);
}
```