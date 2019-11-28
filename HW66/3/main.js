const div = document.getElementById('container')

for(let i = 0; i < 5; i++) {
    div.innerHTML += `<div class="element">Element ${i + 1}</div>`
}
