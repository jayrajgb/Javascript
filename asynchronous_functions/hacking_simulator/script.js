const arr = ['Initialized Hacking', 'Reading All Files', 'Fetching Data', 'Copying All Files', 'Export initialized', 'Cleaning Up', 'Boom']

function delay(){
    return new Promise((resolve, reject) => {
        timeout = 1 + 4*Math.random()
        setTimeout(()=>{
            resolve()
        }, timeout*1000)
    })
}

async function addLine(line){
    await delay()
    const printsection = document.getElementById('print')
    const classname = 'line'
    printsection.innerHTML = printsection.innerHTML + `<div class=${classname}>${line}</div>`
}

async function main(){
    // const interval = setInterval(()=>{
    //     let last = document.body.getElementsByTagName("div")
    //     last = last[last.length - 1]
    //     if(last.innerHTML.endsWith(".....")){
    //         last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 5)
    //     }
    //     else{
    //         last.innerHTML = last.innerHTML + "."
    //     }
    // }, 100)

    let interval
    
    for (const element of arr) {
        await addLine(element)
        let dots = document.body.getElementsByClassName("line")
        let lines = Array.from(dots)
        lines.forEach(e => {
            clearInterval(interval)
            interval = setInterval(()=>{
                // if(e.innerHTML.endsWith(".....")){
                //     e.innerHTML = e.innerHTML.slice(0, e.innerHTML.length - 5)
                // }
                e.innerHTML = e.innerHTML + "."
            }, 100)
            if(e.innerHTML.endsWith(".")){
                for (let i = e.innerHTML.length - 1; i >= 0; i--) {
                    if(e.innerHTML[i] == "."){
                        e.innerHTML = e.innerHTML.slice(0, e.innerHTML.length - 1)
                    }
                }
            }
        });
    }
    
    clearInterval(interval)

}

main()
