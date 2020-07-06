function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}
const userFunctionStore = {
  increment: function () {
    this.score++;
  },
  login: function () {
    console.log("Logged in");
  },
};
const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment();
console.log(user1.score);
user2.login();

// The new keyword

function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

UserCreator.prototype;
UserCreator.prototype.increment = function () {
  this.score++;
};

const user3 = new UserCreator("Will", 3);
const user4 = new UserCreator("Tim", 5);
user3.increment();
console.log(user3.score); // 4

user4.increment();
console.log(user3.score); // 6

// As a class

class UserCreatorClass {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  increment() {
    this.score++;
  }
  login() {
    console.log("login");
  }
}
const user5 = new UserCreatorClass("Eva", 9);
user5.increment();
console.log(user5.score);
console.log(user5.login());
