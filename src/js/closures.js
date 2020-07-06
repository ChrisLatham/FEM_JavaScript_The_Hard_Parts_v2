console.log("CHALLENGE 1");
function createFunction() {
  return function () {
    console.log("hello");
  };
}

/*** Uncomment these to check your work! ***/
const function1 = createFunction();
function1(); // => should console.log('hello');

console.log("\nCHALLENGE 2");
function createFunctionPrinter(input) {
  return () => console.log(input);
}

// /*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter("sample");
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter("hello");
printHello(); // => should console.log('hello');

console.log("\nCHALLENGE 3");
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log("counter", counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
willCounter(); // 'counter' 1
willCounter(); // 'counter' 2
willCounter(); // 'counter' 3

jasCounter(); // 'counter' 1
willCounter(); // 'counter' 4

console.log("\nCHALLENGE 3 (addByX)");
function addByX(x) {
  return (input) => input + x;
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
console.log(addByTwo(1)); // => should return 3
console.log(addByTwo(2)); // => should return 4
console.log(addByTwo(3)); // => should return 5

const addByThree = addByX(3);
console.log(addByThree(1)); // => should return 4
console.log(addByThree(2)); // => should return 5

const addByFour = addByX(4);
console.log(addByFour(4)); // => should return 8
console.log(addByFour(5)); // => should return 9

console.log("\nCHALLENGE 4");
function once(func) {
  let count = 0;
  let thisNum;
  return function (num) {
    if (count === 0) {
      thisNum = num;
      count++;
    }
    return func(thisNum);
  };
}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
console.log(onceFunc(4)); // => should log 6
console.log(onceFunc(10)); // => should log 6
console.log(onceFunc(9001)); // => should log 6

console.log("\nCHALLENGE 5");
function after(count, func) {
  let logCount = 0;
  return function () {
    logCount++;
    if (logCount === count) {
      func();
    }
  };
}

// /*** Uncomment these to check your work! ***/
const called = function () {
  console.log("hello");
};
const afterCalled = after(3, called);
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed
afterCalled(); // => 'hello' is printed

function delay(func, wait, ...args) {
  setTimeout(func, wait, ...args);
}
delay(
  (...args) => console.log(...args),
  5000,
  "\nCHALLENGE 6:",
  "WHAT?!",
  "WOOHOO!"
);

console.log("\nCHALLENGE 7");
function rollCall(names) {
  let counter = 0;
  return function () {
    if (counter < names.length) {
      console.log(names[counter]);
    } else {
      console.log("Everyone accounted for");
    }
    counter++;
  };
}

// /*** Uncomment these to check your work! ***/
const rollCaller = rollCall(["Victoria", "Juan", "Ruth"]);
rollCaller(); // => should log 'Victoria'
rollCaller(); // => should log 'Juan'
rollCaller(); // => should log 'Ruth'
rollCaller(); // => should log 'Everyone accounted for'

console.log("\nCHALLENGE 8");
function saveOutput(func, magicWord) {
  const logObj = {};
  return function (input) {
    if (input === magicWord) {
      return logObj;
    } else {
      let result = func(input);
      logObj[`${input}`] = result;
      return result;
    }
  };
}

// /*** Uncomment these to check your work! ***/
const multiplyBy2 = function (num) {
  return num * 2;
};
const multBy2AndLog = saveOutput(multiplyBy2, "boo");
console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(9)); // => should log 18
console.log(multBy2AndLog("boo")); // => should log { 2: 4, 9: 18 }

console.log("\nCHALLENGE 9");
function cycleIterator(array) {
  let iterator = 0;
  return function () {
    iterator === array.length ? (iterator = 1) : iterator++;
    return array[iterator - 1];
  };
}

// /*** Uncomment these to check your work! ***/
const threeDayWeekend = ["Fri", "Sat", "Sun"];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'

console.log("\nCHALLENGE 10");
function defineFirstArg(func, arg) {
  return (...args) => {
    return func(arg, args);
  };
}

// /*** Uncomment these to check your work! ***/
const subtract = function (big, small) {
  return big - small;
};
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // => should log 15

console.log("\nCHALLENGE 11");
function dateStamp(func) {
  return function (input) {
    let dateStamp = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
    return { date: `${dateStamp}`, output: func(input) };
  };
}

// /*** Uncomment these to check your work! ***/
const stampedMultBy2 = dateStamp((n) => n * 2);
console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }

console.log("\nCHALLENGE 12");
function censor() {
  const swaps = [];
  return function (...args) {
    if (args.length === 2) {
      swaps.push(args);
    } else {
      let newStr = args[0];
      swaps.forEach((swap) => (newStr = newStr.replace(swap[0], swap[1])));
      return newStr;
    }
  };
}

// /*** Uncomment these to check your work! ***/
const changeScene = censor();
changeScene("dogs", "cats");
changeScene("quick", "slow");
console.log(changeScene("The quick, brown fox jumps over the lazy dogs.")); // => should log 'The slow, brown fox jumps over the lazy cats.'

console.log("\nCHALLENGE 13");
function createSecretHolder(secret) {
  const secretObj = {};
  secretObj.getSecret = () => {
    console.log(`Get Secret: ${secret}`);
    return secret;
  };
  secretObj.setSecret = (newSecret) => {
    secret = newSecret;
    console.log(`Set Secret: ${secret}`);
  };
  return secretObj;
}

