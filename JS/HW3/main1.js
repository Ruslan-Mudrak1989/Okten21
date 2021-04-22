// - Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// a) отримує текст з параграфа з id "content"
// b) отримує текст з блоку з id "rules"
// c) замініть текст параграфа з id 'content' на будь-який інший
// d) замініть текст параграфа з id 'rules' на будь-який інший
// e) змініть кожному елементу колір фону на червоний
// f) змініть кожному елементу колір тексту на синій
// g) отримати весь список класів елемента з id=rules і вивести їх в console.log
// h) отримати всі елементи з класом fc_rules
// i) поміняти колір тексту у всіх елементів fc_rules на червоний


const elementByIdContent = document.getElementById('content');

console.log(elementByIdContent.innerText);
const elementByIdRules = document.getElementById('rules');

console.log(elementByIdRules.innerText);

const changedContent = elementByIdContent.innerText = 'Ukraine is a country in Eastern Europe. It is bordered by Russia to the east and north-east; Belarus to the north; Poland, Slovakia and Hungary to the west; and Romania, Moldova and the Black Sea to the south. Including Crimea, Ukraine has an area of 603,628 km2';

console.log(changedContent);

let changedRules = elementByIdRules.innerText = 'Львів заснував король Данило приблизно у 1231—1235 роках (перша згадка від 1256 року).';

console.log(changedRules);

const bodyElements = document.getElementsByTagName('body');

for (let i = 0; i < bodyElements.length; i++) {
    bodyElements[i].style.backgroundColor = 'salmon';
    bodyElements[i].style.color = 'blue';
}

console.log(bodyElements);

const elementsByClassNameRules = document.getElementsByClassName('fc_rules');

console.log(elementsByClassNameRules);

for (let i = 0; i < elementsByClassNameRules.length; i++) {
    elementsByClassNameRules[i].style.color = 'brown';
}
console.log(elementsByClassNameRules);


// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Вставити цей блок на сторінку
// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Блок з адресою зробити окремим блоком, з блоками для кожної властивості

let users = [{
    name: 'Vasyl',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'Petro',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'Mykola',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'Olga',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'Maxim',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'Anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'Oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'Andew',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'Masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'Olena',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'Viktor',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];


for (let i = 0; i < users.length; i++) {
    const userBlocks = document.createElement('div');
    const userAddress = document.createElement('div');
    const button = document.createElement('button');

    userBlocks.style.backgroundColor = 'lightgreen';
    userBlocks.style.margin = '20px';
    userBlocks.style.padding = '10px';
    userBlocks.style.width = '500px';
    button.innerText = 'Add friend';
    button.style.margin = '5px';


    userBlocks.innerHTML = `Name: ${users[i].name}; Age: ${users[i].age}; Status: ${users[i].status};<hr>`;
    userBlocks.appendChild(userAddress);
    const address = `Street: ${users[i].address.street}; House Number: ${users[i].address.houseNumber}<hr>`;
    userAddress.innerHTML = `City: ${users[i].address.city};Country: ${users[i].address.country} ${address}`;
    document.body.appendChild(userBlocks);
    userBlocks.appendChild(button);
}


