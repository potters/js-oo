// Object programming

var myObject = {}

myObject.name = "myles"
myObject.age = 28
myObject.display = function() { console.log(this.name,'is',this.age) }

myObject.display()


// Prototype programming
// SmallTalk (class based) -> Self (prototype based)

var futureMyles = { __proto__: myObject }
futureMyles.age = 82
futureMyles.display()

// Class based OO

// make a date instance using the Date class
var date = new Date()

var PersonClass = function(name, age) {
  this.name = name
  this.age = age
  this.place = "DBC"
}

PersonClass.prototype.display = function() {
  console.log(this.name,'is',this.age)
}

var person = new PersonClass('myles', 28)

// A (re)implementation of the new keyword
var newNew = function(/* arguments */) {
  var constructorFunction = arguments[0]
  var argsForConstructor = Array.prototype.slice.call(arguments, 1)
  var o = {}
  o.constructor = constructorFunction
  o.__proto__ = constructorFunction.prototype
  constructorFunction.apply(o, argsForConstructor)
  return o
}

var person = newNew(PersonClass, 'myles', 28)

person.display()



