import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonSoundOn,
    buttonSoundOff,
    minutesDisplay,
    secondsDisplay
} from "./elements.js"
import sounds from "./sounds.js";

const controls = Controls(
    {
        buttonStop, 
        buttonSet, 
        buttonPlay, 
        buttonPause
    }
);

const timer = Timer(
    {
        minutesDisplay,
        secondsDisplay,
        resetControls: controls.reset
    }
);

const sound = Sound()

buttonPlay.addEventListener("click", function(){
    controls.play()
    timer.countdown()
    sound.pressButton()
})

buttonPause.addEventListener("click", function(){
    controls.pause()
    timer.hold()
    sound.pressButton()
})

buttonStop.addEventListener("click", function(){
    controls.reset()
    timer.reset()
    sound.pressButton()
}) 

buttonSet.addEventListener("click", function(){
    let newMinutes = controls.getMinutes()

    if (!minutes) {
        timer.reset()
        return 
    }
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(minutes)
})

buttonSoundOn.addEventListener("click", function(){
    buttonSoundOn.classList.add("hide")
    buttonSoundOff.classList.remove("hide")
    sound.bgAudioPause().pause()
})

buttonSoundOff.addEventListener("click", function(){
    buttonSoundOn.classList.remove("hide")
    buttonSoundOff.classList.add("hide")
    sound.bgAudioStart().play()
})

