// // const name = "shuna";

// // const age = 31;

// // const msg = `Hello, this is ${name}, i am ${age} years old`

// // console.log(msg)

// // const profile = {
// //     name: 'shuna',
// //     age: 23
// // };

// // const msg2 = `this is the first try, ${profile.age}`
// // console.log(msg2)


// // const {name, age} = profile ;

// // const msg = `this is ${name}, ${age} years old`;

// // console.log(msg)

// // const myinfo = ["shuna", "jasmine"]

// // const msg1 = `this is ${myinfo[0]}`
// // console.log(msg1)

// // const [myself, herself] = myinfo

// // const msg2 = `this is second message, written by ${myself}`
// // console.log(msg2)

// // デフォルト値

// // const sayHello = (name = "user") => console.log(`hello, ${name}!`)

// // sayHello("shuna")

// // const profile = {
// //     age: 23,
// //     name: "jasmine"
// // };

// // const {age, name = "shuna"} = profile;

// // console.log(age);
// // console.log(name);

// // オブジェクトの省略記法

// // const name = "Shuna";
// // const age = 23;

// // const profile = {
// //     name : name,
// //     age: age
// // };

// // 配列の展開
// // const array1 = [1, 2];

// // console.log(...array1);


// // const sumFunc = (num1, num2) => console.log(num1+num2);

// // sumFunc(...array1);

// // Summarize 

// // const array2 = [1,2,3,4,5];

// // const [num1, num2, ...array3] = array2;

// // console.log(num2);
// // console.log(...array3);

// // 配列のコピー、結合

// // const array4 = [10, 20];
// // const array5 = [30, 40];

// // const array6 = [...array4];
// // console.log(array6);

// // const array7 = [...array6, ...array5];
// // console.log(array7)



// // map, filter 

// const nameArray = ["shuna", "jasmine", "hong jin"];

// // for (let index = 0; index < nameArray.length; index++) {
// //     console.log(nameArray[index]);
// // }

// const nameArray2 = nameArray.map((name, index) => {
//     console.log(`${index}th name is ${name}`);
// });


// // const num = [1,2,3,4,5,6,7,8,9];

// // const newnum = num.filter((num) => {
// //     return num % 2 === 1;
// // });

// // console.log(newnum)

// const newArray3 = nameArray.map((name) => {
//     if (name === "jasmine") {
//         return `Ms.${name}`
//     } else {
//         return `Mr${name}`
//     }
// });

// console.log(newArray3);

// 三項演算子

// const ans = true

// const val1 = ans? "Yes": "No";

// console.log(val1)


// const num = "shuna";
// const formatNum = typeof num === "number"? num.toLocaleString() : "Please enter a number";

// console.log(formatNum)

// const checkSum = (num1, num2) => {
//     return num1 + num2 > 100? "it exceeds 100" : "its below 100"
// };

// console.log(checkSum(100, 50));

// 論理演算子


const judge = (val) => {
    if (val) {
        console.log(`${val} is truthy`);
    } else {
        console.log(`${val} is falsy`);
    }
};

judge(null)


const num = 40;

// ||は左側がtrythyの時その時点で返却する
const fee = num || "the fee is undefined";
console.log(fee);

// &&は左側がfalsyのときその時点で返却する
const num2 = null;

const fee2 = num2 && "something was set";
console.log(fee2);






