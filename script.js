
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
const access = document.getElementById("dua");
const slideEmpat = document.getElementById('slideEmpat');
const tidak = document.getElementById('tidak');
const ya = document.getElementById('ya');
const terimakasih = document.getElementById('terimakasih');
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
    sectionDua.classList.remove('d-none');
    access.scrollIntoView({ behavior: 'smooth' }, true);
    audio.play();
    open.classList.add('d-none')
    floatingButtonContainer.classList.remove('d-none')
    AOS.init();
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

function getRandomPosition(element) {
    var x = document.body.offsetHeight - element.clientHeight;
    var y = document.body.offsetWidth - element.clientWidth;
    var randomX = Math.floor(Math.random() * 500);
    var randomY = Math.floor(Math.random() * y);
    return [randomX, randomY];
};


tidak.addEventListener('click', function () {
    slideEmpat.classList.remove('translate-middle', 'top-50', 'start-50');
    var xy = getRandomPosition(slideEmpat);
    slideEmpat.style.top = xy[0] + 'px';
    slideEmpat.style.left = xy[1] + 'px';
});

ya.addEventListener('click', function () {
    slideEmpat.classList.add('d-none');
    terimakasih.classList.remove('d-none');
    AOS.init();
});

const footer = document.getElementById("credit");
footer.innerHTML = "Adam Mukti";
footer.href = "https://www.instagram.com/adamukti/";

