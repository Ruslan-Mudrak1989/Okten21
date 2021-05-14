// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
let greet = 'hello';
let company ='owu';
let dom = 'com';
let uaDom = 'ua';
let firstNum = 1;
let decade = 10;
let decrease = -999;
let numHund = 123;
let pi = 3.14;
let float = 2.7;
let age = 16;
let bool = true;
let bool2 = false;

console.log(greet,company,dom,uaDom,firstNum,decade,decrease,numHund,pi,float,age,bool,bool2);
document.write(greet,company,dom,uaDom);


// - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

greet = 'Hi';
company = 'Best';
firstNum = 0;
float = 2.5;
console.log(greet,company,firstNum,float);
// alert(company);



// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".


let name = prompt('What is your name?');
let surname = prompt('What is your surname?');
let middle = prompt('What is your middle name?');
let myAge = prompt('How old are you?');


document.write('<br>' + 'Hello' + ' ' + name + ' ' + middle + ' ' + surname + ' ' + '<br>' + 'You are'+ ' ' + myAge + ' ' + 'years old');




// - Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).

let concat = name + surname + middle + myAge;

console.log(concat);

// - За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.

let firstNumb = +prompt('First number');
let secondNum = +prompt('Second number');
let thirdNum = +prompt('Third number');

console.log(firstNumb,secondNum,thirdNum);


// - За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою paeseInt. Додати їх всі мож собою і результат вивести в консоль.

let one = parseInt(prompt('one'));
let two = parseInt(prompt('two'));
let three = parseInt(prompt('three'));
let four = parseInt(prompt('four'));


let sum = one + two + three + four;

console.log(sum);



// - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat.
//     Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.


let floatOne = parseFloat(prompt('one'));
let floatTwo = parseFloat(prompt('two'));
let floatThree = parseFloat(prompt('three'));

let resilt = floatOne + floatTwo + floatThree;

console.log(resilt);



// - За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS"). Просумувати їх між собою.
// Результат вивести в консоль.

let roundOne = Math.round(prompt('one'));
let roundTwo = Math.round(prompt('two'));
let roundThree = Math.round(prompt('three'));

let res = roundOne + roundTwo + roundThree;

console.log(res);


// - За допомогою prompt() отримати 2 цілих числа.
//     Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
//     За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
//     Example. Число 1 = 5. Число 2 = 2. Результат = 25

let powOne = parseInt(prompt('one'));
let powTwo = parseInt(prompt('two'));

let resPow = Math.pow(powOne,powTwo);

console.log(resPow);



//     - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);


// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразаї не використовувати однакові оператори!!!
// 5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true

// console.log(5 < 6);
// console.log(5 > 6);
// console.log(5 >= 6);
// console.log(5 == 6);
// console.log(10 == 10);
// console.log(10 === 10);
// console.log(10 != 10);
// console.log(10 !== 10);
// console.log(10 < 10);
// console.log(123 === '123');
// console.log(123 == '123');


// Додатково:
//     - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.
// console.log(132 > 100 && 45 < 12 ); // false
// console.log(34 > 33 && 23 < 90 ); // true
// console.log(99 > 100 && 45 > 12 ); // false
// console.log(132 > 100 || 45 < 12 );// true
// console.log(111 > 11 || 45 < 111 );// true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );// true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );// true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );// false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));// true
// console.log(!!'-1');// true
// console.log(!!-1); // true
// console.log(!!'0');// true
// console.log(!!'null'); // true
// console.log(!!'undefined');// true
// console.log(!!(3/'owu'));// false
// console.log((111 > 11 || 45 < 111) ||  !!'0'); // true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); // false
//

// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
// 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».

let str = 'Hello';
let num = 123;
let flag = true;
let txt = 'true';

// За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.

console.log(typeof str);
console.log(typeof num);
console.log(typeof flag);
console.log(typeof txt);

// 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
//     34,
//         12,
//         66,
//         90,
//         87
// Старайтесь використовувати різні оператори.
//     Example: 88 = (16 / 2) * 11


let a1,a2,a3,a4,a5;

a1 = (8 + 9) * 2;
a2 = (3)*(2 * 2);
a3 = (99 / 3)+ 33;
a4 = (10 * 6)+(15 * 2);
a5 = (60 + 20)+(3 + 4);

console.log(a1,a2,a3,a4,a5);



// 3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'

let a6 = 5 % 3;
let a7 =  3 % 5;
let a8 =  5 + '3';
let a9 =  '5' - 3;
let a10 =  75 + 'кг';

console.log(a6, a7, a8, a9, a10);



// 4. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значееня площі зберігати в змінній s.

let height = +prompt('height');
let width = +prompt('width');

let s = height * width;

console.log(s);


// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.

let heightC = +prompt('height C');
let d = +prompt('d');

let v = pi *d * heightC;
console.log(v);


// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

let n = +prompt('n');
let m = +prompt('m');

let hip = Math.pow(n,2) + Math.pow(m,2);

console.log(hip);


// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
//
// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

let name1 = 'Ruslan';
let surname1 = 'Mudrak';
let age1 = 31;
let hobby = 'sport';

alert( name1 + '\n' + surname1 + '\n' + age1 + '\n' + hobby);



//
// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write

let str1 = 'Who';
let str2 = 'are';
let str3 = 'you';

let concatenation = str1 + ' ' + str2 +' ' + str3;

document.write(concatenation);




// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?


let str12 = "20";
let a12 = 5;
document.write(str12 + a12 + "<br/>");
document.write(str12 - a12 + "<br/>");
document.write(str12 * "2" + "<br/>");
document.write(str12 / 2 + "<br/>");
// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?


console.log(parseInt("3.14"));
console.log(parseInt("-7.875"));
console.log(parseInt("435"));
console.log(parseInt("Вася"));
//
// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее,
// повторите код ниже
let str13 = prompt("Enter something", "ho-ho");
console.log(str13);
//
// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert

let num13 = +prompt('number 1');
let num14 = +prompt('number 2');

alert(num13 + num14);


//

// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст,
// а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

let myName1 = prompt('What is your name?');
let mySur1 = prompt('What is your surname?');
let myAge1 = +prompt('How old are you?');

alert(`Hello mr ${myName1} ${mySur1}, congratulate that you've got ${myAge1}!`);


// =====================
// ======ДОП============
// =====================
//
//
//
//
// 1. Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

let numFirst = +prompt('num 1');  //3 //3 //1 //2 //1 //2
let numSecond =  +prompt('num 2');  //2 //1 //2 //1 //3 //3
let numThird = +prompt('num 3');  //1 //2 //3 //3 //2 //1

if (numFirst > numSecond && numFirst > numThird){
    if (numSecond > numThird){
        console.log(numThird,numSecond,numFirst);
    } else {
        console.log(numSecond,numThird,numFirst);
    }
} else if (numThird > numSecond && numThird > numFirst) {
    if (numSecond > numFirst) {
        console.log(numFirst, numSecond, numThird);
    } else {
        console.log(numSecond, numFirst, numThird);
    }
} else if (numSecond > numFirst && numSecond > numThird){
    if (numThird > numFirst){
        console.log(numFirst,numThird,numSecond);
    } else {
        console.log(numThird,numFirst,numSecond);
    }
}

// 1. Три різних числа вводяться через prompt().
// //     За допомоги if else вивести іх в порядку спадання. (відсортувати по спаданню)

let numForth = + prompt('num1');
let numFifth = + prompt('num2');
let numSixth = + prompt('num3');

if (numForth > numFifth && numForth > numSixth){
    if (numFifth > numSixth){
        console.log(numForth, numFifth, numSixth);
    } else {
        console.log(numForth,numSixth,numFifth);
    }
}else if(numSixth > numFifth && numSixth > numForth){
    if (numFifth > numForth){
        console.log(numSixth,numFifth,numForth);
    } else {
        console.log(numSixth,numForth,numFifth);
    }
}else if (numFifth > numForth && numFifth > numSixth ){
    if (numForth > numSixth){
        console.log(numFifth,numForth,numSixth);
    } else {
        console.log(numFifth,numSixth,numForth);
    }
}

//
// 2.
// Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!


let trafficLight = prompt('Color');



if (trafficLight ==='green'){
    console.log('Go');
} else if (trafficLight === 'yellow'){
    console.log('Wait');
} else if (trafficLight === 'red'){
    console.log('Stop');
} else {
    console.log('Do whatever you want');
}

// SECOND WAY

// Switch / case

switch (trafficLight) {
    case 'green':
        console.log('Go');
        break;
    case 'yellow':
        console.log('Wait');
        break;
    case 'red':
        console.log('Stop!');
}


//     3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!

let isRoadClear = confirm('Cars on the road');
//
if (trafficLight === 'green' && !isRoadClear){
    console.log('Go');
} else if (trafficLight === 'green' && isRoadClear){
    console.log('Wait, when busters go away');
} else if (trafficLight === 'yellow' && isRoadClear){
    console.log('Wait...');
} else if (trafficLight === 'yellow' && !isRoadClear){
    console.log('Anyway, wait');
} else if (trafficLight === 'red' && !isRoadClear){
    console.log('Anyway, stop!');
} else if (trafficLight === 'red' && isRoadClear){
    console.log('Stop and wait');
} else {
    console.log('Do whatever you want');
}

// SECOND WAY

// Switch / case

switch (trafficLight) {
    case 'green':
         if (!isRoadClear){
             console.log('Go');
         }else {
             console.log('Wait, when busters go away');
         }
         break;
    case 'yellow':
        if (isRoadClear){
            console.log('Wait...');
        } else {
            console.log('Anyway, wait');
        }
        break;
    case 'red':
        if(!isRoadClear){
            console.log('Anyway, stop!');
        }else {
            console.log('Stop and wait');
        }
        break;
    default:
        console.log('Do whatever you want');
}

