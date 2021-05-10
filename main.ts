let c = 0
let a = 0
let b = 0
input.onButtonPressed(Button.A, function () {
    c = a + b
    basic.showNumber(c)
    a = b
    b = c
})
input.onButtonPressed(Button.AB, function () {
    c = 0
    a = 0
    b = 1
    basic.showNumber(b)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(c)
})
