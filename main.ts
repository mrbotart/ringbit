let strip = neopixel.create(DigitalPin.P0, 2, NeoPixelMode.RGB)
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(100)
    if (input.buttonIsPressed(Button.A)) {
        RingbitCar.forward()
    } else if (input.buttonIsPressed(Button.B)) {
        RingbitCar.back()
    } else {
        RingbitCar.brake()
    }
})
