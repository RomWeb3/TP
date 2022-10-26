// Burger menu mobile

const burger = document.querySelector('.wrap-burger');
const closeMenu = document.querySelector('.close-menu');
const menuMobile = document.querySelector('.modal-menu');

burger.addEventListener('click', () => {
  menuMobile.classList.add('active');
});

closeMenu.addEventListener('click', () => {
  menuMobile.classList.remove('active');
});


// Realisations switch theme

const btnTerrassement = document.getElementById('btnTerrassement');
const btnAssainissement = document.getElementById('btnAssainissement');
const btnVrd = document.getElementById('btnVrd');
const btnGoudronnage = document.getElementById('btnGoudronnage');
const terrassementImg = document.getElementById('terrassement');
const assainissementImg = document.getElementById('assainissement');
const vrdImg = document.getElementById('vrd');
const goudronnageImg = document.getElementById('goudronnage');



btnTerrassement.addEventListener('click', () => {
    terrassementImg.style.transform = 'translateX(0)';
    assainissementImg.style.transform = 'translateX(100%)';
    vrdImg.style.transform = 'translateX(200%)';
    goudronnageImg.style.transform = 'translateX(300%)';
    btnTerrassement.style.background = '#ffe718';
    btnAssainissement.style.background = 'none';
    btnVrd.style.background = 'none';
    btnGoudronnage.style.background = 'none';
});

btnAssainissement.addEventListener('click', () => {
    terrassementImg.style.transform = 'translateX(-100%)';
    assainissementImg.style.transform = 'translateX(0)';
    vrdImg.style.transform = 'translateX(100%)';
    goudronnageImg.style.transform = 'translateX(200%)';
    btnTerrassement.style.background = 'none';
    btnAssainissement.style.background = '#ffe718';
    btnVrd.style.background = 'none';
    btnGoudronnage.style.background = 'none';
});

btnVrd.addEventListener('click', () => {
    terrassementImg.style.transform = 'translateX(-200%)';
    assainissementImg.style.transform = 'translateX(-100%)';
    vrdImg.style.transform = 'translateX(0)';
    goudronnageImg.style.transform = 'translateX(100%)';
    btnAssainissement.style.background = 'none';
    btnTerrassement.style.background = 'none';
    btnVrd.style.background = '#ffe718';
    btnGoudronnage.style.background = 'none';
});

btnGoudronnage.addEventListener('click', () => {
    terrassementImg.style.transform = 'translateX(-300%)';
    assainissementImg.style.transform = 'translateX(-200%)';
    vrdImg.style.transform = 'translateX(-100%)';
    goudronnageImg.style.transform = 'translateX(0)';
    btnAssainissement.style.background = 'none';
    btnTerrassement.style.background = 'none';
    btnVrd.style.background = 'none';
    btnGoudronnage.style.background = '#ffe718';
});


// Modal Carousel

const carousel = document.querySelector('.carousel');
const openModal = document.querySelectorAll('.wrap');
const modalImg = document.querySelectorAll('.modalImg');

openModal.forEach(button => {
button.addEventListener('click', () => {
    carousel.classList.add('active');
    for (let i = 0; i < modalImg.length; i++) {
        let img = modalImg[i];
        img.src = img.src
        .replace('Assainissement', 'Terrassement')
        .replace('vrd', 'Terrassement')
        .replace('Goudronnage', 'Terrassement');
    }
})
});


const openModal2 = document.querySelectorAll('.wrap2');

openModal2.forEach(button => {
button.addEventListener('click', () => {
    carousel.classList.add('active');
    for (let i = 0; i < modalImg.length; i++) {
        let img = modalImg[i];
        img.src = img.src
        .replace('Terrassement', 'Assainissement')
        .replace('vrd', 'Assainissement')
        .replace('Goudronnage', 'Assainissement');
    }
})
});

const openModal3 = document.querySelectorAll('.wrap3');

openModal3.forEach(button => {
button.addEventListener('click', () => {
    carousel.classList.add('active');
    for (let i = 0; i < modalImg.length; i++) {
        let img = modalImg[i];
        img.src = img.src
        .replace('Terrassement', 'vrd')
        .replace('Assainissement', 'vrd')
        .replace('Goudronnage', 'vrd');
    }
})
});

const openModal4 = document.querySelectorAll('.wrap4');

openModal4.forEach(button => {
button.addEventListener('click', () => {
    carousel.classList.add('active');
    for (let i = 0; i < modalImg.length; i++) {
        let img = modalImg[i];
        img.src = img.src
        .replace('Terrassement', 'Goudronnage')
        .replace('Assainissement', 'Goudronnage')
        .replace('vrd', 'Goudronnage');
    }
})
});

const buttons = document.querySelectorAll('[data-carousel-button]');


buttons.forEach(button => {
    button.addEventListener("click", () => {
        
            const offset = button.dataset.carouselButton === 'next' ? 1 : -1
            const slides = button
                .closest('[data-carousel]').querySelector('[data-slides]')
      
            const activeSlide = slides.querySelector('[data-active]')
            let newIndex = [...slides.children].indexOf(activeSlide) + offset
            if (newIndex < 0) newIndex = slides.children.length - 1
            if (newIndex >= slides.children.length) newIndex = 0

            slides.dataset.active = true
            slides.children[newIndex].dataset.active = true
            delete activeSlide.dataset.active
    })
});

const imagesModal = document.querySelectorAll('.modalImg');

carousel.addEventListener('click', (e) => {
    if (!e.target.closest('.modalImg') && !e.target.closest('[data-carousel-button]')) {
        carousel.classList.remove('active');
    }
})



