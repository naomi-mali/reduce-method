  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
// acc=accumulator curr=current value
const nums = [1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => {
  console.log(
  "Accumulator:", acc,
  "Current Value:", curr,
  "Total:", acc + curr
); 
return acc + curr;
});


console.log(sum);


const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Man',
    profession: 'manager',
    yrsExperience: 31
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience);

// Grouping by a property, and totaling it too
let experienceByProfession = teamMembers.reduce((acc, curr) => {
let key = curr.profession;
if (!acc[key]) {
  acc[key] = curr.yrsExperience;
} else {
  acc[key] += curr.yrsExperience;
}
return acc;
}, {});
console.log(experienceByProfession);