// Створити обєкт імен з їхніми айді
//

const names = ['Igor', 'Solomia', 'Ruslan', 'Natalia'];

function idNames(arr, index = 0, obj = {}) {
    if (index < arr.length) {
        obj[`id:${index}`] = arr[index];
        return idNames(arr, ++index, obj)
    }
    return obj;
}

const namesWithId = idNames(names);
console.log(namesWithId);

// Cтворити meeting

const workingDays = [
    {day: 'Monday', from: 10, to: 20},
    {day: 'Tuesday', from: 11, to: 21},
    {day: 'Wednesday', from: 9, to: 19},
    {day: 'Thursday', from: 10, to: 20},
    {day: 'Friday', from: 10, to: 20}
];

console.log(workingDays[0].from);

const day = 'Tuesday';
const time = 11;
const wD = 0;
const from = 0;
const to = 23;


function meeting(arr, workingDay, currentTime, dayOfTheWeek) {
    if (arr[workingDay].day === dayOfTheWeek && arr[workingDay].from <= currentTime && arr[workingDay].to >= currentTime) {
        return arr[workingDay];
    }
    // if (arr[workingDay].from <= currentTime && arr[workingDay].to >= currentTime) {
    //     return arr[workingDay];
    // }
    return meeting(arr, ++workingDay, currentTime, dayOfTheWeek);
}


const gt = meeting(workingDays, wD, time, day);
console.log(gt);


