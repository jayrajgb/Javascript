let name = getname()
console.log(name)   // This is will return undefined, since getname is asynchronous

function getname(){
    setTimeout(()=>{
        return 'Jayraj'
    })
}

// One solution to the problem is to use callbacks,
// Callbacks is nothing but passing function as an argument to another function

getname(printfunction)

function printfunction(myname){
    console.log(myname)
}

function getname(mycallback){
    setTimeout(()=>{
        mycallback('Jayraj')
    })
}

// But the problem with callbacks is that, 
// how many times would you call a function under another function?
// This will eventually lead to callback hell
// Hence, use Promises!


/*******PROMISES********/

// Promise Maker <==> Promise Receiver
// Maker is asynchronous function

// Example: 
// The ticket that you bought for your train is a promise.
// The ticket doesn't bring you the train straight away.
// Instead, through the ticket it promises your journey will be accomplished in meantime.

// Further it can be solved through 'resolve' and 'reject' depending upon the job is finished successfully or not.

// This can be reffered to as 'resolve' function of Promises.
// Whereas, if the function/promise is not run as expected or did not fetch what was wanted.
// It uses 'reject' function of Promises.
// But, one thing is sure!, that it will definitely return something.

// Therefore, when we call a promise function, 
// it will not return the data, instead it will the promise of the data!

