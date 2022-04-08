alert("Scroluj aby zwiekszyć!")

const square = document.createElement('div')
document.body.appendChild(square)

let grow = true;

let size = 10 //wielkosc kwadratu
square.style.width = size + "px"
// 100 + "px" -> 100px
square.style.height = size + "px"

//maksymalna wielkość kwadratu
//window.innerWidth * 0.5

window.addEventListener("scroll", function() {
    //size = size + 10;
    if(grow == true) {

        size += 5
        square.style.width = size + "px"
        square.style.height = size + "px"
    } else {
        size -= 5
        square.style.width = size + "px"
        square.style.height = size + "px"
    }

    if(size >= this.window.innerWidth / 2) {
        grow = false
    } else if (size <= 0) {
        
        grow = true
    }

})

