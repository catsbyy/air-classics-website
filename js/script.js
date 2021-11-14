const header = document.querySelector('.header');
const logo = document.querySelector('#logo');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const panel = document.querySelector('#largeImage');
const imgs = [...document.querySelectorAll('#thumbs img')];

imgs.forEach( el => {
    el.addEventListener('click', (e) => {
        const el = e.target;
        panel?.setAttribute('src', el.getAttribute('src').replace('small','large'));
        imgs.forEach( e => e.classList.remove('selected_picture'));
        el.classList.add('selected_picture');
    })
});

window.addEventListener('scroll', (e) => {
    if(window.scrollY > 0) {
        if(header.classList.contains('white')) return;
        header.classList.add('white');
        logo.setAttribute('src', 'img/dark-logo.png');
    } else {
        header.classList.remove('white');
        logo.setAttribute('src', 'img/logo.png');
    }
});

burger.addEventListener('click', (e) => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.classList.toggle('active');
    if(nav.classList.contains('active')){
        logo.setAttribute('src', 'img/dark-logo.png');
    } else {
        if (header.classList.contains('white')) {
            logo.setAttribute('src', 'img/dark-logo.png');
            return;
        }
        logo.setAttribute('src', 'img/logo.png');
    }
});

