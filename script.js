// Geri sayım işlemi
let countdownValue = 10;
const countdownElement = document.getElementById("countdown");
const messageElement = document.getElementById("message");
const backgroundMusic = document.getElementById("background-music");

// Zambak çiçeklerini yerleştirme fonksiyonu
function createFlower() {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.style.top = `${Math.random() * 100}vh`;
    flower.style.left = `${Math.random() * 100}vw`;
    document.getElementById("flowers-container").appendChild(flower);
}

// Çiçekleri her 2 saniyede bir yarat
setInterval(createFlower, 2000);

// Geri sayım başlatma
function startCountdown() {
    let countdownInterval = setInterval(function () {
        countdownElement.innerText = countdownValue;
        if (countdownValue === 0) {
            clearInterval(countdownInterval);
            setTimeout(() => {
                messageElement.innerText = "HERKES YENİ YILA";
                messageElement.style.opacity = 1;
                setTimeout(() => {
                    messageElement.innerText = "SEN YILLARIMA";
                    messageElement.style.opacity = 1;
                }, 3000);
            }, 1000);
        }
        countdownValue--;
    }, 1000);
}

// Müzik 41. saniyeden sonra başlasın
setTimeout(() => {
    backgroundMusic.play();
}, 41000);

// Geri sayımı başlat
startCountdown();
