// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)
// Назва.
//     В кожного компютера має бути метод включання.
// ===
// Від базового компютрера треба реалізувати ноутбук.
//     Він має нову властивість дюймаж монітора.
//
//     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
// ===
// Від ноутбука потрібно зробити ультрабук.
//     Він має нову змінну ваги.
//     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
// ===
// Від базвого класу потрібно створити базовий ПК.
//     В нього має бути новий метод запуску ігор.
//     Кількість FPS визначається як потужність / опервтивку.
//     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
//
// Компютер можна апгрейдити.
//     Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
//     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
//     Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
// ===
// Від базового ПК необхідно зробити ігровий ПК.
//     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
//     При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// що на цьому відрі ігри не запускаються.
//

class Computer {
    constructor(ram, power, name) {
        if (power > 1000) {
            power = 1000
        }
        if (power < 1) {
            power = 1;
        }
        this.ram = ram;
        this.power = power;
        this.name = name;

    }


    commutator(toggle = false) {
        (toggle === true) ?
            console.log('Log on') :
            console.log('Log off')
    }
}





class LapTop extends Computer {
    constructor(ram, power, name, screen, battery) {
        super(ram, power, name);
        this.screen = screen;
        this.battery = Math.round(this.power / (this.screen * this.ram));
    }
}





class UltraLapTop extends LapTop {
    constructor(ram, power, name, screen, weight) {
        super(ram, power, name, screen);
        this.weight = weight;
    }

    commutator(toggle = false) {
        if (toggle === true && this.weight > 2 && this.battery < 4) {
            console.log('Error');
        } else {
            console.log('Working well');
        }
    }
}




class BasicPC extends Computer {
    constructor(ram, power, name, fps) {
        super(ram, power, name);
        this.fps = Math.round(this.power / this.ram);
    }

    game(nameGame = 'game') {
        this.ram < 4 || this.power < 400 ?
            console.log(`Sorry,your PC doesn't maintain ${nameGame}`) :
            console.log(`You're playing ${nameGame} with ${this.fps} FPS`);
    };

    encrease() {
        this.power += this.power * 0.1;
        this.ram *= 2;
    }
}





class GamePC extends BasicPC {
    constructor(ram, power, name, fps) {
        super(ram, power, name, fps);
        this.fps *= 2;
    }

    game(nameGame = 'game') {
        this.power += this.power * 0.01;
        this.power < 500 || this.ram < 8 ?
            console.log(`This bucket can't maintain ${nameGame}`):
            console.log('Welcome to the game');
    }
}



const sumsung = new Computer(4, 1500, 'sumsung');
const lenovo = new Computer(2, 300, 'lenovo');
const asus = new LapTop(8, 650, 'Asus', 14);
const acer = new LapTop(8, 750, 'Acer', 15,);
const newBasicPC = new BasicPC(6, 400, 'Sumsung');
const ultraMac = new UltraLapTop(16, 800, 'Mac', 14, 3);
const newGamePC = new GamePC(8,250,'Acer');


sumsung.commutator(true);
sumsung.commutator();
console.log(sumsung);
console.log(lenovo);


console.log(asus);
console.log(acer);


console.log(newBasicPC);
newBasicPC.game('CS Go');
newBasicPC.encrease();


console.log(newBasicPC);
ultraMac.commutator();
console.log(ultraMac);



console.log(newGamePC);
newGamePC.game('GTS 5');

