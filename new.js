
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
};



//let quoteIndex = 1;
//showSlides(quoteIndex);
//
//function plusQuotes(m) {
//  showSlides(quoteIndex += m);
//}
//
//// Thumbnail image controls
//function currentQuote(m) {
//  showSlides(quoteIndex = m);
//}
//
//function plusQuotes(m) {
//  let i;
//  let quotes = document.getElementsByClassName("quote1");
//  let dots = document.getElementsByClassName("IBDquotes");
//    
//  if (m > quotes.length) {quoteIndex = 1}
//  if (m < 1) {quoteIndex = quotes.length}
//  for (i = 0; i < quotes.length; i++) {
//    quotes[i].style.display = "none";
//  }
//  for (i = 0; i < dots.length; i++) {
//    dots[i].className = dots[i].className.replace(" here", "");
//  }
//  quotes[quoteIndex-1].style.display = "block";
//  dots[quoteIndex-1].className += " here";
//};
 


//let image1 = document.getElementById('ch2-img-1');
//
//let image2 = document.getElementById('ch2-img-2');
//
//let image3 = document.getElementById('ch2-img-3');
//
//let image4 = document.getElementById('ch2-img-4');
//
//image1.addEventListener('click', function() {
//    document.getElementById("#ch2-img-1").style.display = "none";
//    document.getElementById("#ch2-img-2").style.display = "block";
//});
//
//image2.addEventListener('click', function() {
//    document.getElementById("#ch2-img-2").style.display = "none";
//    document.getElementById("#ch2-img-3").style.display = "block";
//});
//
//image3.addEventListener('click', function() {
//    document.getElementById("#ch2-img-3").style.display = "none";
//    document.getElementById("#ch2-img-4").style.display = "block";
//});
//
//image4.addEventListener('click', function() {
//    document.getElementById("#ch2-img-4").style.display = "none";
//    document.getElementById("#ch2-img-1").style.display = "block";
//});


function image1To2() {
     document.getElementById("ch2-img-1").style.display = "none";
    document.getElementById("ch2-img-2").style.display = "block";
};

function image2To3() {
      document.getElementById("ch2-img-2").style.display = "none";
    document.getElementById("ch2-img-3").style.display = "block";
};

function image3To4() {
     document.getElementById("ch2-img-3").style.display = "none";
    document.getElementById("ch2-img-4").style.display = "block";
};

function image4To1() {
    document.getElementById("ch2-img-4").style.display = "none";
    document.getElementById("ch2-img-1").style.display = "block";
};