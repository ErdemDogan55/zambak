// Geri sayım işlemi
let countdownValue = 10;
const countdownElement = document.getElementById("countdown");
const messageElement = document.getElementById("message");
const backgroundMusic = document.getElementById("background-music");
backgroundMusic.src = 'https://github.com/ErdemDogan55/zambak/blob/main/Yeni%20proje.mp3';
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

