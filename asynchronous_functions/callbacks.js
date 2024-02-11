// /*
function booking(){
    console.log('Tickets are generated 🎫')
    setTimeout(() => {
        return '🚅'
    }, 100)
    console.log('Train is booked ✅')
}

arrived = booking()
console.log("Wait until train arrives...")
console.log(`Train arrived: ${arrived}`)
// */

// Here, the tickets are booked but since the setTimeout is async func, 
// the answer was "undefined" because the synchronous nature of code did not wait for the response!

// One of the solutions to handle these is to use "Callbacks"
// Callbacks is nothing but passing a function as an argument to another one.
// Therefore, we can utilize inside an async func, and after completion of the async task, 
// it would call (callback) the function to carry further process.

function booking(mycallback){
    console.log('Tickets are generated 🎫')
    setTimeout(() => {
        mycallback('🚅')
    }, 100)
    console.log('Train is booked ✅')
}

function isArrived(arrived){
    console.log(`Train arrived: ${arrived}`)
} 

booking(isArrived)
console.log("Wait until train arrives...")