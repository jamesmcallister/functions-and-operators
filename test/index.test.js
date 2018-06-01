const {
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
} = require("../src");

test("Add", () => {
  const result = add(2, 3);

  expect(result).toEqual(5);
});

test("Multiply", () => {
  const result = multiply(4, 5, 3, 7);

  expect(result).toEqual(420);
});

test("Average", () => {
  const result = average(2.2, 1.68, 1.76, 1.54, 2);

  expect(parseFloat(Number(result).toFixed(3))).toEqual(1.836);
});

test("Remainder", () => {
  const result = remainder(17, 5);

  expect(result).toEqual(2);
});

test("Exponential", () => {
  const result = exponential(7, 4);

  expect(result).toEqual(2401);
});

test("Lax equality ", () => {
  const result = laxEquality(10, "10");
  expect(result).toEqual(true);

  const result2 = laxEquality(5, 5);
  expect(result2).toEqual(false);
});

test("Strict equal ", () => {
  const result1 = strictEqual(10, "10", 10);
  expect(result1).toEqual(false);

  const result2 = strictEqual(5, 5, 5);
  expect(result2).toEqual(true);

  const result3 = strictEqual(true, true, 5);
  expect(result3).toEqual(false);

  const result4 = strictEqual(10, "hello", "hello");
  expect(result4).toEqual(false);
});

test("Smaller", () => {
  const result1 = smaller(7, 7);
  expect(result1).toEqual(true);

  const result2 = smaller(-7, 7);
  expect(result2).toEqual(true);

  const result3 = smaller(8, 7);
  expect(result3).toEqual("smaller");
});

test("Is divisible by", () => {
  const result1 = isDivisibleBy(9, 4, 36);
  expect(result1).toEqual(true);

  const result2 = isDivisibleBy(9, 4, 35);
  expect(result2).toEqual(false);

  const result3 = isDivisibleBy(9, 8, 32);
  expect(result3).toEqual(true);

  const result4 = isDivisibleBy(4, 7, 32);
  expect(result4).toEqual(true);
});

test("Evens", () => {
  const result1 = evens(7, 7, 7, 7);
  expect(result1).toEqual(false);

  const result2 = evens(1, 2, 3, 4);
  expect(result2).toEqual(false);

  const result3 = evens(10, 10, 10, 10);
  expect(result3).toEqual(true);

  const result4 = evens(10, 10, 10, 11);
  expect(result4).toEqual(false);
});

test("Remove middle", () => {
  const words = ["mouse", "giraffe", "queen", "window", "bottle"];

  const expectedWords = ["mouse", "giraffe", "window", "bottle"];
  const expectedOutput = ["queen"];

  const output = removeMiddle(words);

  expect(output).toEqual(expectedOutput);
  expect(words).toEqual(expectedWords);
});

test("Get second and third", () => {
  const numbers = [90, 5, 11, 5, 6];

  const expectedOutput = [5, 11];
  const expectedNumbers = [90, 5, 11, 5, 6];

  const output = get2ndAnd3rd(numbers);

  expect(output).toEqual(expectedOutput);
  expect(numbers).toEqual(expectedNumbers);
});

test("Add 1 to each item in myArray", () => {
  const myArray = [31, 57, 12, 5];

  const unchanged = [31, 57, 12, 5];
  const expected = [32, 58, 13, 6];
  const output = mapper(myArray);

  expect(output).toEqual(expected);
  expect(myArray).toEqual(unchanged);
});

test("Get word lengths", () => {
  const words = ["sun", "potato", "roundabout", "pizza"];
  const expected = [3, 6, 10, 5];

  const output = wordLengths(words);
  expect(output).toEqual(expected);
});

test("Cities", () => {
  const capitals = [
    { city: "Paris", country: "France" },
    { city: "Madrid", country: "Spain" },
    { city: "Rome", country: "Italy" }
  ];

  function transform({ city, country }) {
    return `${city} is the capital of ${country}`;
  }

  const expected = [
    "Paris is the capital of France",
    "Madrid is the capital of Spain",
    "Rome is the capital of Italy"
  ];

  const result = cities(capitals, transform);

  expect(result).toEqual(expected);
});

test("Get numbers greater than 10", () => {
  const numbers = [4, 10, 32, 9, 21];
  const expected = [32, 21];

  const output = largerThanTen(numbers);
  expect(output).toEqual(expected);
});

test("Get even numbers", () => {
  const numbers = [22, 13, 73, 82, 4];
  const expected = [22, 82, 4];

  const output = even(numbers);
  expect(output).toEqual(expected);
});

test("Find the needle", () => {
  const words = ["house", "train", "slide", "needle", "book"];
  const expected = 3;

  const output = findTheNeedle(words);
  expect(output).toEqual(expected);
});

test("Find largest number", () => {
  const numbers = [3, 21, 88, 4, 36];
  const expected = 88;

  const output = findLargest(numbers);
  expect(output).toEqual(expected);
});

test("Add all numbers", () => {
  const numbers = [9, 23, 10, 3, 8];
  const expected = 53;

  const output = addAllnumbers(numbers);

  expect(output).toEqual(53);
});

test("Averages", () => {
  const numbers = [4, "-", 8, 11, "hello", "57", 0, 2];
  const expected = 53;

  const output = averages(numbers);

  expect(output).toEqual(5);
});

