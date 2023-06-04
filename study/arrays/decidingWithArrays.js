// We use the word length after the array name and a period . to get the number of elements in an array.
const tasks = ["dishes", "windows", "vacuum"];
console.log(tasks.length);

// We can also store the length of an array in a variable.
const tasks1 = ["dishes", "windows", "vacuum"];
const length = tasks1.length;
console.log(length);

// No matter how many elements there are in an array, length will count them for us.
const tasks2 = ["dishes", "windows", "vacuum", "dusting", "laundry"];
console.log(tasks2.length);

// Even if the tasks array is empty, tasks.length gives us the number of elements in it.
const tasks3 = [];
console.log(tasks3.length);

// We can use the length of an array to create conditional statements that depend on its number of elements.
const tasks4 = ["dishes", "windows", "vacuum"];
if (tasks4.length > 0) {
 console.log("Ugh, more work!");
}

// We can also use the length of an array to create for loops that go through all of its elements.
// For that, we repeat a loop as many times as there are elements in the array using the length property.
const friends = ["Ana", "Eve", "Sam"];
for (let i = 0; i < friends.length; i++) {
 console.log(friends[i]);
}

const friends1 = ["Anna", "Tim"];
for (let i = 0; 
i <
 friends1.length; i++) {
 console.log(friends1[i]);
}