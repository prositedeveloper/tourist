'use strict';

const nav = document.getElementById('nav');
const burger = document.getElementById('burger');

burger.addEventListener('click', function() {
    nav.classList.toggle('show');
})