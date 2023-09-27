
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

// Goal: filter people that are 18 or older
const adults = people.filter(person => person.age >= 18);
console.log(adults);

// Goal: filter people that have names longer than 5 letters
const longNames = people.filter(person => person.name.length > 5);
console.log(longNames);

// Goal: filter out Paul (/his object)
const paul = people.filter(p => p.name === 'Paul')[0]; // since argument name is arbitrary, using p since it's shorter
console.log(paul);


// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

// Goal: filter out job candidates who have at least 5 years of experience in at least one skill

// My solution:
const fiveYearsPlus = function (student) {
  let candidate = false;

  for (let skill of student.skills) {
    if (skill.yrsExperience >= 5) {
      candidate = true;
    }
  }

  return candidate;
}

let candidates = students.filter(student => fiveYearsPlus(student) === true);
console.log("\nCandidates, a:");
console.log(candidates);

// Instructor "inline" solution:
const candidates1 = students.filter(student => {
  let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);

  return strongSkills.length > 0;
})
console.log("\nCandidates, b:");
console.log(candidates1);

// Refinement of my solution based on above:
const fiveYearsPlus1 = function (student) {
  for (let skill of student.skills) {
    if (skill.yrsExperience >= 5) {
      return true;
    }
  }
}

let candidates2 = students.filter(student => fiveYearsPlus1(student));
console.log("\nCandidates, c:");
console.log(candidates2);

// Instructor separated functions solution:
const has5yearsExp = skill => skill.yrsExperience >= 5;
const hasStrongSkills = student => student.skills.filter(has5yearsExp).length > 0;

const candidates3 = students.filter(hasStrongSkills);
console.log("\nCandidates, d:");
console.log(candidates3);

// ...and simplified output:
const names = candidates3.map(c => c.name);
console.log(names);
