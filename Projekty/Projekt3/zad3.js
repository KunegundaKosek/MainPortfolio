let size = 100
let growRect = true

document.body.style.height = "10000px"

const div = document.createElement("div")
document.body.appendChild(div)

div.style.position = "fixed"
div.style.top = 0
div.style.left = 0
div.style.width = "100%"
div.style.backgroundColor = "pink"
div.style.height = size + "px"

const changeHeight = function () {

    if(size > window.innerHeight / 2) {
        growRect = !growRect
        div.style.backgroundColor = "purple"
    } else if(size <= 0) {
        growRect = !growRect
        div.style.backgroundColor = "pink"
    }

    if (growRect) {
        size += 10
        div.style.height = size + "px"
    } else {
        size -= 10
        div.style.height = size + "px"
    }
}
window.addEventListener("scroll", changeHeight)