// /*** Uncomment these to check your work! ***/
obj = createSecretHolder(5);
obj.getSecret(); // => returns 5
obj.setSecret(2);
obj.getSecret(); // => returns 2

console.log("\nCHALLENGE 14");
function callTimes() {
  let count = 1;
  return function () {
    return console.log(count++);
  };
}

// /*** Uncomment these to check your work! ***/
let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();
myNewFunc1(); // => 1
myNewFunc1(); // => 2
myNewFunc2(); // => 1
myNewFunc2(); // => 2

console.log("\nCHALLENGE 15");
function russianRoulette(num) {
  let runCount = 0;
  return function () {
    runCount++;
    if (runCount < num) {
      return "click";
    } else if (runCount === num) {
      return "bang";
    } else {
      return "reload to play again";
    }
  };
}

// /*** Uncomment these to check your work! ***/
const play = russianRoulette(3);
console.log(play()); // => should log 'click'
console.log(play()); // => should log 'click'
console.log(play()); // => should log 'bang'
console.log(play()); // => should log 'reload to play again'
console.log(play()); // => should log 'reload to play again'

console.log("\nCHALLENGE 16");
function average() {
  const numList = [];
  return function (num = 0) {
    if (num > 0) {
      numList.push(num);
    }
    if (numList.length === 0) {
      return 0;
    } else {
      let sumOfList = 0;
      for (let i = 0; i < numList.length; i++) {
        sumOfList += numList[i];
      }
      return sumOfList / numList.length;
    }
  };
}

// /*** Uncomment these to check your work! ***/
const avgSoFar = average();
console.log(avgSoFar()); // => should log 0
console.log(avgSoFar(4)); // => should log 4
console.log(avgSoFar(8)); // => should log 6
console.log(avgSoFar()); // => should log 6
console.log(avgSoFar(12)); // => should log 8
console.log(avgSoFar()); // => should log 8

console.log("\nCHALLENGE 17");
function makeFuncTester(arrOfTests) {
  return function (callback) {
    let count = 0;
    for (let i = 0; i < arrOfTests.length; i++) {
      if (callback(arrOfTests[i][0]) === arrOfTests[i][1]) {
        count++;
      }
    }
    return count === 3;
  };
}

// /*** Uncomment these to check your work! ***/
const capLastTestCases = [];
capLastTestCases.push(["hello", "hellO"]);
capLastTestCases.push(["goodbye", "goodbyE"]);
capLastTestCases.push(["howdy", "howdY"]);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = (str) => str.toUpperCase();
const capLastAttempt2 = (str) => str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true

console.log("\nCHALLENGE 18");
function makeHistory(limit) {
  let listOfStrings = [];
  return function (str) {
    if (str === "undo") {
      if (listOfStrings.length === 0) {
        return "nothing to undo";
      } else {
        let temp = listOfStrings[listOfStrings.length - 1];
        listOfStrings.pop();
        return `${temp} undone`;
      }
    } else {
      if (listOfStrings.length === limit) {
        listOfStrings.shift();
      }
      listOfStrings.push(str);
      return `${str} done`;
    }
  };
}

/*** Uncomment these to check your work! ***/
const myActions = makeHistory(2);
console.log(myActions("jump")); // => should log 'jump done'
console.log(myActions("undo")); // => should log 'jump undone'
console.log(myActions("walk")); // => should log 'walk done'
console.log(myActions("code")); // => should log 'code done'
console.log(myActions("pose")); // => should log 'pose done'
console.log(myActions("undo")); // => should log 'pose undone'
console.log(myActions("undo")); // => should log 'code undone'
console.log(myActions("undo")); // => should log 'nothing to undo'

console.log("\nCHALLENGE 19");
function blackjack(array) {
  let deckLocation = 0;
  return function dealer(num1, num2) {
    let playerTurn = 0;
    let playerState = "PLAYING";
    let playerScore = 0;
    return function player() {
      playerTurn++;
      if (playerState === "BUST") {
        return "you are done!";
      }
      if (playerTurn === 1) {
        playerScore = num1 + num2;
        return playerScore;
      } else {
        deckLocation++;
        if (deckLocation === array.length - 1) {
          deckLocation = 1;
        }
        playerScore += array[deckLocation - 1];
        if (playerScore <= 21) {
          return playerScore;
        } else {
          playerState = "BUST";
          return "bust";
        }
      }
    };
  };
}

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
const deal = blackjack([
  2,
  6,
  1,
  7,
  11,
  4,
  6,
  3,
  9,
  8,
  9,
  3,
  10,
  4,
  5,
  3,
  7,
  4,
  9,
  6,
  10,
  11,
]);

console.log("\n*** PLAYER 1 ***");
const i_like_to_live_dangerously = deal(4, 5);
console.log(i_like_to_live_dangerously()); // => should log 9
console.log(i_like_to_live_dangerously()); // => should log 11
console.log(i_like_to_live_dangerously()); // => should log 17
console.log(i_like_to_live_dangerously()); // => should log 18
console.log(i_like_to_live_dangerously()); // => should log 'bust'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

console.log("\n*** PLAYER 2 ***");
const i_TOO_like_to_live_dangerously = deal(2, 2);
console.log(i_TOO_like_to_live_dangerously()); // => should log 4
console.log(i_TOO_like_to_live_dangerously()); // => should log 15
console.log(i_TOO_like_to_live_dangerously()); // => should log 19
console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

console.log("\n*** PLAYER 3 ***");
const i_ALSO_like_to_live_dangerously = deal(3, 7);
console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
