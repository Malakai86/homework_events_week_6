document.addEventListener('DOMContentLoaded', () => {
  const personForm = document.querySelector('#person-form');
  personForm.addEventListener('submit', handleFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})


const handleFormSubmit = function (event) {
  event.preventDefault();

  const readingListOfPeople = createListOfPeopleItem(event.target);
  const peopleList = document.querySelector('#form-result');
  peopleList.appendChild(readingListOfPeople);

  const form = event.target;


  event.target.reset();
}

const createListOfPeopleItem = function (form) {
  const readingListOfPeople = document.createElement('li');
  readingListOfPeople.classList.add('form-result-item');

  const first_name = document.createElement('p');
  first_name.textContent = 'Hello I am ' + form.first_name.value + '.';
  readingListOfPeople.appendChild(first_name);


  const house_name = document.createElement('p');
  house_name.textContent = 'I am born of the great house ' + form.house_name.value + '.';
  readingListOfPeople.appendChild(house_name);

  const role_title = document.createElement('p');
  role_title.textContent = 'My trade is ' + form.role_title.value + '.';
  readingListOfPeople.appendChild(role_title);

  const chara_type = document.createElement('p');
  chara_type.textContent = 'People believe me to be ' + form.chara_type.value + '.';
  readingListOfPeople.appendChild(chara_type);



  return readingListOfPeople;
}

const handleDeleteAllClick = function (event) {
  const readingListOfPeople = document.querySelector('#form-result');
  readingListOfPeople.innerHTML = '';
}
