function exercise13() {
  // Exercise 13
  //
  // The Fibonacci sequence is a sequence of numbers where every value is the sum
  // of the previous 2 values.
  // It looks like this:
  // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
  //
  // Why?
  // 13 + 21 = 34
  // 8 + 13 = 21
  // 5 + 8 = 13
  //
  // Every number in the sequence is the result of adding the two numbers to
  // the left. The sequence starts with "0, 1", and every number beyond that
  // can be calculated by adding the previous 2 numbers.
  //
  // Write a program which calculates the 50th number in the fibonacci sequence
  // (The numbers get big quickly!)
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  let arrayFibonnacy = [];
  arrayFibonnacy[0] = 0;
  arrayFibonnacy[1] = 1;

  for (i = 2; i <= 49; i++) {
    arrayFibonnacy[i] = arrayFibonnacy[i - 1] + arrayFibonnacy[i - 2];
  }

  console.log(arrayFibonnacy[49]);

  // -----------------------------------------------------------------
  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-13

module.exports = exercise13;
