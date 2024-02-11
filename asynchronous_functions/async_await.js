function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('BOOM 💥')
        }, 100)
    })
}

async function runit(){
    const result = await getData()
    // always use await inside an asyncfunc
    console.log(result)
}

async function willreturnpromise(){
    return 'This is promise 🤝'
}

runit()
str = willreturnpromise()     
console.log(str)