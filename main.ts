input.onButtonPressed(Button.A, function () {
    if (etat_actuel != etat_passe) {
        etat_actuel = 0
    }
    basic.showIcon(IconNames.Yes)
})
let etat_passe = 0
let etat_actuel = 0
basic.showIcon(IconNames.Yes)
let nombre = 0
etat_actuel = 0
etat_passe = 0
basic.forever(function () {
    etat_actuel = pins.digitalReadPin(DigitalPin.P16)
    if (etat_actuel != etat_passe) {
        if (etat_actuel == 1) {
            basic.showIcon(IconNames.No)
        } else {
            basic.showIcon(IconNames.Yes)
        }
    }
})
basic.forever(function () {
	
})
