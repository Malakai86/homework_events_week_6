
const handleFormSubmit = function (event) {
  event.preventDefault();
  const resultParagraph = document.querySelector('#form-result');

  const firstName = event.target.first_name.value;
  const houseName = event.target.house_name.value;
  const roleTitle = event.target.role_title.value;

  resultParagraph.textContent = `${firstName} ${houseName} ${roleTitle}`;
}

document.addEventListener('DOMContentLoaded', () => {
  const personForm = document.querySelector('#person-form');
  personForm.addEventListener('submit', handleFormSubmit);
});
