let arrNumber = [5, 9, 6, 8, 4, 6];
let sum = 0;


//I'm sorry, I can not find a way to do this by using recursion
function sumArr(arrNum) {
    for (let i = 0; i < arrNum.length; i++) {
        sum += arrNum[i];
        // let arrNumberNew = arrNum;
        // if (sum <= 5) {
        //     sumArr(arrNumberNew);
        // }
    }
    console.log(sum);
}

// console.log("hello");

sumArr(arrNumber);

// function sumNumber(number) {
//     console.log(number);
//     let newNumber = number + 1;
//     if (newNumber < 10) {
//         sumNumber(newNumber);
//     }
// }

// sumNumber(5);