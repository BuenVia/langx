let cardData

const url = '/api/practice?group=1'

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

    goBtn.addEventListener("click", () => {
        if (index < cardData.length - 1) {
            index += 1
            sentEl.innerText = cardData[index]["sentence_eng"]
        }
    })
}



initialize()