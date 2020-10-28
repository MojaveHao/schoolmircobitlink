input.onButtonPressed(Button.A, function () {
    radio.setGroup(1)
    radio.sendString("danghter")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "danger") {
        basic.showString("danger")
    } else if (receivedString == "safe") {
        basic.showString("safe")
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(1)
    radio.sendString("safe")
})
