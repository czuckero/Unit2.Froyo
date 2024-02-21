// prompt user to input flavors
const inputFlavors = prompt(
    "Enter a list of comma-separated flavors with no spaces.",
    'vanilla,vanilla,vanilla,strawberry,coffee,coffee'
)

// Split flavors into an array of strings
const flavorArray = inputFlavors.split(",").map((s) => s.trim());

console.log(flavorArray);

// Create object to store the flavors in
let flavorObject = {}

// Create a function to iterate through the array of flavors to count how many of each flavor there is
const flavorCount = (flavorArray) => {
    for (let i = 0; i < flavorArray.length; i++) {
        if (flavorArray[i] in flavorObject) {
            flavorObject[flavorArray[i]] += 1;
        } else {
            flavorObject[flavorArray[i]] = 1;
        }
    }
    return console.table(flavorObject);
}

// Call the function to log the object into a table
flavorCount(flavorArray);


