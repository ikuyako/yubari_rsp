input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    じゃんけん = 0
    basic.showNumber(3)
    music.playTone(294, music.beat(BeatFraction.Quarter))
    basic.pause(500)
    basic.showNumber(2)
    music.playTone(294, music.beat(BeatFraction.Quarter))
    basic.pause(500)
    basic.showNumber(1)
    music.playTone(294, music.beat(BeatFraction.Quarter))
    basic.pause(200)
    basic.showString("!")
    basic.pause(100)
    じゃんけん = randint(1, 3)
    if (じゃんけん == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    if (じゃんけん == 2) {
        basic.showLeds(`
            . . . . #
            # # . # .
            # # # . .
            # # . # .
            . . . . #
            `)
        music.playTone(330, music.beat(BeatFraction.Whole))
    }
    if (じゃんけん == 3) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        music.playTone(392, music.beat(BeatFraction.Whole))
    }
    basic.pause(5000)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
let じゃんけん = 0
basic.showString("Press A button!")
basic.showLeds(`
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    `)
