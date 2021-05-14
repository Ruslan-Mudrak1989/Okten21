
const randomArrNum = [];


const randonNum = (arr, min, max, amount) => {
    for (let i = 0; i < amount; i++) {
        arr.push(Math.floor(Math.random() * (max - min)) + min);
    }
};
randonNum(randomArrNum, 0, 100, 10);
console.log(randomArrNum);



// 1) Створити масив з 20 чисел та:

let num = [1, 56, 89, 4, 7, 6, 9, 2, 11, 54, 73, 34, 43, 100, 98, 64, 18, 12, 29, 40];

// a) відсортувати його від меншого до більшого.

const sortIncrease = num.sort(((a, b) => a - b));
console.log(sortIncrease);

//     b) відсортувати його від більшого до меншого.

const sortDecrease = num.sort(((a, b) => b - a));
console.log(sortDecrease);

//     c) Відфілтрувати числа які є кратними 3.

const numMulti = num.filter((value => value % 3 === 0));
console.log(numMulti);
console.log(num);

// d) Відфілтрувати числа які є більшими за 10.


const decimal = num.filter((value => value > 10));

console.log(decimal);

// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write

// const iterNum = num.forEach((value => document.write(`${value},`)));

// f) За допомогою map збільшити кожен елемент в масиві в три рази.

const increaseForThree = num.map((value => value * 3));

console.log(increaseForThree);


//     g) Порахувати загальну суму всіх елментів у масиві (reduce)

const total = num.reduce(((acc, currentValue) => acc + currentValue), 0);

console.log(total);








// 2) Створити масив з 20 стрічок та:

const str = [
    'hello',
    'bye',
    'thanks',
    'l0l',
    'laptop',
    'go',
    'stop',
    'wow',
    'link',
    'great',
    'success',
    'string',
    'array',
    'name',
    'surname',
    'please',
    'foo',
    'pen',
    'way',
    'money'];


//     a) Відсортувати його в алфавітному порядку

const alphabeticSort = str.sort();
console.log(alphabeticSort);

// b) Відсортувати в зворотньому порядку

const decreaseAlphabeticalSort = str.sort(((a, b) => {
    if (a < b)
        return 1;
    return -1
}));

console.log(decreaseAlphabeticalSort);

// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)

const strMoreThanFour = str.filter((value => value.length >= 4));
console.log(strMoreThanFour);


// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'


// const modifiedArr = str.map((value => `Sam says: "${value}"`));
// console.log(modifiedArr);


// ALTERNATIVE


// str.forEach((value, i, array) => array[i] = `Sam says: ${value}`);
// console.log(str);


// 3) Все робити тільки за допомогою методів масивів!







const users = [
    {name: 'vasya', age: 31, isMarried: false},
    {name: 'petya', age: 30, isMarried: true},
    {name: 'kolya', age: 29, isMarried: true},
    {name: 'olya', age: 28, isMarried: false},
    {name: 'max', age: 30, isMarried: true},
    {name: 'anya', age: 31, isMarried: false},
    {name: 'oleg', age: 28, isMarried: false},
    {name: 'andrey', age: 29, isMarried: true},
    {name: 'masha', age: 30, isMarried: true},
    {name: 'olya', age: 31, isMarried: false},
    {name: 'max', age: 31, isMarried: true}
];

const jsonStringUsers = JSON.stringify(users);
console.log(jsonStringUsers);
const cloneUsers = JSON.parse(jsonStringUsers);
console.log(cloneUsers);


// a) відсортувати його за  віком (зростання , а потім окремо спадання)

const increaseSortAge = users.sort((a, b) => a.age - b.age);
console.log(increaseSortAge);


const decreaseSortAge = users.sort(((a, b) => b.age - a.age));
console.log(decreaseSortAge);

// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

const nameLengthUp = users.sort(((a, b) => a.name.length - b.name.length));
console.log(nameLengthUp);

const nameLengthDown = users.sort(((a, b) => b.name.length - a.name.length));
console.log(nameLengthDown);


// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)

// const usersId = users.map(((value, index) => ({id: index + 1, ...value})));
//
// console.log(usersId);
// console.log(users);


// ALTERNATIVE

const id = cloneUsers.map((value, index) => value.id = index + 1);

console.log(cloneUsers);
console.log(users);



// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)

const usersFlat = cloneUsers.reduceRight((acc, currentValue) => {
    if (currentValue.isMarried){
       currentValue.flat = true;
       acc.push(currentValue);
    }
    return acc;
} ,[]);
console.log(usersFlat);

