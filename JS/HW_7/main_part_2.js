// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

const rude = ['fuck',
    'bitch',
    'mother fucker',
    'son of the bitch'
];

const rudeWord = document.querySelector('#rude');
const checker = document.querySelector('.btn-8');


checker.onclick = () => {
    const findBadWord = rude.find((word => word === rudeWord.value));
    if (findBadWord) {
        alert('You are rude person!')
    } else {
        alert('You are so cute!')
    }
};

// Alternative

rudeWord.onchange = (ev) => {
    const inputValue = ev.target.value;
    const checked = rude.includes(inputValue);
    if (checked) {
        alert('Shame on you!');
    } else {
        alert('Great person!')
    }
};

// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку


const inputSentence = document.querySelector('#sentence');
const btnChecker = document.querySelector('.btn-10');


btnChecker.onclick = () => {
    const inputUser = inputSentence.value;
    rude.find(value => inputUser.includes(value)) ?
        alert('What an impolite person!') :
        alert('Everything is Okay!');
};

// ALTERNATIVE

// inputSentence.onchange = (ev) => {
//     const inputValue = ev.target.value;
//     for (const bad of rude) {
//         const b = inputValue.includes(bad);
//         if (b) {
//             alert('Go to hell!');
//         }
//     }
// };


// -- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст по всіх заголовках які є в тексті.
//     При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті


const contentFightingClub = document.querySelector('#content');
const wrapFightingClub = document.querySelector('#wrap');
const sidebar = document.querySelector('.side-bar');
const titleRules = document.querySelectorAll('h2');
const dropdownMenuBtn = document.querySelector('.btn-11');


const dropdownMenu = document.createElement('div');
dropdownMenu.setAttribute('class', 'drop-down-menu');
sidebar.appendChild(dropdownMenu);
dropdownMenu.style.display = 'flex';
dropdownMenu.style.flexDirection = 'column';
dropdownMenu.style.backgroundColor = 'lightgray';
dropdownMenu.style.width = '120px';


dropdownMenu.hidden = true;
dropdownMenuBtn.onclick = () => {
    dropdownMenu.hidden = !dropdownMenu.hidden;
};


// for (let i = 0; i < titleRules.length; i++) {
//     const anchorElement = document.createElement('a');
//     titleRules[i].id = `rule${i + 1}`;
//     anchorElement.href = `#rule${i + 1}`;
//     anchorElement.innerText = `Rule № ${i + 1}`;
//     dropdownMenu.appendChild(anchorElement);
//     anchorElement.style.color = 'black';
//     anchorElement.style.textDecoration = 'none';
//     anchorElement.style.padding = '5px';
//     anchorElement.addEventListener('click', function () {
//         for (const item of titleRules) {
//             item.style.color = 'black'
//         }
//         titleRules[i].style.color = 'brown';
//     })
// }

// Alternative

titleRules.forEach((title,index) =>{
    const anchorElement = document.createElement('a');
    title.id = `rule${index + 1}`;
    anchorElement.href = `#rule${index + 1}`;
    anchorElement.innerText = `Rule № ${index + 1}`;
    dropdownMenu.appendChild(anchorElement);
    anchorElement.style.color = 'black';
    anchorElement.style.textDecoration = 'none';
    anchorElement.style.padding = '5px';
    anchorElement.addEventListener('click', function () {
        for (const item of titleRules) {
            item.style.color = 'black'
        }
        title.style.color = 'brown';
    })
} );


dropdownMenu.onmouseover = (ev) => {
    ev.target.style.backgroundColor = 'grey';
    ev.target.style.color = 'whitesmoke';
};

dropdownMenu.onmouseout = (ev) => {
    ev.target.style.backgroundColor = 'lightgray';
    ev.target.style.color = 'black';
};


// -- Взяти масив юзерів
// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];
// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ

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

const checkboxForm = document.querySelector('#filter');
const checkboxStatus = document.querySelector('#status');
const checkboxAge = document.querySelector('#age-filter');
const checkboxCity = document.querySelector('#city-filter');
const outputUsers = document.querySelector('.output');

let userContainer = document.createElement('div');
userContainer.style.backgroundColor = 'lightgray';

usersWithAddress.forEach((user) => {
    let cloneNodeDiv = userContainer.cloneNode(true);
    outputUsers.appendChild(cloneNodeDiv);
    userContainer.innerHTML = `Name: ${user.name} Married: ${user.isMarried}
City: ${user.address.city} Street: ${user.address.street},${user.address.number}`
});



checkboxStatus.onchange = (ev) => {
    outputUsers.innerHTML = '';
    if (ev.target.checked) {
        let filterUser = usersWithAddress.filter((user) =>
            !user.isMarried);
        for (const item of filterUser) {
            let cloneNodeDiv = userContainer.cloneNode(true);
            outputUsers.appendChild(cloneNodeDiv);
            cloneNodeDiv.innerHTML = `Name: ${item.name} Age: ${item.age} Married: ${item.isMarried}
    City: ${item.address.city} Street: ${item.address.street},${item.address.number}`
        }
    } else {
        for (const item of usersWithAddress) {
            let cloneNodeDiv = userContainer.cloneNode(true);
            outputUsers.appendChild(cloneNodeDiv);
            cloneNodeDiv.innerHTML = `Name: ${item.name} Age: ${item.age} Married: ${item.isMarried}
    City: ${item.address.city} Street: ${item.address.street},${item.address.number}`
        }
    }
};

checkboxAge.onchange = (ev) => {
    outputUsers.innerHTML = '';
    if (ev.target.checked) {
        let filterUser = usersWithAddress.filter((user) =>
            user.age > 28);
        for (const item of filterUser) {
            let cloneNodeDiv = userContainer.cloneNode(true);
            outputUsers.appendChild(cloneNodeDiv);
            cloneNodeDiv.innerHTML = `Name: ${item.name} Age: ${item.age} Married: ${item.isMarried}
    City: ${item.address.city} Street: ${item.address.street},${item.address.number}`
        }
    } else {
        for (const item of usersWithAddress) {
            let cloneNodeDiv = userContainer.cloneNode(true);
            outputUsers.appendChild(cloneNodeDiv);
            cloneNodeDiv.innerHTML = `Name: ${item.name} Age: ${item.age} Married: ${item.isMarried}
    City: ${item.address.city} Street: ${item.address.street},${item.address.number}`
        }
    }
};

checkboxCity.onchange = (ev) => {
    outputUsers.innerHTML = '';
    if (ev.target.checked) {
        let filterUser = usersWithAddress.filter((user) =>
            user.address.city === 'Kyiv');
        for (const item of filterUser) {
            let cloneNodeDiv = userContainer.cloneNode(true);
            outputUsers.appendChild(cloneNodeDiv);
            cloneNodeDiv.innerHTML = `Name: ${item.name} Age: ${item.age} Married: ${item.isMarried}
    City: ${item.address.city} Street: ${item.address.street},${item.address.number}`
        }
    } else {
        for (const item of usersWithAddress) {
            let cloneNodeDiv = userContainer.cloneNode(true);
            outputUsers.appendChild(cloneNodeDiv);
            cloneNodeDiv.innerHTML = `Name: ${item.name} Age: ${item.age} Married: ${item.isMarried}
    City: ${item.address.city} Street: ${item.address.street},${item.address.number}`
        }
    }
};