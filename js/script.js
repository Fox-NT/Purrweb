"use strict" 

document.addEventListener('DOMContentLoaded', () => {
    const arrowDown = document.querySelector('.out-more'),
          activities = document.querySelector('.activities');
        arrowDown.addEventListener('click', () => {
            activities.scrollIntoView({top: 'start', behavior: 'smooth'});
        });
            console.log(window.pageYOffset);

    
            const burger = document.querySelector('.burger'),
            menu = document.querySelector('.burger_menu'),
            list = document.querySelector('.burger_menu .nav_list'),
            body = document.querySelector('body');
    
            burger.addEventListener('click', () => {
                menu.classList.toggle('visible_mobile');
                burger.classList.toggle('burger_active');
                body.classList.toggle('over');
                list.classList.toggle('nav_list_active');
            });
});