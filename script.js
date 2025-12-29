// Geri sayım işlemi
let countdownValue = 10;
const countdownElement = document.getElementById("countdown");
const messageElement = document.getElementById("message");
const backgroundMusic = document.getElementById("background-music");
backgroundMusic.play();
// Zambak çiçeklerini yerleştirme fonksiyonu
function createFlower() {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.style.top = `${Math.random() * 100}vh`;  // Yüksekliği rastgele
    flower.style.left = `${Math.random() * 100}vw`; // Yatayda rastgele
    document.getElementById("flowers-container").appendChild(flower);
}

// Çiçekleri baştan her yerde yerleştirelim (500 tane çiçek)
for (let i = 0; i < 500; i++) {
    createFlower();
}

// Geri sayım başlatma
function startCountdown() {
    let countdownInterval = setInterval(function () {
        countdownElement.innerText = countdownValue;
        if (countdownValue === 0) {
             countdownElement.innerText = "";
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
    if (countdownValue <= 0) {
            clearInterval(countdownInterval); // Geri sayım durdurulacak
        }
        countdownValue--;
    }, 1000);
}
// Geri sayımı başlat
startCountdown();
