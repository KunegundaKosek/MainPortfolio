const btn = document.querySelector('button')
const div = document.querySelector('div')

const names = ["Kunegunda", "Grzymisława", "Kira", "Hosanna", "India", "Truskawka", "Poziomka"]

const prefixs = ["Wydaje mi się", "Mam wrażenie", "Szczerze powiedziawszy, myślę", "Szczerze uważam", "Na 100% twierdzę", "Jestem pewien"]



//names[index]
const nameGenerator = () => {
    const indexName = Math.floor(Math.random() * names.length)
    const indexPrefixs = Math.floor(Math.random() * prefixs.length)
    div.textContent = `${prefixs[indexPrefixs]}, że najlepsze będzie imię ${names[indexName]}`
}
btn.addEventListener("click", nameGenerator)