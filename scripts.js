//if statement example

// code follows this format


  //  block of code to be executed if the condition is true


let color = 'blue';

if(color = 'red'){
  console.log('I love red');
} { if
    (color != 'red');
console.log('I do not like red')
  }

  let temperature = 100;

  if(temperature >= 75);
    console.log('isHotOutside');

  if(temperature <= 75)
    console.log('isColdOutside');


// else or if-else statements

//code follows this format

//if (condition) {
  //  block of code to be executed if the condition is true
//} else {
  //  block of code to be executed if the condition is false
//}

  let desert = 'chocolate';

  if(desert == 'chocolate'){
    console.log('Yay!');
  } else {
    console.log('its ok');
  }

  let fruit = 'no seeds';
  
  if(fruit == 'has seeds'){
      console.log('This is a fruit');
  } else {
      console.log('Not a fruit');
  }

  let petName = 'Kona';

    if(petName == 'Onyx'){
        console.log('This is my pet');

    } else if(petName != 'Onyx');{
        console.log('This is not my pet')
    }

    let myCar = 'Chevrolet Avalanche';

    if(myCar == 'Toyota Sequoia'){
        console.log('This is my car');

    } else if(myCar != 'Toyota Sequoia'){
    console.log('This is not my car');
    }

    //for loop

    //creating a multiplication table

    let num = 1;

    for(var i = 0; i<=10; i++) {
      console.log(num +" x " + i + " = " + (num * i));
    }
    for (let i = 0; i <= 100; i++) {
      console.log("i");
    }

    //creating a for loop that prints 1-100 and prints "foo" if a number is even

    for(var i = 1; i <= 100; i++)
      if (i % 2 === 0){
          console.log(i + " foo")
      }

      //Write a for loop that prints every third number from 0 up to, and including, 99.
      for(var i = 0; i <= 99; i++){
        if(i % 3 === 0){
            console.log(i)
        }
    }

    //Create a do/while loop that will print the userNumber and then add 6 after each loop. Stop the loop once the number is greater than or equal to 100.

    let userNumber = 1;
    do {
      console.log(userNumber);
      userNumber = userNumber + 6;
  } while(userNumber <= 100);

  //Using the supplied variables, create a loop of your choice that will add cups of rice to a bowl.

  let currentCupsOfRice = 1;
  let requiredCupsOfRice = 1;

  while(currentCupsOfRice != requiredCupsOfRice){
    console.log('The bowl contains ' + (++currentCupsOfRice) + ' cups of rice.');
}
console.log('We have enough rice!');

//Write a for loop that prints the numbers 0 to x. The x has been initialized for you and will be based on a user's input.

let x = 1;

for ( var i = 0; i <= x; ++i ) {
  console.log(i);
}

//Creating a game

let points = 1;

for(var i = 0; i < 100 && points < 290; i++)
  if(points == 125 && pointsReset === false){
      points = 25;
      pointsReset = true;
  } else if(i % 2 === 0){
      points = points + 5;
  } else {
      points = points + 3;
  }
  
  console.log("Turns: " + i + " Score: " + points)

  //countdown loop

  let countdown = 5;

  if (countdown <= 10 && countdown >= 3) {
    while (countdown >= 1) {
        console.log(countdown + "...");
        countdown--;
    }
}

console.log("We have lift off!");

//loop to see if user number is between 1 and 100. If it is create while loop that prints all intergers starting with usernumber to 100

var counter = userNumber;
if ( userNumber <= 100 && userNumber >= 1 ) {
    while ( counter <= 100 ) {
        console.log(counter++);
    }
} else {
    console.log("Your number was not between 1 and 100.");
}

//example loops

//'for' loop

for (let i = 1; i <= 5; i++) {
	console.log('Hello World', i);
}

//add a 'if' statement to make a 'for if' loop

for (let i = 5; i >= 1; i--) {
  if (i % 2 !== 0) console.log(i);
}

//'while' loop

let v = 0;
while (v < 10) {
  console.log(i);
i++;
}