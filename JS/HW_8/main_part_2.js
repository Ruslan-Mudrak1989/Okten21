// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (
// в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории
// (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

const btnSave = document.getElementById('save');
const btnForward = document.getElementById('forward');
const btnBack = document.getElementById('back');
const article = document.getElementById('article');
let store = 'infoStory';
let num = 0;


if (!localStorage.getItem(store)) {
    localStorage.setItem(store, JSON.stringify([]));
}


btnSave.onclick = () => {
    let emptyArr = localStorage.getItem(store);
    let story = JSON.parse(emptyArr);
    story.push(article.value);
    localStorage.setItem(store, JSON.stringify(story));
};

btnBack.onclick = () => {
  let storedStory = localStorage.getItem(store);
  let parsedStory = JSON.parse(storedStory);
  if (!num){
      num = parsedStory.length-1;
  } else {
      num--;
  }
  article.value = parsedStory[num];
};

btnForward.onclick = () => {
   let storedStory = localStorage.getItem(store);
    let parsedStory = JSON.parse(storedStory);
    if (num === parsedStory.length-1){
        num = 0;
    } else {
        num++;
    }
    article.value = parsedStory[num];
};


// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования,
// которые уже заполнены данными объекта