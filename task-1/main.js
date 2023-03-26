const celebs = [
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

//Write a function called `makeLegend`, which takes in a `name`(string) as its only argument
function makeLegend(name) {
  return `${name} is a legend`;
}
/* The function should return a new string which includes the name plus the 
words `' is now a legend.'`. For example, if the function was called with the
 name `'Chris'`, it should return the string `'Chris is now a legend.'`*/
console.log(makeLegend("Chris"));

/* Using the `makeLegend` function, the `celebs` array 
and a `for` loop, create a new array which includes `
' is now a legend.'` for each celebrity. Save this new 
array to the variable `legendaryCelebs`.*/


