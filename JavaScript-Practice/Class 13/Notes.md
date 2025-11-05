# **JavaScript Fundamentals: Threading & Operations**

## 1. Single-Threaded Nature
- JavaScript is a single-threaded language
- Can only execute one task at a time
- No parallel execution

## 2. Types of Operations

### A. Synchronous (Blocking) Operations
- Tasks execute one after another
- Each task must complete before next begins
- Example scenario:
    * Data fetch (takes 10s) → Site freezes
    * Display data
    * Mathematical operations (2**3, 2*4)
    * Other operations

### B. Asynchronous Operations
- Helps manage long-running tasks
- Uses single thread efficiently
- How it works:
    * Long tasks (like database fetches) are delegated
    * setTimeout function helps manage delayed execution
    * Main thread remains free for other operations
    * Prevents site from freezing

## **About SetTime & Thread** 

1. ```setTimeout``` is part of JavaScript's asynchronous programming model. While it might seem similar to ```threads```, JavaScript actually uses a single-threaded event loop.

2. When you use ```setTimeout```, you're telling JavaScript to:

   * Take a function (callback)
   * Wait for a specified amount of time
   * Put that function in the event queue after the time has elapsed
   * Execute it when the main thread is free
3. In the example I created:

   * Example 1 shows basic usage where the code continues running while the timer is counting
   * Example 2 shows multiple timers running concurrently
   * Example 3 shows a more realistic scenario with nested timeouts

The output shows how:

1. The immediate console logs execute first
2. The timed functions execute after their specified delays
3. The main program continues running while these timers are counting down

## **CallBack**

A callback is simply a function that is passed as an argument to another function and is executed after the main function has finished its execution. 

<i>Think of it as "Hey, after you're done with your task, call this function back."</i>

Key points about callbacks:

## Basic Structure:

```javascript
function mainFunction(callback) {
    // Do something
    callback();
}
```

## Main Uses:
- Handling asynchronous operations
- Event handling
- Array methods (like map, filter, reduce)
- Ensuring code executes in the right order

## Types of Callbacks:
1. Synchronous callbacks (execute immediately)
2. Asynchronous callbacks (execute after some time/event)

Here's another code example:
```javascript
// Synchronous
function addNumbers(a, b, callback) {
    const result = a + b;
    callback(result);
}
addNumbers(5, 3, (sum) => console.log('Sum is:', sum));


// Asynchronous
function delayedGreet(name, callback) {
    setTimeout(() => {
        callback(`Hello ${name}!`);
    }, 1000);
}
delayedGreet('John', (message) => console.log(message));
```

## Key Difference:
**Synchronous** = 
- Executes immediately in the main thread
- Blocks further code execution until completed
- No waiting or delegation of tasks
- Example: Simple calculations, array operations

**Asynchronous** = 
- Delegates task to be executed later
- Doesn't block the main thread
- Uses mechanisms like setTimeout, promises, or API calls
- Example: Loading data, timers, file operations