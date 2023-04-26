// const request = require("request");
const votingForm = document.querySelector(".card-form");
const firstName = document.querySelector("#firstName");
const surname = document.querySelector("#surname");
const email = document.querySelector("#email");
const telephone = document.querySelector("#telephone");
const city = document.querySelector("#city");

const clearfield = () => {
  firstName.value = "";
  surname.value = "";
  email.value = "";
  telephone.value = "";
  city.value = "";
};

votingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const first = firstName.value;
  const sname = surname.value;
  const mail = email.value;
  const telNo = telephone.value;
  const location = city.value;

  fetch(
    `http://localhost:3000/register?first=${first}&surname=${sname}&email=${mail}&tel=${telNo}&city=${location}`
  ).then((response) => {
    console.log(response.url);
  });

  clearfield();
  //   search.value = "";
});
