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

  event.target.reset();
}

const createListOfPeopleItem = function (form) {
  const readingListOfPeople = document.createElement('li');
  readingListOfPeople.classList.add('form-result-item');

  const first_name = document.createElement('h2');
  first_name.textContent = form.first_name.value;
  readingListOfPeople.appendChild(first_name);

  const house_name = document.createElement('h3');
  house_name.textContent = form.house_name.value;
  readingListOfPeople.appendChild(house_name);

  const role_title = document.createElement('h4');
  role_title.textContent = form.role_title.value;
  readingListOfPeople.appendChild(role_title);

  return readingListOfPeople;
}

const handleDeleteAllClick = function (event) {
  const readingListOfPeople = document.querySelector('#form-result');
  readingListOfPeople.innerHTML = '';
}
