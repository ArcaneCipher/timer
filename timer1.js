// Convert process arguments as sorted array of numbers. 
// Strings convert to NaN
let input = process.argv.slice(2).sort((a, b)=> a - b).map(Number)

// Input validation: No arguments provided, exit
if (!input.length) return;

// Input santitation: remove negative numbers and NaN
const timers = input.filter(number => number >= 0 && !isNaN(number));

for (const number of timers){
  setTimeout(() => {
    process.stdout.write('\x07');
  }, 1000 * number);
}

// Terminate process after the last timer
setTimeout(() => process.exit(), 1000 * Math.max(...timers));

// May want to consider handling duplicates
// Consider providing feedback to the user "beeping at..." or "no valid timers set"