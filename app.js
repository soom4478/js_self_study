const age = parseInt(prompt("How old are you?")); // NaN이 아니면 숫자 그 외에는 숫자 아님

if(isNaN(age) || age < 0) {
    console.log("Please write a number");
}
else if(age < 18) {
    console.log("You are too young");
}
else if(age >= 18 && age <= 50) {
    console.log("You can drink");
}
else if(age > 50 && age <= 80) {
    console.log("You should exercise");
}
else if(age === 100) {
    console.log("wow you are wise");
}
else if(age > 80) {
    console.log("You cand do whatever you want");
}