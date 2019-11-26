const url = 'https://restcountries.eu/rest/v2/all'

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

function renderData(data) {
    const tbody = $('tbody')

    for(let i = 0; i < data.length; i++) {
        row = $(document.createElement('tr'))
        columnCountry = $(document.createElement('td'))
        columnLink = $(document.createElement('td'))
        link = $(document.createElement('a'))
        columnCountry.addClass('collapsing')
        columnLink.addClass('collapsing')
        link.attr('href', 'counry.html?alpha=' + data[i].alpha3Code)
        link.text('More...')
        columnLink.append(link)
        columnCountry.append(data[i].name)
        row.append(columnCountry)
        row.append(columnLink)
        tbody.append(row)
    }
}

$(document).ready(function () {
    loadData()
})