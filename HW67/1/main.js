function getRandom() {
  return Math.floor(Math.random() * (21))
}

setInterval(function () {
    child = `<div class="element">${getRandom()}</div>`
    $('#container').append(child)
}, 5000)
