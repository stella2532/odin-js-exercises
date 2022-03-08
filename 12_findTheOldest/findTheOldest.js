const findTheOldest = function(people) {
    people.map(person => {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = (new Date()).getFullYear();
        };
        person.lifeSpan = person.yearOfDeath - person.yearOfBirth;
    });
    people.sort((a , b) => a.lifeSpan > b.lifeSpan ? -1 : 1);
    return people[0];
};

/* answer key
const findTheOldest = function(array) {
  return array.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    return oldestAge < currentAge ? currentPerson : oldest;
  })
};

const getAge = function(birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

*/

// Do not edit below this line
module.exports = findTheOldest;
