// Question 1:
/* Using forEach log out each of my friends
 but with their name all lower-cased. 
 Use the <str>.toLowerCase() method. */
console.log('Question 1 solution: \n');
const friends = ["Melissa", "Marc", "Andrew", "Nick"];

friends.forEach(function(friend) {
  console.log("I have a friend named " + friend.toLowerCase());
});

//Question 2:
/* Create an array that has the numbers of
the array numbers squared*/
console.log('Question 2 solution: \n');
const numbers = [1, 5, 8]; // numbersSquared --> [1, 25, 64]
const numSquared= numbers.map(function(num){
    return num*num;
});
// test the result
console.log(numSquared);

//Bonus Question 2:
/* Use an arrow function inside map() */
console.log('Question 2 bonus solution: \n');
const instructors = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"];
const instructorsArray= instructors.map(item => console.log(item));

//Question 3:
/* Use map to create a new array that adds the string 
"is awesome" to each element in the array. */
console.log('Question 3 solution: \n');

const awesomeInstructors= instructors.map(function(item){
    return item + ' is awesome';
});
// test the result
console.log(awesomeInstructors);

//Question 4:
/* Given the array nums try to count the number of even 
numbers using reduce() and put it in the variable evenNumbers: */
console.log('Question 4 solution: \n');

const nums = [25, 6, 100, 3];
let counter=0;
let evenNumbers=[];
let evenNumber = nums.reduce(function(acc, num) {
    if(num%2 ==0){
        counter++;
        evenNumbers.push(num);
    }
  return acc;
}, 0);
// test the result
console.log(counter);
console.log(evenNumbers);


//Question 5:
console.log('Question 5 solution:');
const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];

const jerks = people.filter(function(person){
    if (person=='jerks'){
        return person;
    }
});
//test the result
console.log(jerks);

// Arrow Methods
console.log('Arrow Methods solution (part1): \n');
/* 1. Create a function to get the average of a group of numbers avg([8, 2, 2, 4])
should return 4
 */
const avg = (numArray) => numArray.reduce((preVal,currentVal) => preVal+currentVal ,0)/ numArray.length;
//test the result
console.log(avg([8, 2, 2, 4]));

/* 2. Create a function to reverse the letters in a word reverse("caterpillar") // should return "rallipretac" */
console.log('Arrow Methods solution (part2): \n');

const reverse= (word) => word.split('').reverse('').join('');
// test the result
console.log(reverse('caterpillar'));


// Objects Exercise: The Movie Database
/* Create an object to store the following information about your favorite movie:
title (a string), duration (a number), and stars (an array of strings).
Print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes.
Stars: Puff, Jackie, Living Sneezes." Maybe the join method will be helpful here*/
console.log('Objects Exercise solution: \n');
const Movie = function(title, duration, stars){
    const obj={};
    obj.title=title;
    obj.duration=duration;
    obj.stars=[];
    this.information = function(){
        console.log(`${obj.title} lasts for ${obj.duration} minutes. Stars:  ${stars.join(', ')}.`);
 return obj;

}
}
let movie1= new Movie('Puff the Magic Dragon', 30, ['Puff', 'Jackie', 'Living Sneezes']);

movie1.information();