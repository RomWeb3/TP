// Burger menu mobile

const body = document.querySelector('body');
const burger = document.querySelector('.wrap-burger');
const closeMenu = document.querySelector('.close-menu');
const menuMobile = document.querySelector('.modal-menu');

burger.addEventListener('click', () => {
  menuMobile.classList.add('active');
  body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
  menuMobile.classList.remove('active');
  body.style.overflow = 'auto';
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
const carousel2 = document.querySelector('.carousel2');
const carousel3 = document.querySelector('.carousel3');
const carousel4 = document.querySelector('.carousel4');
const openModal = document.querySelectorAll('.wrap');
const modalImg = document.querySelectorAll('.modalImg');

openModal.forEach(button => {
    button.addEventListener('click', () => {
        carousel.classList.add('active');
    });
});

function resetCarousel(carousel) {
    const slides = carousel.querySelector("[data-slides]");
    const allSlides = slides.querySelectorAll('.modalImg');
    
    // Retire data-active de toutes les images
    allSlides.forEach(slide => {
        delete slide.dataset.active;
    });
    
    // Remet data-active sur la première image
    if (allSlides.length > 0) {
        allSlides[0].dataset.active = true;
    }
}

document.querySelectorAll('.imagesT img').forEach((img) => {
    img.addEventListener('click', () => {
        const index = parseInt(img.getAttribute('data-image'));
        const slides = carousel.querySelector("[data-slides]");
        const allSlides = slides.querySelectorAll('.modalImg');
        
        // Retire data-active de toutes les images
        allSlides.forEach(slide => {
            delete slide.dataset.active;
        });
        
        // Ajoute data-active à l'image correspondante
        if (allSlides[index]) {
            allSlides[index].dataset.active = true;
        }
        
        carousel.classList.add('active');
    });
});

carousel.addEventListener('click', (e) => {
    if (!e.target.closest('.modalImg') && !e.target.closest('[data-carousel-button]')) {
        carousel.classList.remove('active');
        resetCarousel(carousel);
    }
});

// Gestion des autres modals
const openModal2 = document.querySelectorAll('.wrap2');

openModal2.forEach(button => {
    button.addEventListener('click', () => {
        carousel2.classList.add('active');
    });
});

const openModal3 = document.querySelectorAll('.wrap3');

openModal3.forEach(button => {
    button.addEventListener('click', () => {
        carousel3.classList.add('active'); 
    });
});

const openModal4 = document.querySelectorAll('.wrap4');

openModal4.forEach(button => {
    button.addEventListener('click', () => {
        carousel4.classList.add('active');
    });
});

const buttons = document.querySelectorAll('[data-carousel-button]');

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
        const activeSlide = slides.querySelector('[data-active]');
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) {
            newIndex = slides.children.length - 1;
        } 
        if (newIndex >= slides.children.length) {
            newIndex = 0;
        }

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    });
});

const imagesModal = document.querySelectorAll('.modalImg');

carousel.addEventListener('click', (e) => {
    if (!e.target.closest('.modalImg') && !e.target.closest('[data-carousel-button]')) {
        carousel.classList.remove('active');
    }
});

carousel2.addEventListener('click', (e) => {
    if (!e.target.closest('.modalImg') && !e.target.closest('[data-carousel-button]')) {
        carousel2.classList.remove('active');
    }
});

carousel3.addEventListener('click', (e) => {
    if (!e.target.closest('.modalImg') && !e.target.closest('[data-carousel-button]')) {
        carousel3.classList.remove('active');
    }
});

carousel4.addEventListener('click', (e) => {
    if (!e.target.closest('.modalImg') && !e.target.closest('[data-carousel-button]')) {
        carousel4.classList.remove('active');
    }
});