input.onButtonPressed(Button.A, function () {
    music.play(music.tonePlayable(131, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Heart)
    step_count += 1
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(step_count * step_length)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(step_count)
})
let step_length = 0
let step_count = 0
step_count = 0
step_length = 0.6
basic.showNumber(0)
music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
