// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.


const userTextArea = document.getElementById('user-info');


userTextArea.onchange = (ev) => {
    let someInfo = ev.target.value;
    let setTextArea = localStorage.setItem('userInfo', someInfo);
};
let getTextArea = localStorage.getItem('userInfo');
userTextArea.value = getTextArea;


// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.

const countries = [{
    country: 'Ukraine',
    city: ['Lviv',
        'Kyiv',
        'Kharkiv',
        'Odesa',
        'Ternopil']
},
    {
        country: 'Poland',
        city: ['Krakow',
            'Warsaw',
            'Lodz',
            'Lublin']
    },
    {
        country: 'Germany',
        city: ['Berlin',
            'Stuttgard',
            'Dresden',
            'Bremen']
    },
    {
        country: 'France',
        city: ['Paris',
            'Toulouse',
            'Lyon',
            'Nantes']
    },
    {
        country: 'Italy',
        city: ['Roma',
            'Torino',
            'Milano',
            'Bologna']
    }];


const userApplication = document.getElementById('user-application');
const countrySelector = document.getElementById('country');
const citySelector = document.getElementById('city');
const userFullName = document.getElementById('name');
const userAge = document.getElementById('age');
const userStatus = document.getElementsByName('status');
const userExp = document.getElementsByName('exp');
const userPass = document.getElementById('password');
const userInformation = document.getElementById('info');
const btnSubmit = document.getElementById('submit');


countries.sort(((a, b) => {
    if (a > b) {
        return 1;
    }
    return -1;
}));

countries.map(((value, index) => {
    value.city.sort(((a, b) => {
        if (a > b) {
            return 1;
        }
        return -1
    }));
    const countryOption = document.createElement('option');
    countryOption.setAttribute('value', value.country);
    countryOption.innerText = value.country;
    countrySelector.appendChild(countryOption);
    const cityOption = document.createElement('option');
    cityOption.setAttribute('value', value.city);
    cityOption.innerText = value.city;
    citySelector.appendChild(cityOption);
}));


countrySelector.onchange = () => {
    citySelector.innerText = '';
    let selectedCountry = countrySelector.value;
    for (const item of countries) {
        if (selectedCountry === item.country) {
            for (const city of item.city) {
                const cityOption = document.createElement('option');
                cityOption.setAttribute('value', city);
                cityOption.innerText = city;
                citySelector.appendChild(cityOption);
            }
        }
    }
};



let counter = 1;
const addUser = (ev) => {
    ev.preventDefault();
    let experience = [];

    class User {
        constructor(id, name, age, country, city, password, info, status, exp,) {

            this.id = id;
            this.name = name;
            this.age = age;
            for (const radio of userStatus) {
                if (radio.checked) {
                    this.status = radio.value;
                }
            }
            this.country = country;
            this.city = city;
            for (const checkbox of userExp) {
                if (checkbox.checked) {
                    this.exp = experience;
                    experience.push(checkbox.value)
                }
            }
            this.password = password;
            this.info = info;
        }
    }

    let user = new User(`${counter}`, userFullName.value, userAge.value, countrySelector.value, citySelector.value, userPass.value, userInformation.value);
    counter++;
    document.forms[1].reset();


//Local storage info


    let logInfo = JSON.parse(localStorage.getItem('logIn'));

    if (localStorage.getItem('logIn') === null) {
        let users = [];
        users.push(user);
        localStorage.setItem('logIn', JSON.stringify(users));
    } else {
        logInfo.push(user);
        localStorage.setItem('logIn', JSON.stringify(logInfo));
    }

};


btnSubmit.addEventListener('click', addUser);


let item1 = JSON.parse(localStorage.getItem('logIn'));
console.log(item1);

let lastUser = item1.pop();
const {id, name, age, status, country, city, exp, password, info} = lastUser;

userFullName.value = name;
userAge.value = +age;
for (const radio of userStatus) {
    if (radio.value === status) {
        radio.checked = true;
    }
}
for (const item of countrySelector) {
    if (item.value === country) {
        item.selected = true;
    }
}
citySelector.innerText = '';
let selectedCountry = countrySelector.value;
for (const item of countries) {
    if (selectedCountry === item.country) {
        for (const field of item.city) {
            const cityOption = document.createElement('option');
            cityOption.setAttribute('value', field);
            cityOption.innerText = field;
            citySelector.appendChild(cityOption);
            if (field === city) {
                cityOption.selected = true;
            }
        }
    }
}
for (const item of userExp) {
    exp.forEach((skill => {
        if (item.value === skill) {
            item.checked = true;
        }
    }))
}

userPass.value = password;
userInformation.value = info;




















