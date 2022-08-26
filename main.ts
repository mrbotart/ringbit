let strip = neopixel.create(DigitalPin.P0, 2, NeoPixelMode.RGB)
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(100)
})
