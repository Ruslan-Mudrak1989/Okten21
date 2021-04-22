// 1) створити функцію яка приймає масив та виводить його
let arr1 = [2, 'hi', false, 4];
let arrayFunc = (array) => console.log(array);

arrayFunc(arr1);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

let randomFuncArr = (min, max, length) => {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * max) + min);
    }

    return array
};
let newRandomArr = randomFuncArr(1, 100, 20);
arrayFunc(newRandomArr);


// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let minValue = (num1, num2, num3) => {
    let minNum = 0;
    if (num1 < num2 && num1 < num3) {
        minNum = num1;
    } else if (num2 < num1 && num2 < num3) {
        minNum = num2
    } else if (num3 < num1 && num3 < num2) {
        minNum = num3
    }
    return minNum;
};

const min = minValue(19, 5, 7);

arrayFunc(min);

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let maxValue = (num1, num2, num3) => {
    let maxNum = 0;
    if (num1 > num2 && num1 > num3) {
        maxNum = num1;
    } else if (num2 > num1 && num2 > num3) {
        maxNum = num2
    } else if (num3 > num1 && num3 > num2) {
        maxNum = num3
    }
    return maxNum;
};

const max = maxValue(112, 65, 89);

arrayFunc(max);


// 5) створити функцію яка повертає найбільше число з масиву

let maxArrNum = (arr) => {
    let maxNumInArr = arr[0];
    for (const elem of arr) {
        if (maxNumInArr < elem) {
            maxNumInArr = elem;
        }
    }
    return maxNumInArr;
};

let maxNumInArr = maxArrNum(newRandomArr);
arrayFunc(maxNumInArr);


// 6) створити функцію яка повертає найменьше число з масиву

let minArrNum = (arr) => {
    let minNumInArr = arr[0];
    for (const elem of arr) {
        if (minNumInArr > elem) {
            minNumInArr = elem;
        }
    }
    return minNumInArr;
};

let minNumInArr = minArrNum(newRandomArr);
arrayFunc(minNumInArr);


// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

let total = (arr) => {
    let count = 0;
    for (const elem of arr) {
        count += elem;
    }
    return count;
};

let sum = total(newRandomArr);
arrayFunc(sum);

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let arithm = (arr) => {
    let count = 0;
    for (const elem of arr) {
        count += elem;
    }
    const avarage = count/ arr.length;
    return avarage
};


let arithArr = arithm(newRandomArr);
arrayFunc(arithArr);


// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]


const students = [{
    name: 'Ruslan',
    age: 31,
    wife: true,
    car: 'Audi',
    skills: ['js', 'java', 'python'],
}, {
    name: 'Natalia',
    age: 25,
    husband: true,
    car: 'Nissan',
    skills: ['cook', 'medical', 'bake'],
}];
console.log(students);

// let studentKeys = (arr) => {
//     let arrKey = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (const key in arr[i]) {
//             arrKey.push(key);
//         }
//     }
//     return arrKey;
// };


// Alternative

// let studentKeys = (arr) => {
//     let arrKey = [];
//     for (const obj of arr) {
//         for (const key in obj) {
//             arrKey.push(key);
                /*Object.keys()*/
//         }
//     }
//
//     return arrKey;
// };
//
// let studentsK = studentKeys(students);
// arrayFunc(studentsK);


// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// let studentsValues = (arr) => {
//     let arrValue = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (const value in arr[i]) {
//             arrValue.push(arr[i][value])
                    /*Object.values()*/
//         }
//     }
//     return arrValue
// };

// Alternative

// let studentsValues = (arr) => {
//     let arrValue = [];
//     for (const obj of arr) {
//         for (const value in obj) {
//             arrValue.push(obj[value])
//         }
//     }
//     return arrValue
// };
//
//
// let studentsV = studentsValues(students);
// arrayFunc(studentsV);


// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
// [2,3,4,5]
// результат
//     [3,5,7,9]

const someArr = [2, 6, 5, 4, 'go', 15, true, false, 12, 'go'];
const anotherArray = [4, 23, 5, 56, 7, '7', 21, true, 2, 9];


let sumValues = (arr1, arr2) => {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
                result.push(arr1[i] + arr2[i])
    }

    // for (const index1 in arr1) {
    //             result.push(arr1[index1] + arr2[index1]);
    // }
    return result
};

console.log(sumValues(someArr, anotherArray));


// - Дано список імен.
//     let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'


