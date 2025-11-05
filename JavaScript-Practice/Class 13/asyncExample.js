// Example 1: Basic setTimeout
console.log('Start of program');

setTimeout(() => {
    console.log('This runs after 2 seconds');
}, 2000);

console.log('End of program');

// Example 2: Multiple tasks with different timings
console.log('Starting multiple tasks...');

setTimeout(() => {
    console.log('Task 1: Completed after 1 second');
}, 1000);

setTimeout(() => {
    console.log('Task 2: Completed after 3 seconds');
}, 3000);

console.log('All tasks initiated');

// Example 3: Simulating a real-world scenario
function fetchUserData() {
    console.log('Starting to fetch user data...');
    
    setTimeout(() => {
        const userData = { id: 1, name: 'John' };
        console.log('User data received:', userData);
        
        // Simulating another dependent operation
        setTimeout(() => {
            console.log('Processing user preferences...');
            console.log('Complete!');
        }, 1500);
    }, 2000);
    
    console.log('Fetch request initiated');
}

fetchUserData();