// -------- Synchronous Callback Example --------
console.log('Starting Synchronous Examples...\n');

// Example 1: Array methods (synchronous callbacks)
const numbers = [1, 2, 3, 4, 5];

console.log('Original array:', numbers);

// forEach is a synchronous callback - it runs immediately for each element
console.log('Running forEach (synchronous):');
numbers.forEach(function(number) {
    console.log(`Processing number: ${number}`);
});

console.log('\nSynchronous operation completed!\n');

// -------- Asynchronous Callback Example --------
console.log('Starting Asynchronous Examples...\n');

// Example 2: setTimeout (asynchronous callback)
console.log('Starting timer...');

setTimeout(function() {
    console.log('3 seconds have passed!');
    console.log('This is an asynchronous callback');
}, 3000);

console.log('Timer has been set');
console.log('The program continues running...');

// Example 3: Simulating real-world scenario
console.log('\nSimulating User Login:');

function checkUserCredentials(username, callback) {
    console.log(`Checking credentials for user: ${username}`);
    
    // Simulate database check with setTimeout
    setTimeout(function() {
        const isValid = username === 'john';
        callback(isValid);
    }, 2000);
    
    console.log('Credential check initiated...');
}

// Using the async callback
checkUserCredentials('john', function(isValid) {
    if (isValid) {
        console.log('✅ Login successful!');
    } else {
        console.log('❌ Login failed!');
    }
});

console.log('Rest of the program continues...');