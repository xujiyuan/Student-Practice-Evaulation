'use strict';

const i = 44;

(function () {
  var i = 22;
  var j = 0;
  var name = undefined;
  var self = this;

  function a() {
    console.log('#1 =>', i);
    for (let i = 0; i < 5; i++) {
      console.log('#2 =>', i);
    }
    console.log('#3 =>', i);
  }

  function b() {
    var i;
    console.log('#4 =>', i);

    for (var i = 0; i < 5; i++) {
      console.log('#5 =>', i);
    }
    console.log('#6 =>', i);

    if (name === 'marcus') {
      j = 55;
      var salary = '100K';
    }
    console.log('#9 =>', j);
  }

  console.log('#7 =>', i);

  name = 'marcus';

  a();
  b();
  console.log('#10 =>', j);
})();

console.log('#8 =>', i);
