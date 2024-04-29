let listOfNumbers = [2, 3, 5, 6, 12, 26];
console.log(listOfNumbers[4]);
console.log(listOfNumbers.length);
listOfNumbers.push(29); //Adds item the end of the array
listOfNumbers.pop(); //Removes last item
console.log(listOfNumbers);


let name = 'Claris';
console.log(typeof name.toUpperCase);
console.log(name.toUpperCase());

/*The delete operator 
removes items from an object.
 The binary in operator, 
  applied to a string and an
   object, tells
you whether that object has a 
property with that name.*/
//delete person1.month;

//To find out what properties an object has the Object.keys
let person1 =  {
    lastName: 'Foncha',
    firstName: 'Claris',
    Active: true,
    month: 'Jan',
    Age: 24,
    education: true,
}
person1.activity = 'reading';
console.log(person1);
console.log(person1.Age);
console.log(person1['Jan']);
/*console.log(person1.lastName.toUpperCase);
Trying to select an object property and apply the
toUpperCase method*/
console.log(person1.lastName.toUpperCase());
console.log(person1.Age);
console.log(person1.length);// Can't use the .lenght ptt

/* The binary in operator,
 when applied to a string 
 and an object, tells
you whether that object 
has a property with that name.*/
console.log('Age' in person1);
/*Remember to use 
the property name not its value*/

console.log(Object.keys({
    lastName: 'Foncha',
    firstName: 'Claris',
    Active: true,
    month: 'Jan',
    Age: 24,
    education: true,
}));


/*Object.assign function copies
 all properties 
 from one object into another*/
 