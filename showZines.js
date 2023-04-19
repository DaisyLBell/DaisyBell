//var showSpectrum = document.getElementById('show-spectrum');
//var showRenaissance = document.getElementById('show-renaissance');
//
//
//showSpectrum.addEventListener('click', function(){
//    document.querySelector(".spectrum-body").style.display = "block";
//});
//
//showRenaissance.addEventListener('click', function(){
//    document.querySelector(".renaissance-body").style.display = "block";
//        document.querySelector("#renaissance").style.marginTop = "3vw";
//
//});
//
//var closeSpectrum = document.getElementById('close-spectrum');
//var closeRenaissance = document.getElementById('close-renaissance');
//
//closeSpectrum.addEventListener('click', function(){
//    
//    document.querySelector(".spectrum-body").style.display = "none";
//    
//});
//
//closeRenaissance.addEventListener('click', function(){
//    
//    document.querySelector(".renaissance-body").style.display = "none";
//    
//});

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