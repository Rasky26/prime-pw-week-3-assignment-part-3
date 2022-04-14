console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40 
//    & console.log the variable
let partsNeeded = 40
console.log('1. Number of partsNeeded:', partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
let supplyChanges = [3, 5, -6, 0, 7, 11]
console.log('2. Array of supplyChanges:', supplyChanges);

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:', supplyChanges[1]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges' 
//    array & console.log the value removed.
let removedSupplyChange = supplyChanges.pop()
console.log('4. Removed item:', removedSupplyChange);

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
supplyChanges.push(25)
console.log('5. Adding 25 to supplyChanges.', supplyChanges);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.' 
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.' 
console.log('6. Showing supplyChanges...');

// Step through `supplyChanges` array
for (let index in supplyChanges) {

    // Index amount greater than zero
    if (supplyChanges[index] > 0) {
        console.log(`Added ${supplyChanges[index]} parts.`)

    // Index amount less than zero
    } else if (supplyChanges[index] < 0) {
        console.log(`Removed ${supplyChanges[index]} parts.`)

    // Default value should ONLY be zero now
    } else {
        console.log('No Change.')
    }
}

// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop. 
console.log('7. Showing supplyChanges with "for of" loop');
for (let value of supplyChanges) {

    // Index amount greater than zero
    if (value > 0) {
        console.log(`Added ${value} parts.`)

    // Index amount less than zero
    } else if (value < 0) {
        console.log(`Removed ${value} parts.`)

    // Default value should ONLY be zero now
    } else {
        console.log('No Change.')
    }
}

// 8. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('8. Total supplies available is:');

// You had mentioned the `console.table()` feature in my last assignment, so I
// set out to see how I could put the results from Step 8. into a console.table().
//
// Appears to work, but I am only 70% confident that I did this correctly.
//
// Found this tutorial showing how to set the supply values to a console.table()
// Link: https://developer.mozilla.org/en-US/docs/Web/API/console/table
// Captures each change as its own object along with a message.
function TrackSupply(supplyChange, runningTotal) {

    // Current change value in supply amounts
    this.supplyChange = supplyChange

    // Running total of supply
    this.runningTotal = runningTotal

    // Attempted to add a customized message related to supply numbers.
    //
    // Check if total supply level is negative
    if (this.runningTotal < 0) {
        this.message = "<<ERROR>> Negative supply"
    
    // Check if the total supply is zero
    } else if (this.runningTotal === 0) {
        this.message = "SUPPLY EMPTY! More supply needed!"

    // Set a message for low total supply
    } else if (this.runningTotal < 5) {
        this.message = "Supply critically low."

    // Default message for acceptable supply levels
    } else {
        this.message = "Acceptable supply levels."
    }
}

// Initialize the supply count
let supplyTotal = 0
// Initialize the supply total array
const supplyTotalArray = []

// Loop through the supplyChanges array
for (let supplyChange of supplyChanges) {

    // Update the total supply amount
    supplyTotal += supplyChange

    // Set the various amounts to an object
    const outcome = new TrackSupply(supplyChange, supplyTotal)

    // Append those objects into an array
    supplyTotalArray.push(outcome)
}

// FINALLY, I get to log these results to a table!
console.table(supplyTotalArray)

// 9. We have a large stash of parts in our warehouse that we 
//    need to box up and get ready for shipment. 
//    There are 572 parts in total, and each box holds 7 parts.
//    Use a `while` loop to keep adding parts to boxes until
//    no more boxes can be filled.
//    Then log how many boxes were filled, and how many parts are left over.
console.log('9. Filling boxes with a "while" loop');