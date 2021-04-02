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
    document.write(`<div>${i + 1}. Hello guys<div>`)
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

const step = 60;
let min = 0;
let sec = 0;
let hour = 0;

for (let j = 1; j < step && min < 2 /*min !== 2*/; j++) {
    for (let k = 1; k < step; k++) {
        sec++;
        console.log('Second:', sec);
    }
    sec = 0;
    min++;
    console.log('Minute:', min);
}
console.log(min + ':' + sec);


// - Відтворити роботу годинника, відрахувавши
// 2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

let min1 = 0;
let sec1 = 0;
let hour1 = 0;

for (hour1 = 0; hour1 < step && hour1 <= 2; hour1++) {
    console.log('Hour:', hour1);
    for (min1 = 1; min1 < step; min1++) {
        console.log('Minutes:', min1);
        if (hour1 === 2 && min1 === 20) {
            break;
        }
        for (sec1 = 1; sec1 < step; sec1++) {
            // console.log('Second:', sec1);
        }
    }
}
console.log(`${hour1}:${min1}:${sec1}`);
