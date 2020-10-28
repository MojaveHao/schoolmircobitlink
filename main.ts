input.onButtonPressed(Button.A, function () {
    radio.sendString("danghter")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "danghter") {
        basic.showString("danghter")
    } else if (receivedString == "safe") {
        basic.showString("safe")
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("safe")
})
radio.setGroup(1)