test("Sorting strings", () => {
  const companies = [
    "netflix",
    "google",
    "amazon",
    "facebook",
    "microsoft",
    "apple"
  ];
  const expected = [
    "amazon",
    "apple",
    "facebook",
    "google",
    "microsoft",
    "netflix"
  ];

  const output = sortingStrings(companies);

  expect(output).toEqual(expected);
});

test("Sorting numbers", () => {
  const numbers = [99, -2, 0, 101, 2, 3, 22, 37, 1, -11];
  const expected = [-11, -2, 0, 1, 2, 3, 22, 37, 99, 101];

  const output = sortingNumbers(numbers);

  expect(output).toEqual(expected);
});

test("Sorting numbers descending", () => {
  const numbers = [99, -2, 0, 101, 2, 3, 22, 37, 1, -11];
  const expected = [101, 99, 37, 22, 3, 2, 1, 0, -2, -11];

  const output = sortingNumbersDescending(numbers);

  expect(output).toEqual(expected);
});

test.skip("Sorting cars", () => {
  const cars = [
    {
      make: "tesla",
      model: "roadster",
      year: 2020
    },
    {
      make: "ford",
      model: "fiesta",
      year: 1994
    },
    {
      make: "reliant",
      model: "robin",
      year: 1973
    },
    {
      make: "toyota",
      model: "prius",
      year: 2011
    }
  ];

  const expected = [
    {
      make: "reliant",
      model: "robin",
      year: 1973
    },
    {
      make: "ford",
      model: "fiesta",
      year: 1994
    },
    {
      make: "tesla",
      model: "roadster",
      year: 2020
    },
    {
      make: "toyota",
      model: "prius",
      year: 2011
    }
  ];
  const output = sortingCars(cars);

  expect(output).toEqual(expected);
});

test("Delete colour", () => {
  const car = {
    make: "Ford",
    model: "Mondeo",
    color: "gold"
  };
  const expected = {
    make: "Ford",
    model: "Mondeo"
  };

  const output = deleteColour(car);

  expect(output).toEqual(expected);
});

test.only("Paint shop", () => {
  const cars = [
    { make: "Ford", model: "Fiesta", colour: "Red" },
    { make: "Land Rover", model: "Defender", colour: "Muddy" },
    { make: "Toyota", model: "Prius", colour: "Silver" },
    { make: "Honda", model: "Civic", colour: "Yellow" }
  ];

  const unpaintedCars = [
    { make: "Ford", model: "Fiesta", colour: "Red" },
    { make: "Land Rover", model: "Defender", colour: "Muddy" },
    { make: "Toyota", model: "Prius", colour: "Silver" },
    { make: "Honda", model: "Civic", colour: "Yellow" }
  ];

  const repaintedCars = [
    { make: "Ford", model: "Fiesta", colour: "Pink" },
    { make: "Land Rover", model: "Defender", colour: "Muddy" },
    { make: "Toyota", model: "Prius", colour: "Silver" },
    { make: "Honda", model: "Civic", colour: "Yellow" }
  ];

  const output = paintShop(cars, "Pink");

  expect(output).toEqual(repaintedCars);
  expect(cars).toEqual(unpaintedCars);
});

test("Second largest", () => {
  const numbers = [2, 0, 23, 0, 57, 1];

  const output = secondLargest(numbers);

  expect(output).toEqual(2);
});

test("Add sales", () => {
  const londonx = {
    london: 250,
    paris: 300,
    berlin: 150,
    madrid: 400
  };

  const londonOutput = addSales("london", 50);
  expect(londonOutput).toEqual(londonx);

  const barcelonax = {
    london: 200,
    paris: 300,
    berlin: 150,
    madrid: 400,
    barcelona: 200
  };

  const barcelonaOutput = addSales("barcelona", 200);
  expect(barcelonaOutput).toEqual(barcelonax);
});

test("Total sales", () => {
  const output = totalSales({
    london: 200,
    paris: 100,
    berlin: 150,
    oslo: 50
  });

  expect(output).toEqual(500);
});

test("Wallet sum", () => {
  const output = walletSum({
    5: 3,
    10: 8,
    20: 5
  });

  expect(output).toEqual(195);
});

test("Wallet merge", () => {
  const output = walletMerge(
    {
      5: 2,
      10: 3,
      20: 1
    },
    {
      5: 4,
      10: 7,
      20: 3
    }
  );

  expect(output).toEqual({
    5: 6,
    10: 10,
    20: 4
  });
});

test("Array of wallets", () => {
  const output = arrayOfWallets([
    {
      5: 2,
      10: 3,
      20: 8
    },
    {
      5: 2,
      10: 1,
      20: 0
    },
    {
      5: 0,
      10: 3,
      20: 4
    }
  ]);

  expect(output).toEqual({
    5: 4,
    10: 7,
    20: 12
  });
});

test("Crazy money", () => {
  const output = crazyMoney([
    {
      2: 1,
      7: 3,
      14: 2,
      15: 2
    },
    {
      1: 3,
      4: 2,
      5: 2,
      9: 0
    },
    {
      2: 2,
      15: 3
    }
  ]);

  expect(output).toEqual(151);
});
