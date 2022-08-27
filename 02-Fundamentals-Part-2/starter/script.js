// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, "Zihan"));

// Challenge 1
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// let averageD = calcAverage(44, 23, 71);
// let averageK = calcAverage(65, 54, 49);

// let checkWinner = function (score1, score2) {
//   score1 > score2
//     ? console(`Winner is team Dolphins with score of ${score1}`)
//     : console.log(`Winner is team Koalas with score of ${score2}`);
// };

// checkWinner(averageD, averageK);

// const friends = ["Zhao", "Qian", "Sun", "Li"];
// console.log(friends[0]);
// console.log(friends.length);

// friends[2] = "Chen";
// console.log(friends[2]);

// const newLength = friends.push("Zhang");
// console.log(friends);
// console.log(newLength);

// friends.unshift("Xu");
// console.log(friends);

// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Zhao"));

// console.log(friends.includes("Qian"));

// const calcTip = function (bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 1.15;
//   } else {
//     return bill * 1.2;
//   }
// };

// const zihan = {
//   firstName: "Zihan",
//   lastNmae: "Zhao",
//   age: 2022 - 1998,
//   job: "student",
// };

// console.log(zihan);
// console.log(zihan.age);
// console.log(zihan["firstName"]);

// zihan.location = "San Jose";
// zihan["weixin"] = "zzh093219";
// console.log(zihan);

// const zihan = {
//   firstName: "Zihan",
//   lastNmae: "Zhao",
//   birthYear: 1998,
//   job: "student",

//   calcAge: function () {
//     this.age = 2022 - this.birthYear;
//     return this.age;
//   },
// };

// console.log(zihan.calcAge());

//Challenge 3
// const mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     return this.mass / this.height ** 2;
//   },
// };

// const john = {
//   firstName: "John",
//   lastName: "Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     return this.mass / this.height ** 2;
//   },
// };

// const winner = mark.calcBMI() > john.calcBMI() ? mark : john;

// console.log(`${winner.firstName}'s BMI (${winner.calcBMI()}) is higher`);

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Let's repeat ${rep}`);
// }
