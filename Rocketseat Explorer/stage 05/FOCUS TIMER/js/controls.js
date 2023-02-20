export default function Controls ({ 
        buttonStop, 
        buttonSet, 
        buttonPlay, 
        buttonPause 
    })
{
    
    function play(){
        buttonPlay.classList.add("hide")
        buttonPause.classList.remove("hide")
        buttonStop.classList.remove("hide")
        buttonSet.classList.add("hide")
    }

    function pause(){
        buttonPause.classList.add("hide")
        buttonPlay.classList.remove("hide")
    }
    
    function reset(){
        buttonStop.classList.add("hide")
        buttonSet.classList.remove("hide")
        buttonPlay.classList.remove("hide")
        buttonPause.classList.add("hide")
    }

    function getMinutes(){
        let newMinutes = prompt("Quantos minutos?")
        if(!newMinutes){
            return false
        }
        return newMinutes
    }

    return { reset, play, pause, getMinutes  }
}

