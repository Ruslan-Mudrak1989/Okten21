// Task _1
const cars = [
    {
        producer: "subaru",
        model: "wrx",
        year: 2010,
        color: "blue",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 400
    },
    {
        producer: "subaru",
        model: "legacy",
        year: 2007,
        color: "silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250
    },
    {
        producer: "subaru",
        model: "tribeca",
        year: 2011,
        color: "white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300
    },
    {
        producer: "subaru",
        model: "leone",
        year: 1998,
        color: "yellow",
        type: "sedan",
        engine: "ez20x",
        volume: 2,
        power: 140
    },
    {
        producer: "subaru",
        model: "impreza",
        year: 2014,
        color: "red",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 200
    },
    {
        producer: "subaru",
        model: "outback",
        year: 2014,
        color: "red",
        type: "hachback",
        engine: "ej204",
        volume: 2,
        power: 165
    },
    {producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120},
    {producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120},
    {producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350},
    {producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180},
    {
        producer: "mercedes",
        model: "e200",
        year: 1990,
        color: "silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e63",
        year: 2017,
        color: "yellow",
        type: "sedan",
        engine: "amg63",
        volume: 3,
        power: 400
    },
    {
        producer: "mercedes",
        model: "c250",
        year: 2017,
        color: "red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230
    }
];


// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів

const carVolume = cars.filter(((car, index) => car.volume >= 3));
console.log(carVolume);

// ALTERNATIVE

const carVolumeAlt = cars.reduce((acc, currentCar) => {
    if (currentCar.volume >= 3) {
        acc.push(currentCar)
    }
    return acc;
}, []);

console.log(carVolumeAlt);

// - двигун = 2л

const carsWith2L = cars.filter((value => value.volume === 2));

console.log(carsWith2L);

// ALTERNATIVE

const carsWith2LAlt = cars.reduce((acc, currentCar) => {
    if (currentCar.volume === 2) {
        acc.push(currentCar)
    }
    return acc;
}, []);

console.log(carsWith2LAlt);


// - виробник мерс

const merc = cars.filter((car => car.producer === "mercedes"));

console.log(merc);

// - двигун більше 3х літрів + виробник мерседес

const mercCars = cars.filter((car =>
        car.producer === "mercedes" && car.volume >= 3
));

console.log(mercCars);

// - двигун більше 3х літрів + виробник субару

const subaruCars = cars.filter((car => car.producer === "subaru" && car.volume >= 3));

console.log(subaruCars);


// - сили більше ніж 300

const carPowerOver300 = cars.filter((car => car.power >= 300));

console.log(carPowerOver300);

// - сили більше ніж 300 + виробник субару

const subaruCarsOver300 = cars.filter((car => car.producer === "subaru" && car.power >= 300));

console.log(subaruCarsOver300);


// - мотор серіі ej

const carsEngEj = cars.filter((car => car.engine.includes('ej')));

console.log(carsEngEj);


// - сили більше ніж 300 + виробник субару + мотор серіі ej

const subaruWithEj = cars.filter((car => car.producer === "subaru" && car.power >= 300 && car.engine.includes('ej')));

console.log(subaruWithEj);

// - двигун меньше 3х літрів + виробник мерседес

const carsVolumeLess3L = cars.filter((car => car.volume <= 3));

console.log(carsVolumeLess3L);


// - двигун більше 2л + сили більше 250

const carsUnique = cars.filter((car => car.volume >= 2 && car.power >= 250));

console.log(carsUnique);

// - сили більше 250  + виробник бмв


const bmwMore250 = cars.filter((car => car.producer === 'bmw' && car.power >= 250));

console.log(bmwMore250);


// - взять слдующий массив

const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];

// -- Відсортувати їх по ID

const idSortIncrease = usersWithAddress.sort(((a, b) => a.id - b.id));

console.log(idSortIncrease);

// -- Відсортувати їх по ID в зворотньому порядку

const idSortDecrease = usersWithAddress.sort(((a, b) => b.id - a.id));

console.log(idSortDecrease);


// -- Відсортувати по віку

const ageSortIncrease = usersWithAddress.sort(((a, b) => a.age - b.age));

console.log(ageSortIncrease);

// -- Відсортувати по віку в зворотньому порядку

const ageSortDecrease = usersWithAddress.sort(((a, b) => b.age - a.age));

console.log(ageSortDecrease);

// -- Відсорутвати по імені

const sortName = usersWithAddress.sort(((a, b) => {
    if (a.name.toLowerCase() > b.name.toLowerCase())
        return 1;
    return -1;

}));

console.log(sortName);

// -- Відсорутвати по назві вулиці

const sortStreet = usersWithAddress.sort(((a, b) => {
    if (a.address.street.toLowerCase() > b.address.street.toLowerCase())
        return 1;
    return -1;

}));

console.log(sortStreet);


// -- Відсорутвати по номеру будинку

const sortStreetNumber = usersWithAddress.sort(((a, b) => a.address.number - b.address.number));

console.log(sortStreetNumber);


// -- Залигити тільки тих, хто молодший ніж 30 (filter)

const usersYoungerThan30 = usersWithAddress.filter((user => user.age <= 30));

console.log(usersYoungerThan30);

// -- Залишити тільки одружених

const usersIsMarried = usersWithAddress.filter((user => user.isMarried));

console.log(usersIsMarried);

// -- Залишити тільки одружених, які молодні за 30

const IsMarriedYoungerThan30 = usersIsMarried.filter((user => user.age <= 30));

console.log(IsMarriedYoungerThan30);

// -- Залишити лише тих, в кого парні номери будинків.

const evenNumbers = usersWithAddress.filter((user => user.address.number % 2 === 0));

console.log(evenNumbers);


// -- Порахувати загальний вік всіх людей. (reduce)

const totalAge = usersWithAddress.reduce(((acc, currentUser) => {
    return acc += currentUser.age
}), 0);

console.log(totalAge);


// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)


// const child = usersWithAddress.reduce((acc, user) => {
//     if (user.isMarried && user.age >= 30) {
//         user.child = true;
//         acc.push(user)
//     }
//     return acc
// }, []);
// console.log(child);

// Alternative

const child = usersWithAddress.map(user => {
    if (user.isMarried && user.age >= 30) {
        return ({...user, child: true})
    } return user
});
console.log(child);