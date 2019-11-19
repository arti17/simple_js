//=================1==================================

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


//=================2==================================

numArray1 = [1, 5, 12, 4, 3]
numArray2 = [2, 3, 4, 5, 6, 7, 8, 9, 10]
numArray3 = [3, 10, 17]

function average(array) {
    let count = 0
    for(let i = 0; i < array.length; i++) {
        count += array[i]
    }

    return count / array.length
}

console.log(average(numArray1))
console.log(average(numArray2))
console.log(average(numArray3))


//=================3==================================

const answer = prompt('У квадратного стола отпилили один угол. Сколько теперь углов у него стало?')

if(answer == 5 || answer.toLowerCase() === 'пять') {
    alert('Ответ верный')
} else {
    alert('Ответ неверный')
}


//=================4==================================


Duck = {
    name: 'Дональд',
    color: 'белый',
    old: 1,
    toStr: function () {
        return `${this.name}, ${this.color}, ${this.old}`
    },
    say: function () {
        return 'кря кря'
    }
}

console.log(Duck.toStr())
console.log(Duck.say())
