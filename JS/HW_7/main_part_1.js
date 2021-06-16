// - Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".


const text = document.querySelector('#text');
const btn = document.querySelector('.btn-1');

btn.onclick = () => {
    text.hidden === true ?
        text.hidden = false :
        text.hidden = true;

};


// Alternative

// btn.onclick = () => {
//     text.style.display === 'none' ?
//         text.style.display ='block':
//         text.style.display = 'none'
// };

console.log(text);
console.log(btn);


//     - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.

const hiddenBtn = document.querySelector('.btn-2');

hiddenBtn.onclick = () => {
    hiddenBtn.hidden = true;
};


// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача

const confirm = document.querySelector('.btn-3');
const age = document.querySelector('#age');
const outInfo = document.querySelector('.out-info');


confirm.onclick = () => {
    age.value < 18 ?
        outInfo.innerText = 'Sorry, You are too young!' :
        outInfo.innerText = 'Welcome to the website!'
};

console.log(age);
console.log(confirm);


// - Створіть меню, яке розгортається/згортається при клику

const menu = document.querySelector('.btn-4');
const content = document.querySelector('.dropdown-content');

content.hidden = true;

menu.onclick = () => {
    // content.hidden === false ?
    //  content.hidden = true:
    //  content.hidden = false

    // Alternative
    content.hidden = !content.hidden;
};

content.onmouseover = (ev) => {
    ev.target.style.backgroundColor = 'grey';
    ev.target.style.color = 'whitesmoke';
};

content.onmouseout = (ev) => {
    ev.target.style.backgroundColor = 'lightgray';
    ev.target.style.color = 'black';
};

// HOW TO PUT THEM TOGETHER IN ONE FUNCTION


// - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вивести список коментарів в документ, кожний в своєму блоці.
//     Додайте кожному коментарю по кнопці для згортання його body.

const forum = [
    {
        id: 1,
        name: 'Igor',
        email: 'igor12@gmail.com',
        title: 'Problem',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ' +
            'et dolore magna aliqua.'
    },
    {
        id: 2,
        name: 'Ivan',
        email: 'ivan22@gmail.com',
        title: 'Solve',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ' +
            'et dolore magna aliqua.'
    },
    {
        id: 3,
        name: 'Ira',
        email: 'ira35@gmail.com',
        title: 'Solution',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ' +
            'et dolore magna aliqua.'
    },
];


let section = document.querySelector('.task-5');
let innerContent = document.querySelectorAll('.inner-content');
let userName = document.querySelectorAll('.user-name');
let userEmail = document.querySelectorAll('.user-email');
let userTitle = document.querySelectorAll('.user-title');
let userComment = document.querySelectorAll('.user-comment');
let btnHideComment = document.querySelectorAll('.btn-5');


console.log(userName);

forum.map((user, inx) => {
    userName[inx].innerHTML = user.name;
    userEmail[inx].innerHTML = user.email;
    userTitle[inx].innerHTML = user.title;
    userComment[inx].innerHTML = user.comment;
    btnHideComment[inx].onclick = () => {
        userComment[inx].hidden = !userComment[inx].hidden;
    }
});


// - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const country = document.getElementById('country');
const city = document.getElementById('city');
const ok = document.querySelector('.btn-6');
const data = document.querySelector('.data');

const countries = [{
    country:'Ukraine',
    city: ['Lviv',
        'Kyiv',
        'Kharkiv']
},
    {
        country:'Poland',
        city:['Krakow',
            'Warsaw',
            'Lodz']
    }];

countries.map((value) =>{
    const countryOption = document.createElement('option');
    countryOption.setAttribute('value',value.country);
    countryOption.innerText = value.country;
    country.appendChild(countryOption);

});

country.onchange = () => {
    city.innerText = '';
    let selectedCountry = country.value;
    for (const item of countries) {
        if (selectedCountry === item.country){
            item.city.forEach((item) => {
                let cityOption = document.createElement('option');
                cityOption.setAttribute('value',item);
                cityOption.innerText = item;
                city.appendChild(cityOption);
            });
        }
    }
};


ok.onclick = () => {
    data.innerHTML = `Hello my name is ${firstName.value}. My surname is ${lastName.value}. 
    I'm from ${city.value},${country.value}`
};


// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.



