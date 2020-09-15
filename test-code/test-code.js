console.log(a); //输出什么
console.log(b); //输出什么
var a = function() {};
function b() {}



function test() {
	function aaa() {
		console.log(this);
	}
	this.aaa = aaa;
}
var object = new test();
object.aaa(); //输出什么  为什么
var aaa = object.aaa;
aaa(); //输出什么  为什么
