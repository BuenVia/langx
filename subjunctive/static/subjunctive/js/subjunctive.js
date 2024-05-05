const x = window.location.pathname
const y = new URLSearchParams()
console.log(x)


const initialize = async () => {
    await getData()
}

const url = '/api/practice?group=1'
const getData = async () => {
    await fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}


initialize()