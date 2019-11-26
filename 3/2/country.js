const urlParams = new URLSearchParams(window.location.search)
const param = urlParams.get('alpha')
const url = 'https://restcountries.eu/rest/v2/alpha/' + param


function renderData(data) {
    const title = $('title')
    title.text('Country - ' + data.name)

    const divImage = $('.image')
    const image = $(document.createElement('img'))
    image.attr('src', data.flag)
    divImage.append(image)

    const divContent = $('.content')
    const country = $(document.createElement('a'))
    country.addClass('header')
    country.text(data.name)
    divContent.append(country)

    const divMeta = $(document.createElement('div'))
    divMeta.addClass('meta')
    const region = $(document.createElement('span'))
    region.text(data.region)
    divMeta.append(region)
    divContent.append(divMeta)

    const divDescription = $(document.createElement('div'))
    divDescription.addClass('description')
    const capital = $(document.createElement('p'))
    capital.text('Capital: ' + data.capital)
    const code = $(document.createElement('p'))
    code.text('Alpha3Code: ' + data.alpha3Code)
    const population = $(document.createElement('p'))
    population.text('Population: ' + data.population)

    const borders = $(document.createElement('p'))
    borders.text('Borders: ')

    for(let i = 0; i < data.borders.length; i++) {
        const link = $(document.createElement('a'))
        link.attr('href', 'counry.html?alpha=' + data.borders[i])
        link.text(data.borders[i] + ', ')
        borders.append(link)
    }

    divDescription.append(capital, code, population, borders)
    divContent.append(divDescription)
}

function loadData() {
    $.ajax({
        url: url,
        method: 'GET',
        success: function (response, status) {
            renderData(response)
        },
        error: function (response, status) {
            console.log(status)
        }
    })
}

$(document).ready(function () {
    loadData()
})
