function add(a, b) {
  // add the two arguments and return the sum
  return a + b;
}

function multiply() {
  // this function is passed 4 parameters
  // multiply them and return the result
  const result = [...arguments].reduce((acc, item) => {
    return acc * item;
  }, 1);

  return result;
}

function average() {
  // this function is passed 5 heights in meters
  // calculate their average and return it
  const result = [...arguments].reduce((acc, item) => {
    return (acc += item);
  }, 0);

  return result / arguments.length;
}

function remainder(a, b) {
  // this function is passed 2 arguments
  // return the remainder of first
  // argument when divided by the second
  const result = a % b;
  return result;
}

function exponential(a, b) {
  // this function is passed 2 arguments
  // return first argument to the power of second argument
  // hint: you may need to look up the exponention operator
  const result = a ** b;
  return result;
}

function laxEquality(a, b) {
  // this function is passed 2 arguments
  // return true if they are equal but not strictly equal
  const result = a == b && a !== b;
  return result;
}

function strictEqual(a, b, c) {
  // function is passed 3 arguments
  // return true if they are all strictly equal and false otherwise
  const result = a === b && a === c;
  return result;
}

function smaller(a, b) {
  // this function is passed 2 arguments
  // return true if second argument is
  // greater than or equal to first, otherwise return string 'smaller'
  const result = a <= b ? true : "smaller";
  return result;
}

function isDivisibleBy(divider1, divider2, number) {
  // if number is divisible by divider1 or divider2 return true or false otherwise
  // do not use if/else or ternary
  const result = number % divider1 === 0 || number % divider2 === 0;
  return result;
}

function evens(a, b, c, d) {
  // this function is passed 4 numbers
  // return true if all numbers are even or false otherwise
  // do not use if/else or ternary
  return a % 2 === 0 && b % 2 === 0 && c % 2 === 0 && d % 2 === 0;
}

function removeMiddle(words) {
  // words is an array which contains an odd number of strings
  // return a new array containing only the middle word
  // the words array should no longer contain the middle word
  // hint: splice
  const halfWay = (words.length - 1) / 2;
  const result = words.splice(halfWay, 1);
  return result;
}

function get2ndAnd3rd(myArray) {
  // myArray is an array of numbers
  // return an array containing the 2nd and 3rd items from myArray
  // myArray should remain unchanged
  // hint: slice
  const result = myArray.slice(1, 3);
  return result;
}

function mapper(myArray) {
  // myArray is an array of numbers
  // return a new array which has all items in myArray incremented by one
  // myArray should remain unchanged
  const result = myArray.map(x => x + 1);
  return result;
}

function wordLengths(words) {
  // words is an array of strings
  // return a new array that contains the number of letters in each word
  // for example
  // input:
  // [ 'jupiter', 'mars', 'saturn' ]
  // output:
  // [ 7, 4, 6]
  return words.reduce((acc, item) => {
    return [...acc, item.length];
  }, []);
}

function cities(capitals, formatter) {
  // capitals is an array of objects that have a city and country property
  // for example
  // {
  //   city: 'Paris',
  //   country: 'France'
  // }
  // formatter is a callback function provided for you which
  // transforms a capital object into a sentence returns it such as
  // 'Paris is the capital of France'.
  // Apply formatter to each object in capitals array and
  // return an array of resulting sentences
  return capitals.map((city) => formatter(city))
};

function largerThanTen(numbers) {
  // numbers is an array of numbers
  // return a new array that contains only numbers
  // from the input array which are greater than 10
  return numbers.reduce((acc, item) => {
    // const question = item > 10;
    // if (question) {
    //   return [...acc, item];
    // }
    // return acc;
    return item > 10 ? [...acc, item] : acc;
  }, []);
}

// function even(numbers) {
//   // numbers is an array of numbers
//   // return a new array that contains only even numbers from the input array
//   return numbers.reduce((acc, item) =>  {
//     const question = item % 2 === 0;
//       if (question) {
//         acc.push(item)
//         return acc;
//       }
//     return acc;
//   }, []);
// }

function even(numbers) {
  // numbers is an array of numbers
  // return a new array that contains only even numbers from the input array
  return numbers.reduce((acc, item) =>
    item % 2 === 0 ? [...acc, item] : acc
  , []);
}

function findTheNeedle(words) {
  // words is an array of words
  // return the index of the word 'needle'
  return words.findIndex(word => word === "needle");
}

function findLargest(numbers) {
  // numbers is an array of numbers
  // return the largest number from that array
  return Math.max(...numbers);
}

function addAllnumbers(numbers) {
  // numbers is an array of numbers
  // return the sum of all the numbers in the array
  return numbers.reduce((acc, item) => {
    return acc += item;
  }, 0)
}

function averages(things) {
  // things is an array of numbers and strings
  // return the average of all the numbers
  // be sure to exclude the strings
  const filteredItems = things.filter(item => typeof item === "number");

  const total = filteredItems
    .reduce((acc, item, current, source) => {
      const result = acc += item;
      return result;
    }, 0);
  return total / filteredItems.length;
}

function sortingStrings(strings) {
  // strings is an array of strings
  // sort them in alphabetical order and return the sorted array
  return strings.sort();
}

