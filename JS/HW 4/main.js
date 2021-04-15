// 1) створити функцію яка приймає масив та виводить його
let arr1 = [2, 'hi', false, 4];
let arrayFunc = (array) => console.log(array);

arrayFunc(arr1);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

let randomFuncArr = (min, max, length) => {
    array = [];
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
    let maxNumInArr = 0;
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
        count += elem / arr.length;
    }
    return count
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

let studentKeys = (arr) => {
    let arrKey = [];
    for (let i = 0; i < arr.length; i++) {
        for (const key in arr[i]) {
            arrKey.push(key);
        }
    }
    return arrKey;
};

let studentsK = studentKeys(students);
arrayFunc(studentsK);


// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

let studentsValues = (arr) => {
    let arrValue = [];
    for (let i = 0; i < arr.length; i++) {
        for (const value in arr[i]) {
            arrValue.push(arr[i][value])
        }
    }
    return arrValue
};

let studentsV = studentsValues(students);
arrayFunc(studentsV);


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
    // for (let i = 0; i < arr1.length; i++) {
    //     for (let j = 0; j < arr2.length; j++) {
    //         if ((arr1.indexOf(arr1[i])) === (arr2.indexOf(arr2[j]))) {
    //             result.push(arr1[i] + arr2[j])
    //         }
    //     }
    // }

    for (const index1 in arr1) {
        for (const index2 in arr2) {
            if (index1 === index2){
                result.push(arr1[index1] + arr2[index2]);
            }
        }
    }
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


