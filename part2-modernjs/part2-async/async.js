// Refactored using arrow notation
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
};

// Consuming the promise using .then()
fetchData().then((data) => {
  console.log("Using .then():", data);
});

// Consuming the promise using async/await
const getData = async () => {
  const data = await fetchData();
  console.log("Using async/await:", data);
};

console.log("Calling getData...");
getData();
console.log("getData called, waiting for output...");
