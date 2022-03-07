console.log("First");
// setInterval(() => {
//   console.log("Third");
// }, 3000);
console.log("Second");

let second = 0;
const timeId = setInterval(() => {
    // second++;
    console.log(second++);
    console.log(second);
    if (second === 5) {
        clearInterval(timeId);
    }
}, 1000);