let calculateBtn = document.querySelector('#btn')
let weightValue = document.querySelector('#weight')
let heightValue = document.querySelector('#height')
let screen = document.querySelector('#screen')

// BMI = kg/m**2

calculateBtn.addEventListener('click', () => {
    let weight = parseFloat(weightValue.value)
    let height = parseFloat(heightValue.value)
    let result = ((weight)/(height**2)).toFixed(2)
    screen.value = result
})


