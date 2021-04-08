// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
// b) робить шириниу елементу ul 400px
// c) робить шириниу всіх елементів з класом linkList шириною 50%
// d) отримує текст який зберігається в елементі з класом listElement2
// e) отримує всі елементи li та змінює ім колір фону на сірий
// f) отримує всі елементи 'a' та додає їм клас anchor
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// l) отримати елементи p та змінити їм padding на 20px
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)


const idMainHeader = document.getElementById('main_header');
const ulTag = document.getElementsByTagName('ul');
const lists = document.getElementsByTagName('li');
const linkListClass = document.getElementsByClassName('linkList');
const listElem2 = document.getElementsByClassName('listElement2');
const aElem = document.getElementsByTagName('a');
const subHeader = document.getElementsByClassName('sub-header');
const content1 = document.getElementsByClassName('content_1');
const paragraph = document.getElementsByTagName('p');
const txt2 = document.getElementsByClassName('text2');


idMainHeader.style.color = 'brown';
idMainHeader.innerText = 'Monday-Year';


for (const ul of ulTag) {
    ul.style.width = '400px';
    console.log(ulTag);


}

for (let i = 0; i < linkListClass.length; i++) {
    linkListClass[i].style.width = '50%';
    linkListClass[i].style.backgroundColor = 'grey';
}

console.log(listElem2);


for (let i = 0; i < aElem.length; i++) {
    aElem[i].classList.add('anchor', 'XXX');
    if (aElem[i].innerText === 'link3') {
        aElem[i].style.fontSize = '40px';
    }
    aElem[i].innerText = 'XXX'
}


// for (let i = 0; i < subHeader.length; i++) {
//     let backgroundColor = prompt('Enter background color');
//     let color = prompt('Enter color');
//         if (!color && !backgroundColor) {
//             alert('Please enter a color')
//         } else {
//             subHeader[i].style.backgroundColor = backgroundColor;
//             subHeader[i].style.color = color
//         }
// }


for (const p of paragraph) {
    p.style.padding = '20px'
}

// for (const content of content1) {
//     let txt = prompt('Enter text');
//     if (!txt) {
//              alert('Please enter text')
//          } else {
//              content.innerText = txt
//    }
// }

for (const txt of txt2) {
    txt.innerText = 'Horay'
}


// 2) Є масив котрий характеризує правила.
//     Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html
//
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    }
];


const content = document.createElement('div');
const wrap = document.createElement('div');
const mainTitle = document.createElement('h1');


wrap.setAttribute('id', 'wrap');
mainTitle.innerText = 'Rules of fighing club';
content.setAttribute('id', 'content');

document.body.appendChild(content);
document.body.appendChild(mainTitle);
document.body.appendChild(wrap);

for (let i = 0; i < rules.length; i++) {
    const rule = document.createElement('div');
    const title = document.createElement('h2');
    const par = document.createElement('p');

    rule.style.backgroundColor = 'silver';
    rule.style.width = '500px';
    rule.style.border = 'solid red 1px';
    rule.style.margin = '5px';


    wrap.appendChild(rule);
    title.innerHTML = `Title: ${rules[i].title} <br>`;
    rule.appendChild(title);
    par.innerHTML = `Rule: ${rules[i].body} <br>`;
    rule.appendChild(par);
}


//
// ===========================================================================
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];


let userWithCities = [];


for (const users of usersWithId) {
    for (const city of citiesWithId) {
        if (users.id === city.user_id) {
            users.address = city;
        }
    }
    userWithCities.push(users);
}

console.log(userWithCities);

