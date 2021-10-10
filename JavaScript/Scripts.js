function addition(){

    var n1 = Number(e1.value)
    var n2 = Number(e2.value)
    var result = window.document.querySelector('div#equal')

    var addition = n1 + n2
    result.innerHTML = `Your result is ${addition}.`
}
function subtraction(){

    var n1 = Number(e1.value)
    var n2 = Number(e2.value)
    var result = window.document.querySelector('div#equal')

    var subtraction = n1 - n2
    result.innerHTML = `Your result is ${subtraction}.`
}
function multiplication(){

    var n1 = Number(e1.value)
    var n2 = Number(e2.value)
    var result = window.document.querySelector('div#equal')

    var multiplication = n1 * n2
    result.innerHTML = `Your result is ${multiplication}.`
}
function division(){

    var n1 = Number(e1.value)
    var n2 = Number(e2.value)
    var result = window.document.querySelector('div#equal')

    var division = n1 / n2
    result.innerHTML = `Your result is ${division}.`
}
