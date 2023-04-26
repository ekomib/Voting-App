const yargs = require("yargs");
const voteFunctions = require("./src/utils/vote.js");
const { argv } = require("yargs");
const validator = require("validator");

/*
const form = document.querySelector("#vote-input");
form.addEventListener("submit", (e) => {
  const firstName = e.target.elements.firstName.value.trim();
  console.log(firstName);
  e.preventDefault();
});
*/

yargs.command({
  command: "register",
  description: "Voting registration details",
  builder: {
    firstName: {
      describe: "First Name",
      demandOption: true,
      type: "String",
    },

    surname: {
      describe: "Surname",
      demandOption: true,
      type: "string",
    },

    email: {
      describe: "Email Address",
      demandOption: true,
      type: "string",
    },

    telephoneNumber: {
      describe: "Phone Number",
      demandOption: true,
      type: Number,
    },

    city: {
      describe: "City lived in",
      demandOption: true,
      type: "string",
    },
  },

  handler(argv) {
    voteFunctions.registerVoter(
      argv.firstName,
      argv.surname,
      argv.email,
      argv.telephoneNumber,
      argv.city
    );
  },
});

yargs.parse();
