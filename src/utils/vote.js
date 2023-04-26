const fs = require("fs");

const registerVoter = (fName, sName, email, telNo, city) => {
  const regVoter = loadVoterDetails();

  const duplicateNote = regVoter.find((votes) => {
    return votes.email === email || votes.telephone === telNo;
  });

  if (!duplicateNote) {
    regVoter.push({
      firstName: fName,
      surname: sName,
      email: email,
      telephone: telNo,
      city: city,
    });
    saveVoters(regVoter);
  } else {
    console.log(`You have been registered to vote`);
  }

  const errorPage = "Details check";
  if (duplicateNote) return errorPage;
};

const saveVoters = (votes) => {
  const votesJSON = JSON.stringify(votes);
  fs.writeFileSync("votes.json", votesJSON);
};

const loadVoterDetails = function () {
  try {
    const dataBuffer = fs.readFileSync("votes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  registerVoter: registerVoter,
};
