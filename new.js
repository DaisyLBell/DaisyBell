
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
 
