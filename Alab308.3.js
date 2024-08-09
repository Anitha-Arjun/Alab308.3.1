// //Part 1: Fizz Buzz

for (let number = 3; number < 100; number++) {
  if (number % 3 == 0 && number % 5 == 0) {
    console.log("FIZZ BUZZ");
  } else if (number % 5 == 0) {
    console.log("BUZZ");
  } else if (number % 3 == 0) {
    console.log("FIZZ");
  } else {
    console.log(`${number}`);
  }
}

// // //Part 2: Prime Time

let n = 5;
const isPrimeLoop = (num = 1) => {
  let prime = false;
  let tempNum = num;
  while (!prime) {
    ++tempNum;

    let sqrtnum = Math.floor(Math.sqrt(tempNum));
    //prime = true;
    prime = tempNum !== 1;

    for (let i = 2; i < sqrtnum + 1; i++) {
      if (tempNum % i === 0) {
        prime = false;

        break;
      }
    }
  }
  return tempNum;
};

console.log(isPrimeLoop(n));

// //Part 3:

let str =
  "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
const rowArray = str.split("\n");
for (let i = 0; i < rowArray.length; i++) {
  const columnArray = rowArray[i].split(",");
  console.log(columnArray[0], columnArray[1], columnArray[2], columnArray[3]);
}
