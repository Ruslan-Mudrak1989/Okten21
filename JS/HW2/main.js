// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль


const arrNum = [1, 5, 8, 15, 87];
const arrString = ['hello', 'guys', 'Igor', 'welcome', 'fix'];
const arrMix = ['June', 'July', 'August', 'September', 65, 98, 123, 5, true, false];

console.log(arrNum, arrString, arrMix);
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

const mixedArr = [];
mixedArr[0] = 'name';
mixedArr[1] = true;
mixedArr[2] = null;
mixedArr[3] = 35;
mixedArr[4] = undefined;

console.log(mixedArr);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

const iter = 0;

for (let i = 0; i < 10; i++) {
    document.write('<div> Hello world <div>')
}


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    // document.write('<div>'+(i + 1)+'. Hello guys<div>')
    document.write(`<div>${i + 1}. Hello guys<div>`);
    console.log('Hello guys');
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i = 0;

// while (i < 20) {
//     document.write('<h1>Aloha<h1>');
//     console.log('aloha');
//     i++
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

while (i < 20) {
    document.write('<h1>' + (i + 1) + '. Aloha<h1>');
    console.log('aloha');
    i++
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let j = 0; j < arrayNum.length; j++) {
    console.log(arrayNum[j]);
}


// - Створити масив з 5 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let arrayString = ['name', 'surname', 'middle', 'age', 'status'];

for (let j = 0; j < arrayString.length; j++) {
    console.log(arrayString[j]);
}

// Array iter   for ...of

for (const item of arrayString) {
    console.log(item);
}

// Array index for ...in

for (const index in arrString) {
    console.log(index);
}

// - Створити масив з 10 елементів будь-якого типу.
// Вивести в консоль всі його елементи в циклі.


// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи

