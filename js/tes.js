const slides = document.querySelectorAll('.tes');
const lebarLayar = document.querySelector('.image').clientWidth+5;
const parent = document.querySelector('.images');

slides.forEach(function (slide) {
    slide.addEventListener('click',function(e) {
        parent.scrollLeft += slide.className == 'prev tes' ? -lebarLayar : lebarLayar;
    });
});

const gambar = document.querySelector('.gambar-gambar :nth-child(5)');