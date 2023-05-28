const toDo = ["call mom", "dishes"];
toDo.push("groceries");
console.log(toDo);
// Add multiple values in array with comma
const toDo2 = ["call mom", "dishes"];
toDo2.push("groceries", "feed cat");
console.log(toDo2);
// Remove the last element of the array
const toDo3 = ["call mom", "dishes"];
toDo3.pop();
console.log(toDo3);
// When we assign toDo.pop() to a variable, the variable stores the value we're removing.
const toDo4 = ["call mom", "dishes"];
let chore = toDo4.pop();
console.log(chore);

const activeUsers = ["sue", "mike"];
activeUsers.push("joe");
console.log(activeUsers);

const cookies = ["flour", "butter"];
cookies.push("sugar");
console.log(cookies);

const transactions = [-100, 5];
transactions.push(2, 500);
console.log(transactions);

const ordersDelivered = [false, false, true];
ordersDelivered.pop();
console.log(ordersDelivered);

const themes = ["classic", "dark mode"];
let current = themes.pop();
console.log(current);