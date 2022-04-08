alert("Klikaj na ekran")

document.body.addEventListener('click', (event) => {
    console.log(event.cliextX, event.clientY)
    const color = getColor(event)
    document.body.style.backgroundColor = color


})

const getColor = (e) => {
    if(e.clientX % 2 === 0) {
        if(e.clientY % 2 === 0) {
            return "orange"
        }
    } else {
        if(e.clientY % 2 === 0) {
            return "pink"
        } else {
            return "yellow"
        }
        
    }
}