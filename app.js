function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and i'm " + age);
}

sayHello("nico", 21);
sayHello("dal", 40);
sayHello("lynn", 15);

function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}

function divide(a, b) {
    console.log(a / b);
}

plus(8, 60);
divide(98, 20);

const player = {
    name: "nico",
    sayHello: function(otherPersonName) {
        console.log("hello, " + otherPersonName + "!");
    }
};

console.log(player.name);
player.sayHello("lynn");
player.sayHello("nico");