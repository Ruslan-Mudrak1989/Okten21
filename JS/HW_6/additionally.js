// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.

const car1 = {
    car: 'Audi',
    model: 'TT',
    power: 2.0,
    color: 'white',
    year: 2008,
    price: 7500,
    owner: {
        name: 'Oleh',
        age: 25,
        exp: 3
    }
};

const car2 = {
    car: 'Opel',
    model: 'Astra',
    power: 1.6,
    color: 'black',
    year: 2009,
    price: 4900,
    owner: {
        name: 'Ivan',
        age: 27,
        exp: 5
    }
};
const car3 = {
    car: 'Mazda',
    model: '6',
    power: 2.2,
    color: 'Blue',
    year: 2010,
    price: 8500,
    owner: {
        name: 'Ira',
        age: 30,
        exp: 6
    }
};
const car4 = {
    car: 'Volkswagen',
    model: 'Jetta',
    power: 1.4,
    color: 'red',
    year: 2017,
    price: 14300,
    owner: {
        name: 'Yura',
        age: 34,
        exp: 6
    }
};
const car5 = {
    car: 'Mitsubishi',
    model: 'Colt',
    power: 1.3,
    color: 'grey',
    year: 2006,
    price: 5000,
    owner: {
        name: 'Katya',
        age: 21,
        exp: 1
    }
};
const car6 = {
    car: 'Hyundai',
    model: 'Tucson',
    power: 2,
    color: 'silver',
    year: 2008,
    price: 7800,
    owner: {
        name: 'Ihor',
        age: 28,
        exp: 4
    }
};
const car7 = {
    car: 'Hyindai',
    model: 'Sonata',
    power: 2.4,
    color: 'black',
    year: 2011,
    price: 12500,
    owner: {
        name: 'Vlad',
        age: 33,
        exp: 10
    }
};
//     Для початку вкладіть всі наші створені автомобілі в масив cars.

const newCars = new Array();

const collectionOfCars = function () {
    for (const argument of arguments) {
        newCars.push(argument)
    }
    return newCars
};
collectionOfCars(car1, car2, car3, car4, car5, car6, car7);
console.log(newCars);

//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).

const upgradedPower = newCars.map((car, index) => {
    if (!(index % 2)) {
        car.power *= 1.1;
    }
    return car
});
console.log(upgradedPower);
console.log(newCars);


// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).

const newDrivers = [{
    name: 'Vova',
    age: 31,
    exp: 11
}, {
    name: 'Vitia',
    age: 41,
    exp: 18
}, {
    name: 'Alex',
    age: 35,
    exp: 12
}, {
    name: 'Andy',
    age: 49,
    exp: 20
}
];
// newDrivers.forEach((value => console.log(value)));

for (const car of newDrivers) {
    console.log(car);
}
let i = 0;
const drivers = newCars.map(((car, index) => {
    {
        if (index % 2 === 0) {
            car.owner = newDrivers[i];
            index = i++;
            return car.owner
        }
    }
}));
console.log(drivers);
console.log(newCars);


// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%

const renewedCars = newCars.map(((car, index) => {
    if (index % 2 === 0) {
        car.power *= 1.1;
        car.price *= 1.05;
    }
    return car;
}));

console.log(renewedCars);

// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
//     то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.

const experience = newCars.map(((car, index) => {
    if (car.owner.exp <= 5 && car.owner.age >= 25) {
        return car.owner.exp++;
    }
}));
console.log(experience);
console.log(newCars);


//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

const totalPrice = newCars.reduce(((acc, currentValue) => {
    return acc += currentValue.price;
}), 0);

console.log(totalPrice);


// Задача: дан отсортированный по возрастанию массив целых чисел.
//     Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4


const arrNum = [1, 1, 3, 4, 6, 6, 6, 8, 8, 9, 10];

let number = 6;

// const indexNum = function (num, arr) {
//     let minInd = false;
//     let maxInd = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === num){
//             if(!minInd){
//                 minInd = i;
//             }
//             maxInd = i;
//         }
//
//     }
//     return `Key: ${num}. Answer: MinIndex = ${minInd}, MaxIndex = ${maxInd}`
// };
// console.log(indexNum(number, arrNum));

// ALTERNATIVE 1

// const indexNum = (num, arr) => {
//    const items = arr.reduce(((acc, value, index) => {
//         if (num === value){
//             acc.push(index)
//         }
//         return acc;
//     }), []);
//     console.log(items);
//     minInd = items[0];
//     maxInd = items[items.length -1];
//
//     return `Key: ${num}. Answer: MinIndex = ${minInd}, MaxIndex = ${maxInd}`
// };
//
// console.log(indexNum(number, arrNum));


// Alternative 2

const indexNum = (num, arr) => {
    arr.filter((value => num === value));
    minInd = arr.indexOf(num);
    maxInd = arr.lastIndexOf(num);

    return `Key: ${num}. Answer: MinIndex = ${minInd}, MaxIndex = ${maxInd}`
};

console.log(indexNum(number, arrNum));
