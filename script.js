const open = document.querySelector('.open');
const right = document.querySelector('.right');
const nama = document.querySelector('.nama');
const kotak = document.querySelector('.kotak');
const content = document.querySelector('.content');
const copyright = document.querySelector('.footer');
const floatingButtonContainer = document.querySelector('.floating-button-container');
const sectionSatu = document.getElementById('satu');
const sectionDua = document.getElementById('dua');
const btnAudio = document.getElementById("btn-audio");
const audio = document.getElementById("audio");
const url_string = document.URL;
const url = new URL(url_string);
const timer = document.getElementById('timer');
const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
let countDown = new Date('2023-08-13T00:00:00').getTime(),
    x = setInterval(function () {
        let now = new Date().getTime(),
            distance = countDown - now;
        const d = Math.floor(distance / (day));
        const h = Math.floor(distance % (day) / (hour));
        const m = Math.floor((distance % (hour)) / (minute));
        const s = Math.floor((distance % (minute)) / second);
        document.getElementById('days').innerText = d < 10 ? '0' + d : d;
        document.getElementById('hours').innerText = h < 10 ? '0' + h : h;
        document.getElementById('minutes').innerText = m < 10 ? '0' + m : m;
        document.getElementById('seconds').innerText = s < 10 ? '0' + s : s;

        if (distance < 0) {
            clearInterval(x);
        }

    }, second);
let namaUndangan;

if (url.searchParams.get('to') != null) {
    namaUndangan = url.searchParams.get('to');
} else {
    namaUndangan = "Tamu Undangan";
}

nama.innerHTML = namaUndangan;

open.addEventListener('click', function () {
    audio.play();
    sectionSatu.classList.add('d-none')
    sectionDua.classList.add('animate__slideInUp')
    sectionDua.classList.remove('d-none')
    floatingButtonContainer.classList.remove('d-none')
    // content.style.backgroundImage = `url(bg_flower.jpg)`;
    // document.body.style.color = '#354259';
    // copyright.classList.remove('text-white');
    // copyright.style.color = 'blue';
});

btnAudio.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        btnAudio.innerHTML = `<i class="fas fa-volume-up"></i>`;
    } else {
        audio.pause();
        btnAudio.innerHTML = `<i class="fas fa-volume-mute"></i>`;
    }
});

let footer = document.getElementById("credit");
footer.innerHTML = "Adam Mukti";
footer.href = "https://www.instagram.com/adamukti/";

