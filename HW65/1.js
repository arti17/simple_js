array = ['молоко', 'пиво', 'пиво', 'молоко', 'молоко']

for(let i = 0; i < array.length; i++) {
    if(array[i] === 'молоко') {
        console.log('Хорошо')
    }
    else if(array[i] === 'пиво') {
        console.log('Плохо')
    } else {
        console.log('Я не знаю это хорошо или плохо(')
    }
}
