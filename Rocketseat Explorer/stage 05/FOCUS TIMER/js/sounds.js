export default function() {
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")


    function pressButton(){
        buttonPressAudio.play()
    }
    function timeEnd(){
        kitchenTimer.play()
    }
    function bgAudioStart(){
        bgAudio.play()
    }
    function bgAudioPause(){
        bgAudio.pause()
    }
    return {
        pressButton,
        timeEnd,
        bgAudioStart,
        bgAudioPause
    }
}