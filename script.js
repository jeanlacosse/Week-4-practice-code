// function actualMath(num0, num1){
//   console.log('in actualMath', num0, num1)
//   let answer = num0 * num1;
//   return answer;
// }

// function logger() {
//   console.log('in logger');
// } // end logger

// // good practice to do functions in alphabetical order

// function mathExample(){
//   console.log('in mathExample');
//   let answer = 3 * 9;
//   return answer;
// }

// function returner() {
//   console.log('in returner');
//   return true;
// }

// logger();
// console.log('running returner', returner());
// console.log('running mathExample', mathExample());
// console.log('running actualMath', actualMath(4, 6));
// console.log('running actualMath', actualMath(.68, 525));
// // ^ using two numbers as arguments in the actualMath function. These get computed into the function when called.

// // below practice functions
// function practice(a, b, c, d){
//   let answer = a * b + c / d;
//   return answer;
// }
// console.log('run practice', practice(1,2,3,4));
// console.log('run practice', practice(14,9,8,6));
// // practice is computed using classic order of operations

// // Weeks 1-4 review project

const seatsInCar = 5;
let passengers = [];
let tankFull = true;

function enoughSeats() {
  console.log('in enoughSeats');
  if (seatsInCar >= passengers.length){
    return true;
  } else {
    return false;
  }
}

function getInCar(nameOfPassenger) {
  console.log('in getInCar', nameOfPassenger);
  passengers.push(nameOfPassenger);
  return passengers;
}

function readyForTrip(){
  console.log('in readyForTrip')
  if(enoughSeats() && tankFull){
    return true;
  } else {
    return false;
  }
}
getInCar('you');
getInCar('Cats');
getInCar('Sister');
getInCar('Jacques');

console.log('Enough seats?', enoughSeats());

console.log('Are we ready for trip?', readyForTrip());
// using console.log on the function will show what is returned ie: true or false. It will not show this is I only call the function w/o using console.log


let fern = false;
let monstera = true;
let norfolkPine = true;
let begonia = false;

function waterPlant(plantName){
  if (plantName === true){
    console.log('No need to water');
  } else {
    console.log('Time to water')
  }
}

waterPlant(fern);

// above is slack question week 4











