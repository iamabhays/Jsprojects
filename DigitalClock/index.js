

function updateClock(){
const elem = document.querySelector(".clock")
const audio = document.querySelector("audio")
const time = new Date();
const options = {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute : "2-digit",
    second:"2-digit",
}
elem.textContent = time.toLocaleTimeString('en-US',options)
audio.play()
}

setInterval(updateClock,1000)