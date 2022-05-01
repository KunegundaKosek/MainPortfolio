// alert("Hasło: user")

const input = document.getElementById("pass")
const div = document.querySelector('.message')
const passwords = ["user", "wiosna", "Haslo"]
const messages = ["mam dwa kotki i świnkę", "piękna pora roku", "XDDDDDD"]

input.addEventListener('input', (e) => {
    div.textContent = ''
    const text = e.target.value
    passwords.forEach( (passwords, index) => {
        if(passwords === text) {
            div.textContent = messages[index]
            e.target.value = ''
        }
    })



    

    // if(password === e.target.value) {
    //     div.textContent = message
    //     e.target.value = ''
    // } else {
    //     div.textContent = ''
    // }
})

input.addEventListener('focus', (e) => {
    e.target.classList.add('active')
})

input.addEventListener('blur', (e) => {
    e.target.classList.remove('active')
})