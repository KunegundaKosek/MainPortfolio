// alert("Hasło: user")

const input = document.getElementById("pass")
const div = document.querySelector('.message')
const password = "user"
const message = "mam dwa kotki i świnkę"

input.addEventListener('input', (e) => {



    

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