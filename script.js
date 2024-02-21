// prompt user to input flavors
const inputFlavors = prompt(
    "Enter a list of comma-separated flavors with no spaces.",
    'vanilla,vanilla,vanilla,strawberry,coffee,coffee'
)

// Split flavors into an array of strings
const flavorArray = inputFlavors.split(",");

console.log(flavorArray);

// Create object to store the flavors in
let flavorObject = {}

// Iterate through the array of flavors to count how many of each flavor there is
for (let i = 0; i < flavorArray.length; i++) {
    if (flavorArray[i] in flavorObject) {
        flavorObject[flavorArray[i]] += 1;
    } else {
        flavorObject[flavorArray[i]] = 1;
    }
}

// Log the object into a table
console.table(flavorObject)

