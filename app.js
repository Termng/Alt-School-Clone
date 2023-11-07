let valueDisplays = document.querySelectorAll(".num");

let speed =  1000;

valueDisplays.forEach((counter) =>{
    function upData(){
        const target = Number (counter.getAttribute('data-val'))
        const count = Number(counter.innerText)
        const inc = target/speed
        if (count < target){
            counter.innerText= Math.floor(inc + count)
            setTimeout(upData, 1)

        }
        else {
            counter.innerText = target
        }

    }
    upData()
})

