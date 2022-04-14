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
let tankFull = false;

function enoughSeats() {
  console.log('in enoughSeats');
  if (seatsInCar >= passengers.length){
    return true;
  } else {
    return false;
  }
}

function getInCar(newPassenger) {
  console.log('in getInCar', nameOfPassenger);
  passengers.push(nameOfPassenger);
  return passengers;
}
getInCar('you');
getInCar('Cats');
getInCar('Sister');
getInCar('Jacques');
getInCar('mike');
getInCar('james');

enoughSeats();