function sortingNumbers(numbers) {
  // things is an array of sortingStrings
  // sort them in ascending order and return the sorted array
  return numbers.sort((a, b) => a-b);
}

function sortingNumbersDescending(numbers) {
  // things is an array of sortingStrings
  // sort them in descending order and return the sorted array
  return numbers.sort((a, b) => b-a);
}

function sortingCars(cars) {
  // a car object has a make, model, year. For example
  // const car = {
  //   make: 'Ford',
  //   model: 'Fiesta',
  //   year: 1994
  // }
  //
  // cars is an array of car objects. Sort them ascending by year and return
  // the sorted array.
  return cars.slice().sort((a, b) =>  {
    return a.year - b.year;
  })
}

function deleteColour(car) {
  // car is an object with properties make, model and color. For example
  // {
  //   make: 'Ford',
  //   model: 'Fiesta',
  //   color: 'red'
  // }
  // delete the property colour and return car without this property
  delete car.color;
  return car;
}

function paintShop(cars, colour) {
  // cars is an array of objects that have
  // their properties are `make`, `model` and `colour`
  // for example
  // {
  //   make: 'Ford',
  //   model: 'Fiesta',
  //   color: 'red'
  // }
  // set the colour of each Ford car to be the colour
  // passed in and return the new array
  // the original array passed in should not change
  // hint: look up 'Cloning objects in JavaScript'
  return cars.map(item => {
      if (item.make === "Ford") {
        // return Object.assign({}, item, {colour})
        return {...item, colour};
      }
    return item;
  });
}

function secondLargest(numbers) {
  // numbers is an array of numbers
  // return the index of the second
  // largest number in the array
  const sortedList = numbers.slice().sort((a, b) => a-b)
  const secondLargest = sortedList[sortedList.length-2]
    return numbers.indexOf(secondLargest);
}

function addSales(city, sales) {
  // Argument city is a string containing city name
  // Argument sales is a integer containing the sales
  // for that location

  // We have object containing sales
  const globalSales = {
    london: 200,
    paris: 300,
    berlin: 150,
    madrid: 400
  };

  // If city already exists in object, add sales figure
  // to its total. If city does not exist, create a new
  // property and save the sales figure as its value.

  // return the updated globalSales object
  // const newCity =
  if (globalSales[city]) {
    globalSales[city] = globalSales[city]+sales;
  }
  else {
    globalSales[city] = sales;
  }
  return {...globalSales};
}

function totalSales(sales) {
  // You are passed a sales object similar to the one
  // in the previous exercise. Add up all the sales figures
  // and return the total.
  // Hint: look up how to get the values of an object
  // Object.keys(sales).map(x => console.log(sales[x]))
  return Object.values(sales).reduce((acc, item) => {
    return acc += item;
  }, 0);
}

function walletSum(wallet) {
  // A wallet object has keys which are the denominations
  // and values which are the number of those notes in the
  // wallet. See example below.
  //
  // const exampleWallet = {
  //   5: 3,
  //   10: 7,
  //   20: 2
  // };
  //
  // calculate the sum of money in the wallet and return
  // the total.
  // the denominations used in this exercise are 5, 10 and 20
  return Object.keys(wallet).reduce((acc, note) => {
    const quantity = wallet[note]
    const total = note * quantity;
    return acc += total;
  }, 0);
}

function walletMerge(wallet1, wallet2) {
  // return a new wallet object containing the contents of
  // both wallets passed in.
  // the denominations used in this exercise are 5, 10 and 20
  return Object.keys(wallet1).reduce((acc, note) => {
    const walletContents = wallet1[note] + wallet2[note];
    acc[note] = walletContents;
    return acc;
  }, {});
}

function arrayOfWallets(wallets) {
  // wallets is an array of wallets
  // Return a new wallet object containing the notes from all wallets
  // the denominations used in this exercise are 5, 10 and 20
  const allWallets = wallets.map(wallet => {
    const currentWallet = Object.keys(wallet).reduce((acc, note) => {
      const currentQuantity = wallet[note];
      acc[note] = wallet[note];
      return {...acc};
    }, {});
    return {...allWallets, currentWallet};
  })
  return allWallets;
}

function crazyMoney(wallets) {
  // In previous exercises the notes denominations were
  // limited to 5, 10 and 20. We now have wallets that
  // can have notes of any denomination. Implement a function
  // which accepts an array of random sized notes and
  // calculate the total amount of money in them.
  // Hint: look up how to get keys of objects. You may also need
  // to use square bracket notation to look up values which
  // correspond to those keys
}

module.exports = {
  add,
  multiply,
  average,
  remainder,
  exponential,
  laxEquality,
  strictEqual,
  smaller,
  isDivisibleBy,
  evens,
  removeMiddle,
  get2ndAnd3rd,
  mapper,
  wordLengths,
  cities,
  largerThanTen,
  even,
  findTheNeedle,
  findLargest,
  addAllnumbers,
  averages,
  sortingStrings,
  sortingNumbers,
  sortingNumbersDescending,
  sortingCars,
  deleteColour,
  paintShop,
  secondLargest,
  addSales,
  totalSales,
  walletSum,
  walletMerge,
  arrayOfWallets,
  crazyMoney
};