let n1 = '    Harry       Potter      ';
let n2 = '    Ron       Whisley      ';
let n3 = '    Hermione       Granger      ';


function usersName(user = 'Name Surname') {
    // return user.replace(/\s+/g, ' ').trim()
    let editUsers = '';
    let splitUsers = user.split(' ');
    for (const elem of splitUsers) {
        if (elem !== '') {
            editUsers += elem + ' ';
        }
    }
    editUsers = editUsers.trim();
    return editUsers;
}

let someUser = usersName(n2);
console.log(someUser);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function randomValues() {
    let max = 0;
    let min = arguments[0];
    for (const argument of arguments) {
        if (max < argument) {
            max = argument;
        } else if (min > argument) {
            min = argument;
        }
    }
    console.log(max);
    return min;
}


let minVal = randomValues(13, 14, 9, 18, 7, 15, 6, 15);

console.log(minVal);


// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//     Що б я міг сам вибрати повернути мені масив ключів чи масив значень.

let studentKeyAndValues = (arr, toggle) => {
    let arrKey = [];
    if (toggle) {
        for (const obj of arr) {
            for (const key in obj) {
                arrKey.push(key);
            }
        }
        return arrKey;

    } else {
        let arrValue = [];
        for (const obj of arr) {
            for (const value in obj) {
                arrValue.push(obj[value])
            }
        }
        return arrValue
    }
};


let studentKeyOrValue = studentKeyAndValues(students, 'on');
arrayFunc(studentKeyOrValue);


// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]


let arrNunbers = [4, 0, 9, 0, 3, 8];


console.log(arrNunbers);

let switcher = (arr, index) => {
    if (index < arr.length - 1) {
        let element = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = element;
    }
    return arr;
};

let change = switcher(arrNunbers, 4);
console.log(change);

//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// let zeroMover = (arr) => {
//     let arrZero = [];
//     let arrOfNumbers = [];
//     for (const elem of arr) {
//         elem === 0?
//             arrZero.push(elem):
//             arrOfNumbers.push(elem);
//
//     }
//
//     console.log(arrZero);
//     console.log(arrOfNumbers);
//     return arrOfNumbers.concat(arrZero);
// };

//
// let move = zeroMover(arrNunbers);
// console.log(move);


// Alternative


let zeroMoverAlt = (arr) => {
    let tempArr = [...arr];
    for (let i = tempArr.length - 1; i > 0; i--) {
        if (tempArr[i] === 0) {
            tempArr.push(tempArr[i]);
            tempArr.splice(i, 1);
        }
    }
    return tempArr;
};

let move = zeroMoverAlt(arrNunbers);
console.log(move);

//
// ============================================================================================
//
//
//
// // ******************* НАЗАД В МИНУЛЕ *********************** //
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

let addText = (tagName, text = 'Hello world') => {
    let element = document.createElement(tagName);
    element.innerText = text;
    document.body.appendChild(element);
    return element
};

let text = addText('div', 'Hello OWU');
console.log(text);

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// //     Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// //     Для кожної властивості створити всередені блока автомоблія свій блок


const cars = [{
    car: 'Audi',
    model: 'TT',
    power: 2.0,
    color: 'white',
    year: 2008,
}, {
    car: 'Opel',
    model: 'Astra',
    power: 1.6,
    color: 'black',
    year: 2009,

}, {
    car: 'Mazda',
    model: '6',
    power: 2.2,
    color: 'Blue',
    year: 2010,

}, {
    car: 'Volkswagen',
    model: 'Jetta',
    power: 1.4,
    color: 'red',
    year: 2017,

}, {
    car: 'Mitsubishi',
    model: 'Colt',
    power: 1.3,
    color: 'grey',
    year: 2006,

}];

let addSomeArray = (arr, tagName) => {
    const mainTag = document.createElement(tagName);
    document.body.appendChild(mainTag);
let conter = 1;
    for (const obj of arr) {
        const innerTags = document.createElement(tagName);
        const title = document.createElement('h2');
        mainTag.appendChild(title);
        mainTag.appendChild(innerTags);
        title.innerHTML = `<hr>Car ${conter++}`;
        innerTags.innerHTML = `<hr>`;
        for (const value in obj) {
            const propertyTags = document.createElement(tagName);
            innerTags.appendChild(propertyTags);
            propertyTags.innerHTML = `${value}: ${obj[value]}`;
        }

    }
};

addSomeArray(cars, 'div');


