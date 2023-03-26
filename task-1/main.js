const celebs = [ //existing code from line 1-12
  "David Beckham",
  "Cher",
  "Madonna",
  "Tom Petty",
  "Cristiano Ronaldo",
  "Whoopi Goldberg",
  "Samuel L Jackson",
  "Angelina Jolie",
  "Richard Osman",
  "Emma Thompson"
];

// TASK 1.1 Write a function called `makeLegend`, which takes in a `name`(string) as its only argument
function makeLegend(name) {
  return `${name} is a legend`;
}
/* The function should return a new string which includes the name plus the words `' is now a legend.'`. */
console.log(makeLegend("Chris"));

/* TASK 1.2 Using the `makeLegend` function, the `celebs` array and a `for` loop, create a new array which includes `
' is now a legend.'` for each celebrity. Save this new 
array to the variable `legendaryCelebs`.*/
legendaryCelebs = [];
for (let i = 0; i < celebs.length; i++) {
  legendaryCelebs.push(makeLegend(celebs[i]));
}
console.log(legendaryCelebs); //console log checks it it works

/* TASK 1.3 Use another for loop to produce a new array of all of the celebrity names which start with a vowel, and store that new array in a new variable called `vowelCelebs`.*/
vowelCelebs = [];
for (let i = 0; i < celebs.length; i++) { //copied from above
  if (    //if the first letter of the name is a vowel
    celebs[i][0] === "A" || 
    celebs[i][0] === "E" ||
    celebs[i][0] === "I" ||
    celebs[i][0] === "O" ||
    celebs[i][0] === "U"
  ) { vowelCelebs.push(celebs[i]);}
}
console.log(vowelCelebs); //console log checks it it works
/* TASK 2.1 👉 In the task-2 index.html, there is a p tag (with an id of count) that displays a count. Ensure the count displays 0 when the page loads and then, using setInterval, have it increment by 1 every second. */