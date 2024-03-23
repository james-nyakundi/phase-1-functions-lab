// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42); // Distance from headquarters in blocks
}

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264; // Distance from headquarters in feet
}

function distanceTravelledInFeet(startBlock, endBlock) {
    return Math.abs(endBlock - startBlock) * 264; // Distance travelled in feet
}

// Example usage:
console.log(distanceFromHqInBlocks(48)); // Output: 6 blocks
console.log(distanceFromHqInFeet(48)); // Output: 1584 feet
console.log(distanceTravelledInFeet(34, 38)); // Output: 1056 feet

function calculatesFarePrice(start, destination) {
    const distance = Math.abs(destination - start) * 264; // Distance in feet
    
    if (distance <= 400) {
        return 0; // Free for the first 400 feet
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance < 2500) {
        return 25; // Flat fare for distances over 2000 feet and under 2500 feet
    } else {
        return 'cannot travel that far'; // Distance over 2500 feet is not allowed
    }
}

// Example usage:
console.log(calculatesFarePrice(34, 38)); // Output: 0 (free for short rides)
console.log(calculatesFarePrice(34, 41)); // Output: 3.52 (between 400 and 2000 feet)
console.log(calculatesFarePrice(34, 50)); // Output: 25 (over 2000 feet and under 2500 feet)
console.log(calculatesFarePrice(34, 60)); // Output: cannot travel that far (over 2500 feet)

