function Foo() {
  this.x = 100;
  this.y = 99;
//   占用内存,绑定到了当前的实例
//   this.show = function () {
//     console.log(this.x, this.y);
//   };
}

// 静态方法
// 没有为啥，必须这样写
Foo.prototype.pShow = function () {
    console.log(this.x, this.y);
}

foo = new Foo();
console.log(foo);
