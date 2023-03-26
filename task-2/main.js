/* 👉 TASK 2.1 In the task-2 `index.html`, there is a `p` tag (with an id of `count`) that displays a count. Ensure the count displays 0 when the page loads and then, using `setInterval`, have it increment by 1 every second. */
let counter = document.querySelector("#count");
// Initialize the counterValue variable to 0
let counterValue = 0;
//Declare a variable interval to hold the interval ID returned by setInterval
let interval;

// Define the function countUp
function countUp() {
    counterValue += 1;
    counter.textContent = counterValue;
    if (counterValue >= 12) {
        clearInterval(interval);
    }l
}
interval= setInterval(countUp, 1000);