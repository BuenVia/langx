const getGroupId = document.querySelector("#jsonData")
const groupId = JSON.parse(getGroupId.getAttribute("data-json"))
const url = `/api/practice/${groupId}`
let cardData

const initialize = async () => {
    await getData()
    card()
}

const getData = async () => {
    await fetch(url)
    .then(res => res.json())
    .then(data => cardData = data)
}

const card = () => {
    const sentEl = document.getElementById("sentEl")
    const playBtn = document.getElementById("playBtn")
    const sentText = document.getElementById("sentText")
    const goBtn = document.getElementById("goBtn")
    let index = 0

    sentEl.innerText = cardData[index]["sentence_eng"]

    playBtn.addEventListener("click", () => {
        playSentence(cardData[index]["sentence_spa"])
    })

    goBtn.addEventListener("click", () => {
        if (index < cardData.length - 1) {
            index += 1
            sentEl.innerText = cardData[index]["sentence_eng"]
        }
    })
}

const playSentence = (text, speed) => {
    const speech = new SpeechSynthesisUtterance
    if(speechSynthesis.speaking) return
    speech.lang = "es-ES"
    speech.text = text
    speech.rate = speed | 1
    speechSynthesis.speak(speech)
}

id("openBtn").addEventListener("click", () => {
    if (id("fullListBox").className === "closed") {
        id("fullListBox").classList = "opened"
    } else {
       id("fullListBox").classList = "closed"
    }
})

function id(element) {
    return document.getElementById(element)
}

initialize()