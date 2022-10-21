"use strict";

//$(document).ready(function(){
//    $('.myProject').hover(function(){
//        $('.projectText').toggleClass('projectText-on');
//    })
//})

$(document).ready(function () {
    $('.project1').hover(function () {
        $('.project-1-Text').toggleClass('project-1-Text-on');
    });

    $('.project2').hover(function () {
        $('.project-2-Text').toggleClass('project-2-Text-on');
    });

    $('.project3').hover(function () {
        $('.project-3-Text').toggleClass('project-3-Text-on');
    });

    $('.project4').hover(function () {
        $('.project-4-Text').toggleClass('project-4-Text-on');
    });

    $('.project5').hover(function () {
        $('.project-5-Text').toggleClass('project-5-Text-on');
    });

    $('.project6').hover(function () {
        $('.project-6-Text').toggleClass('project-6-Text-on');
    });

    var menuOpen = document.getElementById('menuOpen');

    var menuClose = document.getElementById('menuClose');

    var menu = document.getElementById('menu');
    
    let x = 8;

    menuOpen.addEventListener('click', function () {
        menu.style.display = "block";
       
        console.log(x);
    });

    menuClose.addEventListener('click', function () {
        menu.style.display = "none";
    });

});
