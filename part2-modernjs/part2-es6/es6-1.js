var users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];

function getUserNames(users) {
  var names = [];
  for (var i = 0; i < users.length; i++) {
    names.push(users[i].name);
  }
  return names;
}

console.log(getUserNames(users));
