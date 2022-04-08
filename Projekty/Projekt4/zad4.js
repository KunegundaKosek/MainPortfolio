alert("Kliknij START aby zwiekszyć czcionke")

const btn = document.querySelector("button")
const liItems = document.querySelectorAll("li")
let fontSize = 10;

// btn.addEventListener("click", () => {
//     // console.log("działa")
//     fontSize++
//     for(let i = 0; i < liItems.length; i++) {
//         // if(liItems[i].style.display === "") {
//         //     liItems[i].style.display = "block"
//         // }
//         liItems[i].style.display = "block"
//         liItems[i].style.fontSize = `${fontSize}px`
//     }
// })

//FOREACH
btn.addEventListener("click", () => {
    fontSize++
    liItems.forEach((liItem) => {
        liItem.style.display = "block"
        liItem.style.fontSize = fontSize + "px"
    })
    fontSize++
})


