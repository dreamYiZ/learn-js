function Foo() {
  this.x = 100;
  this.y = 99;
  this.show = function () {
    console.log(this.x, this.y);
  };
}


Foo.prototype.pShow = function () {
    console.log(this.x, this.y);
}

foo = new Foo();
console.log(foo);
