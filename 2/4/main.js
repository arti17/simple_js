const container = document.getElementById('container')
const btn = document.getElementById('add-item-btn')

btn.addEventListener('click', function () {
    container.innerHTML += '<div class="element">Element</div>'
})
