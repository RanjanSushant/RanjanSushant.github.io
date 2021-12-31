const textEl = document.querySelector(".auto-text")


const text = "Welcome to the Matrix"
let idx = 1

// writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    // setTimeout(writeText, 300)
}

setInterval(writeText, 150)