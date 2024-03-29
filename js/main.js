
// Arrays - are the data structures in javascript!
// they're like a shelf which is used to store items***
//const myArray = [];

/* we can't re-assign arrays, 
you might guess because I'm using const
however we can re-assign elements or items 
inside of an array! they are mutable***/
// add elements to an array!
/*
myArray[0] = "Dude";
myArray[1] = 3000;
myArray[2] = true;
// refer to an array
console.log(myArray);
// length property
console.log(myArray.length);
// last item or element in an array
console.log(myArray[myArray.length - 1]);
// any one element in an array!
console.log(myArray[1]);
*/
//////////////////////////////////////////////////////////////////////////////
/*
const myArray = [];
myArray[0] = "Dude";
myArray[1] = 3000;
myArray[2] = true;

// so how to add more elements to an array?
myArray.push("xian");
// so this method adds the element to the end position
console.log(myArray);
// how to remove element from an array
myArray.pop();
// and this method removes element from end position
console.log(myArray);
// how to add element in front position?
myArray.unshift("tzu");
console.log(myArray);
// how to remove element from front position?
myArray.shift();
console.log(myArray);
*/
/* so here's an important note about these methods
if we add or remove element in the *end*, it won't change 
the order of positions of elements. however when we
we add or remove element in the front, it will change the
order of postions of elements*** */
/////////////////////////////////////////////////
/* ***PROOF***
 so let's check that out! if element 3000 is still at
position 1 */
/*
const myArray = [];
myArray[0] = "Dude";
myArray[1] = 3000;
myArray[2] = true;

myArray.shift();
console.log(myArray);
console.log(myArray[1]);
*/
// so 3000 is not in the 1 position 
// the order of positions of elements is changed!!!

/* what if i enter the position in which element is not
available anymore? */
//console.log(myArray[2]);
// we got undifined !!!

/////////////////////////////////////////////////////////
/* the pop and shift methods returns the value that it removed
from an array, which can be stored in a variable ***/
/*
const myArray = [];
myArray[0] = "Dude";
myArray[1] = 3000;
myArray[2] = true;

let lastElement = myArray.pop();
console.log(myArray);
console.log(lastElement);

let firstElement = myArray.shift();
console.log(myArray);
console.log(firstElement);
*/
/////////////////////////////////////////////////////////////
/* similarly push and unshift methods will just return
the length of that array */
//////////////////////////////////////////////////////////////////////////////
/* how to delete or remove element from
 middle of an array? */
 /*
let myArray = [];
myArray[0] = "Xian";
myArray[1] = 100;
myArray[2] = false;
// so there are several ways!
/* the one way which exists that do not recomend to
use **/
//delete myArray[1];
//console.log(myArray);
/* this method kinda removes the element but
it still has an 'empty' which is an undefined data
type and it still holds that position **/
//console.log(myArray[1]);
////////////////////////////////////////////////////////////
// so the best to do it 
/*
let myArray = [];
myArray[0] = "Xian";
myArray[1] = 100;
myArray[2] = false;
*/
// use the splice method!
// syntax!
//myArray.splice(index, number of elements, replace)
//myArray.splice(0,1);
//console.log(myArray);

// also we can replace element with this method!
//myArray.splice(1,1,"tzu");
//console.log(myArray);
/*** incase if you don't replace just put zero 
 at 'number of positions' and then put whatever 
 you wanna add ***/ 
//myArray.splice(2,0,"master of triple styles!")
//console.log(myArray);


///////////////////////////////////////////////////
// let's have a look at some methods!!!
//let myArray = ["A","B","C","D","E","F"];
/* slice method = which creates a sub-array */
// syntax
//myArray.slice(start,stop)
//myArray.slice(2,5);
//console.log(myArray);
// oh sh!t
//const newArray = myArray.slice(2,5);
//console.log(newArray);
//////////////////////////////////////////////////
// reverse method
/*
let myArray = ["A","B","C","D","E","F"];
const newArray = myArray.reverse();
console.log(newArray);
*/
///////////////////////////////////////////////
// join method 
/* remember this method is used to create a string
from an array using it's elements!! 
not for combing two arrays*/
/*
let myArray = ["A","B","C","D","E","F"];

const newString = myArray.join();
console.log(newString);
const newArray = newString.split(",") 
// this will return an array!
console.log(newArray);
*/
////////////////////////////////////////////////
//concat method
/* this is the method used to combine two arrays
together!! */
/*
let myArrayA = ["A","B","C"];
let myArrayB = ["D","E","F"];

let myNewArray = myArrayB.concat(myArrayA);
console.log(myNewArray);
*/
/////////////////////////////////////////////////
// spread operator ( ... )
/*
let myArrayA = ["A","B","C"];
let myArrayB = ["D","E","F"];
/* this won't just combine two arrays 
it takes all the elements from arrays and 
spreads it out all individual elements in a
single array!***/
//let myNewArray = [...myArrayA,...myArrayB];
//let myNewArray = [myArrayA,myArrayB];
//console.log(myNewArray);
/////////////////////////////////////////////////////////////////////////////////////
// nested arrays!! - 2D and 3D arrays***
const equipShelfA = ["baseball","football","volleyball"];
const equipShelfB = ["basketball","golf balls","tennis balls"];

const clothesShelfA = ["tank tops","t-shirts","jerseys"];
const clothesShelfB = ["sweat tops","sweat pants","hoodies"];
// accessing 1D array 
console.log(equipShelfA[1]);
//console.log(equipShelfB[2]);
//console.log(clothesShelfA[1]);
console.log(clothesShelfB[0]);

// 2D array!
const equipDept = [equipShelfA,equipShelfB];
const clothesDept = [clothesShelfA,clothesShelfB];
// to access element from 2D array!
console.log(equipDept[0][1]);
console.log(clothesDept[1][0]);

// 3D array!
const sportsStore = [equipDept,clothesDept];
// to access element from 3D array!
console.log(sportsStore[0][0][1]);
console.log(sportsStore[1][1][0]);














































