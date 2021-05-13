// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


function Car(model, country, year = 0, maxSpeed = 0, power = 0) {
    this.model = model;
    this.country = country;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.power = power;
    this.drive = function () {
        console.log(`Driving with the speed ${this.maxSpeed} per hour`);
    };
    this.info = function () {
        console.log(`model = ${this.model},
        country = ${this.country},
        year = ${this.year},
        maxSpeed = ${this.maxSpeed},
        power = ${this.power},
    `);
    };
    this.encreaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

const volvo = new Car('Volvo', 'Sweden', 1998, 260, 1.8);
console.log(volvo);
volvo.info();
volvo.encreaseMaxSpeed(300);
volvo.changeYear(2000);
volvo.addDriver('Vasya');
volvo.drive();


// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


const div = document.createElement('div');
const title = document.createElement('h2');

document.body.appendChild(div);
div.appendChild(title);
title.innerText = 'Cars';

// const model = prompt('Enter the model');
// const country = prompt('Enter the country');
// const year = +prompt('Enter the year');
// const maxSpeed = +prompt('Enter the maximum speed');
// const power = +prompt('Enter the power');
// const driverCar = prompt('Enter the driver');



class Car1 {
    constructor(model, country, year = 0, maxSpeed = 0, power = 0, driver) {

        this.model = model;
        this.country = country;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.power = power;


        const div = document.createElement('div');
        document.body.appendChild(div);

        div.style.margin = '20px';
        div.style.padding = '10px';
        div.style.backgroundColor = 'violet';
        div.style.width = '400px';


        div.innerHTML = `Model: ${this.model},<br>
               Country: ${this.country},<br>
               Year: ${this.year},<br>
               Maximum Speed: ${this.maxSpeed},<br>
               Power: ${this.power},<br>`
    };

    drive() {
        console.log(`Driving with the speed ${this.maxSpeed} per hour`);
    };

    info() {
        console.log(`model = ${this.model},
        country = ${this.country},
        year = ${this.year},
        maxSpeed = ${this.maxSpeed},
        power = ${this.power},
    `);
    };

    encreaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed;
    };

    changeYear(newValue) {
        this.year = newValue;
    };

    addDriver(driver) {
        this.driver = driver;
    };

}


// const newCar = new Car1(model, country, year, maxSpeed, power);


// console.log(newCar);
// newCar.info();
// newCar.encreaseMaxSpeed('300');
// newCar.changeYear(2000);
// newCar.addDriver(driverCar);
// newCar.drive();


// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом



class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

class Cinderella extends Person{
    constructor(name,age,footSize){
        super(name,age);
        this.footSize = footSize;
    }
}


class Prince extends Person {
    constructor(name, age, shoe) {
        super(name, age);
        this.shoe = shoe;
    }
}

const prince = new Prince('Kolia',23,28);

const cinderellas = [
new Cinderella('Alina',29,34),
new Cinderella('Olya',18,29),
new Cinderella('Maria',23,31),
new Cinderella('ira',24,36),
new Cinderella('Natalia',31,37),
new Cinderella('Olena',19,28),
new Cinderella('Vika',22,39),
new Cinderella('Solomia',23,32),
new Cinderella('Nastya',28,24),
new Cinderella('Valeria',26,25)
];


for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.shoe){
        console.log(cinderella);
    }
}







