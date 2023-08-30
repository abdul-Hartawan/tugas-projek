const slides = document.querySelectorAll('.tes');
const lebarLayar = document.querySelector('.image').clientWidth+5;
const parent = document.querySelector('.images');

slides.forEach(function (slide) {
    slide.addEventListener('click',function(e) {
        parent.scrollLeft += slide.className == 'prev tes' ? -lebarLayar : lebarLayar;

        if (slide.className == 'prev tes') {
            parent.scrollLeft = parent.scrollLeft - lebarLayar;
        } else {
            parent.scrollLeft = parent.scrollLeft + lebarLayar;
        }
    });
});

const html = document.querySelector('html');
const navBawah = document.querySelector('.nav-bawah');

window.addEventListener('scroll',function () {
    if (html.scrollTop >= 45) {
        navBawah.style.position = 'fixed';
        navBawah.style.top = '0';
    }
    else {
        navBawah.style.position = 'absolute';
        navBawah.style.top = '45px';
    }
    
})

