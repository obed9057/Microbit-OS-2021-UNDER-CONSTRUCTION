input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . #
        # # . # #
        # . # . #
        # . . . #
        # . . . #
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # #
        # # . # #
        # . # . #
        # # . # #
        # . . . #
        `)
    basic.pause(5000)
    basic.clearScreen()
    basic.showString("Enter a string of code to run .....")
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . # .
        . # . # .
        . . # # .
        . . . # .
        . . . # #
        `)
    basic.pause(5000)
    basic.showString("DESKTOP NOT FOUND SET UP MI03 BEFORE GOING TO DESKTOP. Press a to continue.")
    basic.pause(5000)
    basic.pause(5000)
    basic.showString(" Why are you still here?? is this an error are you trying to enter the prompt ok fine but i warn you this is dangerous")
    basic.pause(5000)
    basic.showLeds(`
        # . . . .
        . # . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(5000)
    basic.showString("Error Update Required Checking for Updates...")
    basic.pause(5000)
    basic.showString("You cannot use the *Prompt* Because updates are still being worked on by the Full Power Tech Developer Team Please try again later Press A+B To go Home.")
    basic.clearScreen()
})
basic.showLeds(`
    # # . # #
    # . # . #
    # . # . #
    # # # # #
    # . # . #
    `)
basic.pause(5000)
basic.showLeds(`
    . . . . .
    . # # # .
    . # . # .
    . # # # .
    . . . . .
    `)
basic.pause(5000)
basic.showString("Loading..")
basic.pause(5000)
basic.showLeds(`
    # # # # #
    . # # # .
    . # . # .
    # . . . #
    # # # # #
    `)
basic.pause(5000)
music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.ForeverInBackground)
let taskbar = 8
basic.clearScreen()
basic.showLeds(`
    # . # . #
    . # # # .
    . # # # .
    # . # . #
    # # # # #
    `)
basic.pause(5000)
basic.showLeds(`
    . . . . .
    # # # # .
    # . . . .
    . # # # .
    # # . . .
    `)
basic.pause(5000)
basic.showString("MI03 V.0.1")
basic.pause(5000)
basic.showString("Ready To Code")
basic.pause(5000)
basic.showString("Welcome system version MI03 V.0.1  has been installed on MICROBIT(D)")
basic.pause(5000)
basic.showString("Welcome to Microbit OS V.1.0")
basic.pause(5000)
basic.showLeds(`
    # # . . #
    # . # # #
    # . # . #
    # # . . #
    # . . . #
    `)
basic.showString("Error 409 The disk you entered has not been found check if it is connected if it is press restart..")
basic.pause(5000)
basic.showLeds(`
    . # . # .
    . # . # .
    # # # # #
    . # . # .
    . # . # .
    `)
basic.pause(5000)
basic.showString("Restarting......")
basic.clearScreen()
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . #
    # # # # #
    # # . # #
    # # # # #
    # . . . .
    `)
basic.showString("Welcome to MI03 to get started press a to continue to skip to desktop press b. to go to home screen press A+B")
basic.forever(function () {
	
})
