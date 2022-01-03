const containerEl = document.querySelector(".container")
// const pEl = document.querySelector(".canvas-details")
const textEl = document.querySelector(".auto-text")
const redPill = document.querySelector(".red-pill-btn")
const bluePill = document.querySelector(".blue-pill-btn")


// pEl.style.display = "none"
const text = "Welcome to the Matrix"
let idx = 1

const canvas = document.querySelector('#matrix')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');
const fontSize = 16;
const columns = canvas.width/fontSize;

canvas.id = "matrix"
canvas.style.display = "none"
// console.log(canvas.width)


const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';
const alphabet = katakana + latin + nums;


const rainDrops = [];

let rainTimer;

// Typewriter effect

writeText()

// pEl.innerText = canvas.width + "," + canvas.height

function writeText() {
    
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        setTimeout(writeText, 1500)
        idx = 1
    } else {
        setTimeout(writeText, 150)
    }
}

// setInterval(writeText, 150)

//MAKING IT RAIN

function makeItRain() {
    for( let x = 0; x < columns; x++ ) {
        rainDrops[x] = 1;
    }
    
    const draw = () => {
        context.fillStyle = 'rgba(0, 0, 0, 0.05)';
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        context.fillStyle = '#0F0';
        context.font = fontSize + 'px monospace';
    
        for(let i = 0; i < rainDrops.length; i++)
        {
            const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
            
            if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    };
    
    rainTimer = setInterval(draw, 30);
}

// Red Pill functionality

function loadRedPillPage() {
    // pEl.innerText = canvas.width + "," + canvas.height
    containerEl.style.display = "none"
    canvas.style.display = "block"
    // containerEl.remove()
    makeItRain()
    setTimeout(function(){
        // clearInterval(rainTimer)
        document.body.classList.add("fade-out")
        location.replace('red-pill.html')
    }, 6000)
}

function loadBluePillPage() {
    // pEl.innerText = canvas.width + "," + canvas.height
    containerEl.style.display = "none"
    canvas.style.display = "block"
    // containerEl.remove()
    makeItRain()
    setTimeout(function(){
        // clearInterval(rainTimer)
        document.body.classList.add("fade-out")
        location.replace('blue-pill.html')
    }, 6000)
}

redPill.addEventListener("click", loadRedPillPage)
bluePill.addEventListener("click", loadBluePillPage)