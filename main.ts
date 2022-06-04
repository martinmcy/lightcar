basic.showNumber(input.lightLevel())
basic.forever(function () {
    if (input.lightLevel() > 40) {
        pins.servoSetPulse(AnalogPin.P1, 180)
    } else {
        pins.servoSetPulse(AnalogPin.P1, 0)
    }
    if (input.lightLevel() < 40) {
        pins.servoSetPulse(AnalogPin.P1, 180)
    } else {
        pins.servoSetPulse(AnalogPin.P1, 1)
    }
    if (input.isGesture(Gesture.LogoDown)) {
        pins.servoSetPulse(AnalogPin.P1, 0)
    }
})

