// 5. Increment / Decrement Operators (++ / --)
// Part_A
// Q1
let count=5;
count++;
console.log(count);

// Q2
let playerLives = 3;
playerLives--;
console.log(playerLives);

//Q3
let scoreq3=10;
scoreq3++;
console.log(scoreq3);

// Q4
let itemq4 = 8;
itemq4--;
console.log(itemq4);

// Q5
let countq5 = 0;
countq5+=2;
console.log(countq5)

// Part_B
// Q6
var x = 5;
y = x++
console.log(`X => ${x} starts with 5 and increases to 6, Y => ${y} is assigned X before increment`)

// Q7
var a = 5;
b = ++a
console.log(`a => ${a} starts with 5 and increases to 6, b => ${b} is assigned a after increment`)

// Q8
var lives = 3;
var previousLives=lives--;
console.log("Q8","lives =>", lives, "previousLives =>",previousLives);

// Q09
var attempts = 0;
var currentAttempts = ++attempts;
console.log(`Q09 attempts ${attempts}, currentAttempts ${currentAttempts}`);

// Q10
var points = 100;
points++;
points--;
console.log(`Q10 ${points}`)

// Part_C
console.log(`Q11`);
var x = 10;
var y = x++;
var z = ++x;
console.log(x, y, z);

// Output

// 12 10 12


console.log("Q12");
var a = 5;
var b = a-- + ++a;
console.log(a, b);
// Output
// 5 10


console.log("Q13")
var m = 7;
var n = --m + m++;
console.log(m, n);
// Output
// 7 12


console.log("Q14");
var p = 3;
var q = p++ + ++p + p;
console.log(p, q);
// Output
// 5 13