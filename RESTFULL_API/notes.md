
Rest Full Api is nothing but some rules and regulation that a server should always follow..


 # 1.  always follow client side rendering (CSR) means data send in json format then client will decided how manage how rendering..
# not follow server side rendering (SSR) means sending html which is only usefull for web brower like gogle use SSR
# 2.always respect all HTTP Methods (GET,POST,PUT,Patch,delete) use this methods while creating server.


# => Methods Can apply on json data to modify or perform operation


# 1. find()
Purpose: Returns the first object that matches a condition.
Example:
javascript
Copy code
const user = dummyData.find(user => user.id === 3);
console.log(user);
// Output: { id: 3, first_name: "Alice", last_name: "Johnson", email: "alice.johnson@example.com", gender: "Female" }
# 2. filter()
Purpose: Returns an array of all objects that match a condition.
Example:
javascript
Copy code
const females = dummyData.filter(user => user.gender === "Female");
console.log(females);
// Output: Array of all users with gender "Female"
# 3. map()
Purpose: Creates a new array by transforming each object in the original array.
Example:
javascript
Copy code
const emails = dummyData.map(user => user.email);
console.log(emails);
// Output: Array of all email addresses
# 4. forEach()
Purpose: Executes a function for each object in the array (does not return anything).
Example:
javascript
Copy code
dummyData.forEach(user => console.log(user.first_name));
// Output: Logs all first names to the console
# 5. some()
Purpose: Checks if any object in the array matches a condition. Returns true or false.
Example:
javascript
Copy code
const hasMale = dummyData.some(user => user.gender === "Male");
console.log(hasMale); // Output: true
# 6. every()
Purpose: Checks if all objects in the array match a condition. Returns true or false.
Example:
javascript
Copy code
const allHaveEmails = dummyData.every(user => user.email.includes("@"));
console.log(allHaveEmails); // Output: true
# 7. reduce()
Purpose: Reduces the array to a single value by applying a function.
Example:
javascript
Copy code
const totalUsers = dummyData.reduce((count, user) => count + 1, 0);
console.log(totalUsers); // Output: 10
# 8. sort()
Purpose: Sorts the array based on a condition (modifies the original array).
Example:
javascript
Copy code
const sortedByFirstName = dummyData.sort((a, b) => a.first_name.localeCompare(b.first_name));
console.log(sortedByFirstName);
// Output: Array sorted by `first_name` alphabetically
# 9. slice()
Purpose: Returns a shallow copy of a portion of the array.
Example:
javascript
Copy code
const firstFiveUsers = dummyData.slice(0, 5);
console.log(firstFiveUsers);
// Output: Array of the first 5 users
# 10. splice()
Purpose: Modifies the array by removing or adding elements (use with caution as it changes the original array).
Example:
javascript
Copy code
const removedUsers = dummyData.splice(0, 2); // Removes the first 2 users
console.log(removedUsers);
console.log(dummyData); // Remaining array after removal
# 11. includes()
Purpose: Checks if a value exists in an array (works for direct values, not objects).
Example:
javascript
Copy code
const emails = dummyData.map(user => user.email);
console.log(emails.includes("john.doe@example.com")); // Output: true
# 12. indexOf() and findIndex()
indexOf(): Finds the index of a specific value (works for primitive types).
findIndex(): Finds the index of the first object that matches a condition.
Example:

javascript
Copy code
const index = dummyData.findIndex(user => user.id === 4);
console.log(index); // Output: 3
# 13. push(), pop(), shift(), unshift()
push(): Adds a new object to the end of the array.
pop(): Removes the last object in the array.
shift(): Removes the first object in the array.
unshift(): Adds a new object to the beginning of the array.
Example:

javascript
Copy code
dummyData.push({ id: 11, first_name: "Liam", last_name: "Harris", email: "liam.harris@example.com", gender: "Male" });
console.log(dummyData);
# 14. concat()
Purpose: Combines two or more arrays.
Example:
javascript
Copy code
const additionalData = [{ id: 11, first_name: "Liam", last_name: "Harris", email: "liam.harris@example.com", gender: "Male" }];
const combinedData = dummyData.concat(additionalData);
console.log(combinedData);
# 15. JSON.stringify() and JSON.parse()
Use these methods to convert objects to JSON strings and vice versa.
Example:
javascript
Copy code
const jsonString = JSON.stringify(dummyData);
console.log(jsonString); // JSON string

const parsedData = JSON.parse(jsonString);
console.log(parsedData); // Back to JavaScript object
 ##