for (let j = 0; j < arrMix.length; j++) {
    if (typeof arrMix[j] === 'boolean') {
        console.log(arrMix[j]);
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи

for (const iter of arrMix) {
    if (typeof iter === 'number') {
        console.log(iter);
    }
}


// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи


// Ternary operator

for (let j = 0; j < arrMix.length; j++) {
    typeof arrMix[j] === 'boolean'
        ? console.log(arrMix[j])
        : '';
}


// - Створити цикл for на 10  ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write

for (let j = 0; j < 10; j++) {
    console.log(j);
    document.write('<div>' + j + '<div>');
}


// - Створити цикл for на 100 ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write


for (let j = 0; j < 100; j++) {
    console.log('Step:', j + 1);
    document.write(`<div> step: ${j + 1}<div>`);
}

// - Створити цикл for на 100 ітерацій з кроком 2.
// Вивести поточний номер кроку через console.log та document.write

for (let j = 0; j < 100; j += 2) {
    console.log(j);
}

// - Створити цикл for на 100 ітерацій.
// Вивести тільки парні кроки. через console.log + document.write

for (let j = 0; j <= 100; j += 2) {
    console.log(j);
}

// - Створити цикл for на 100 ітерацій.
// Вивести тільки непарні кроки. через console.log + document.write

for (let j = 1; j < 100; j += 2) {
    console.log(j);
}

// - Відтворити роботу годинника,
// відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
//
const step = 60;
let min = 0;
let sec = 0;
let hour = 0;

for (min = 1; min < step && min < 2 /*min !== 2*/; min++) {
    for (let k = 1; k < step; k++) {
        sec++;
        console.log('Second:', sec);
    }
    sec = 0;
    // min++;
    console.log('Minute:', min);
}
console.log('Time:'+ min + ':' + sec);



// - Відтворити роботу годинника, відрахувавши
// 2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

let min1 = 0;
let sec1 = 0;
let hour1 = 0;

// for (hour1 = 0; hour1 < step && hour1 <= 2; hour1++) {
//     // console.log('Hour:', hour1);
//     for (min1 = 1; min1 < step; min1++) {
//         // console.log('Minutes:', min1);
//         if (hour1 === 2 && min1 === 20) {
//             break;
//         }
//         for (sec1 = 1; sec1 < step; sec1++) {
//             // console.log('Second:', sec1);
//         }
//     }
// }
// console.log(`${hour1}:${min1}:${sec1}`);


// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

let alpharray = ['a', 'b', 'c'];
let num23 = [1, 2, 3];


// for (let i = 1; i < 4; i++) {
//     alpharray.push(i)
// }
// console.log(alpharray);

// Alternative 1

// for (let i = 0; i < num23.length; i++) {
//     alpharray.push(num23[i])
// }
// console.log(alpharray);

// Alternative 2

for (const number of num23) {
    alpharray.push(number)
}
console.log(alpharray);


// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

let arr = [1, 2, 3];

let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     let item = alpharray.pop();
//     newArr.push(item);
// }
// console.log(newArr);

// Alternative


for (let i = arr.length; i > 0; i--) {
    newArr.push(i);
}
console.log(newArr);


// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.


// arr.push(4, 5, 6);
// console.log(arr);


// Alternative with loop


for (let i = 0; i < arr.length && i < 3; i++) {
    arr.push(arr.length + 1)
}
console.log(arr);


// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

let arr1 = [1, 2, 3];

arr1.unshift(4, 5, 6);

console.log(arr1);

// Alternative with loop


// for (let i = arr1.length; i > 0 && i < 6; i--) {
//     arr1.unshift(9 - arr1.length)
// }
// console.log(arr1);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

let skills = ['js', 'css', 'jq'];
let js = skills.shift();
document.write(js);


// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

let jq = skills.pop();

document.write('<div>' + jq + '<div>');


// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].

let varNum = [1, 2, 3, 4, 5];
console.log(varNum);


// for (let i = 0; i < varNum.length; i++) {
//     varNum.shift();
// }
//
// console.log(varNum);


// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].

// for (let i = 0; i < varNum.length; i++) {
//     varNum.pop();
// }
// console.log(varNum);


// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
//     Підказка. Необхідно стерти елементи, зберегти їх кудись. Дописати букви і після букв повернути стерті цифри


let bufferArray = [];
let letterArray = ['a', 'b', 'c'];
console.log(varNum);


for (let i = 0; i < varNum.length; i++) {
    let restOfItems = varNum.shift();
    bufferArray.push(restOfItems);
}
console.log(bufferArray);

for (const letter of letterArray) {
    bufferArray.push(letter);
}

for (const number of varNum) {
    bufferArray.push(number)
}

console.log(bufferArray);


// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//     Підказка. Працюйте по принципу задачі вище.

let mixedNumbers = [1, 2, 3, 4, 5];


let cLetter = letterArray.pop();
let five = mixedNumbers.pop();
let one = mixedNumbers.shift();


for (let mixedNumber of mixedNumbers) {
    letterArray.push(mixedNumber)
}

letterArray.push(cLetter, five);
letterArray.unshift(one);

console.log(letterArray);


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let dozen = [5, 98, 45, 34, 7, 94, 25, 2, 6, 7, 93, 1];
let even = [];
for (let i = 0; i < dozen.length; i++) {
    if (dozen[i] % 2 === 0) {
        even.push(dozen[i]);
    }
}
console.log(dozen);
console.log(even);


// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while

let lotteryNumbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

let j = 1;

// while (j < lotteryNumbers.length) {
//     console.log(lotteryNumbers[j]);
//     j++;
// }


//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

while (j < lotteryNumbers.length) {
        console.log(lotteryNumbers[j]);
    j+=2;
}


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let k = 1; k < lotteryNumbers.length; k+=2) {
        console.log(lotteryNumbers[k]);
}


// 7. замінити кожне число кратне 3 на слово "okten"


for (let k = 0; k < lotteryNumbers.length; k++) {
    if (lotteryNumbers[k] % 3 === 0) {
        lotteryNumbers[k] = 'okten';
    }
}


console.log(lotteryNumbers);

// 8. вивести масив в зворотньому порядку.


for (let k = lotteryNumbers.length - 1; k >= 0; k--) {
    console.log(lotteryNumbers[k]);
}


// 1. Створити пустий масив та :
// //     a. заповнити його 50 парними числами за допомоги циклу.
// //     b. заповнити його 50 непарними числами за допомоги циклу.
//


largeArr = [];


for (let k = 0; k <= 50; k++) {
    if (k % 2 === 0 || k % 2 !== 0) {
        largeArr.push(k)
    }
}
console.log(largeArr);

for (let k = 0; k < largeArr.length; k++) {

}


unknownArray = [];

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

for (let i = 0; i < 20; i++) {
    unknownArray.push(Math.floor(Math.random() * 100) + 1)
}

console.log(unknownArray);

// // d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

anotherArr = [];

for (let i = 0; i < 20; i++) {
    anotherArr.push(Math.floor(Math.random() * 732) + 8)
}

console.log(anotherArr);


// 2. Вивести за допомогою console.log кожен третій елемент

for (let i = 2; i < anotherArr.length; i += 3) {
    console.log(anotherArr[i]);
}


// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

for (let i = 2; i < anotherArr.length; i += 3) {
    if (anotherArr[i] % 2 === 0) {
        console.log(anotherArr[i]);
    }
}

newAnotherArr = [];

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
for (let i = 2; i < anotherArr.length; i += 3) {
    if (anotherArr[i] % 2 === 0) {
        newAnotherArr.push(anotherArr[i])
    }
}
console.log(newAnotherArr);


// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

arrExample = [1, 24, 3, 51, 7, 19, 56, 8, 67]; // 1,19,56
console.log(arrExample);

// for (let i = 0; i < arrExample.length; i++) {
//     for (let k = i + 1; i < k; k--) {
//         if (arrExample[k] % 2 === 0) {
//             console.log(arrExample[i]);
//         }
//     }
// }


// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let avarageArr = [100, 250, 50, 168, 120, 345, 188];


let count = 0;
let avar;

// for (let i = 0; i < avarageArr.length; i++) {
//     count += avarageArr[i];
//     avar = count / avarageArr.length;
// }


// Alternative

for (const number of avarageArr) {
    count += number / avarageArr.length
}

console.log(count);
// console.log(avar);
//
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let randomArr = [];
let newRandomArr = [];

for (let i = 0; i < 10; i++) {
    randomArr.push(Math.floor(Math.random() * 100) + 1)
}

console.log(randomArr);

for (let k = 0; k < randomArr.length; k++) {
    newRandomArr.push(randomArr[k] * 5)
}

console.log(newRandomArr);


// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

let arrAnyDataTypes = [true, undefined, 45, 'cool', 'best', 89, 6, 'go', false];

let anotherNumArr = [];

for (let i = 0; i < arrAnyDataTypes.length; i++) {
    if (typeof arrAnyDataTypes[i] === 'number') {
        anotherNumArr.push(arrAnyDataTypes[i])
    }
}

console.log(anotherNumArr);

// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово


let abc = ['a', 'b', 'c'];
let word = '';
let word1 = '';
let word2 = '';
for (let i = 0; i < abc.length; i++) {
    word += abc[i];
}
console.log(word);


let n = 0;

while (n < abc.length) {
    word1 += abc[n];
    n++;
}

for (const letter of abc) {
    word2 += letter
}

console.log(word1);
console.log(word2);