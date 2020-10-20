'use strict';

const i = 44;

(function () {
  var i = 22;
  var name = undefined;
  var self = this;

  function a() {
    console.log('#1 =>', i); // 22
    for (let i = 0; i < 5; i++) {
      console.log('#2 =>', i); // 0, 1, 2, 3, 4
    }
    console.log('#3 =>', i); //4 错了， 22
  }

  function b() {
    var i;
    console.log('#4 =>', i); //undefined

    for (var i = 0; i < 5; i++) {
      console.log('#5 =>', i); //0, 1, 2, 3, 4
    }
    console.log('#6 =>', i); //5

    if (name === 'marcus') {
      var j = 55;
      var salary = '100K';
    }
    console.log('#j =>', j); // 55
  }

  console.log('#7 =>', i); //22

  name = 'marcus';

  a();
  b();
})();

console.log('#8 =>', i); //44

