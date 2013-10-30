var fs      = require('fs');
var sass    = require('node-sass');
var assert  = require('assert');


function matchHelper(name) {
  assert.equal(
    fs.readFileSync("test/expected/"+name+".css", "utf8")
  ,
    sass.renderSync({
      data: fs.readFileSync("test/src/"+name+".scss", "utf8")
    })
  );
}

describe('Mixins', function() {
  it('position mixin', function() {
    matchHelper('position');
  });

  it('media queries mixin', function() {
    matchHelper('media-queries');
  });

  it('size mixin', function() {
    matchHelper('size');
  });

  it('background color', function() {
    matchHelper('background-color');
  });

  it('ellipsis', function() {
    matchHelper('ellipsis');
  });

  it('retian background image', function() {
    matchHelper('retina-background-image');
  });
});
