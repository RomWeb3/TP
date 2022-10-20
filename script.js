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
    terrassementImg.style.transform = 'scale(1)';
    assainissementImg.style.transform = 'scale(0)';
    vrdImg.style.transform = 'scale(0)';
    goudronnageImg.style.transform = 'scale(0)';
    btnTerrassement.style.background = '#ffe718';
    btnAssainissement.style.background = 'none';
    btnVrd.style.background = 'none';
    btnGoudronnage.style.background = 'none';
});

btnAssainissement.addEventListener('click', () => {
    assainissementImg.style.transform = 'scale(1)';
    terrassementImg.style.transform = 'scale(0)';
    vrdImg.style.transform = 'scale(0)';
    goudronnageImg.style.transform = 'scale(0)';
    btnTerrassement.style.background = 'none';
    btnAssainissement.style.background = '#ffe718';
    btnVrd.style.background = 'none';
    btnGoudronnage.style.background = 'none';
});

btnVrd.addEventListener('click', () => {
    vrdImg.style.transform = 'scale(1)';
    terrassementImg.style.transform = 'scale(0)';
    assainissementImg.style.transform = 'scale(0)';
    goudronnageImg.style.transform = 'scale(0)';
    btnAssainissement.style.background = 'none';
    btnTerrassement.style.background = 'none';
    btnVrd.style.background = '#ffe718';
    btnGoudronnage.style.background = 'none';
});

btnGoudronnage.addEventListener('click', () => {
    vrdImg.style.transform = 'scale(0)';
    terrassementImg.style.transform = 'scale(0)';
    assainissementImg.style.transform = 'scale(0)';
    goudronnageImg.style.transform = 'scale(1)';
    btnAssainissement.style.background = 'none';
    btnTerrassement.style.background = 'none';
    btnVrd.style.background = 'none';
    btnGoudronnage.style.background = '#ffe718';
});



