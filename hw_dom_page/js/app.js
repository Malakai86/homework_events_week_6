document.addEventListener('DOMContentLoaded', () => {
  const personForm = document.querySelector('#person-form');
  personForm.addEventListener('submit', handleFormSubmit);
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

  return readingListOfPeople
}


//
// const firstName = event.target.first_name.value;
// const houseName = event.target.house_name.value;
// const roleTitle = event.target.role_title.value;



// newListItem.textContent = `${firstName} ${houseName} ${roleTitle}`;
