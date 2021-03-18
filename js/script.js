"use strict" 

document.addEventListener('DOMContentLoaded', () => {
    const arrowDown = document.querySelector('.out-more'),
          activities = document.querySelector('.activities');
        arrowDown.addEventListener('click', () => {
            activities.scrollIntoView({top: 'start', behavior: 'smooth'});
        });
            console.log(window.pageYOffset);

    

});