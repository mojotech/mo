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
});
