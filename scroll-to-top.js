// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};



function scrollFunction() {
//  if (document.documentElement.scrollTop <= 2000 ) {
//      
//    mybutton.style.display = "block";
//      
//  } else if (document.documentElement.scrollTop <= 20 ) {
//      
//    mybutton.style.display = "none";
//      
//  } else {
//      
//    mybutton.style.display = "none";
//  }
    
    if (document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20){
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }

}

//function scrollFunction() {
//    switch (document.body.scrollTop) {
//            
//        case 0:
//            if (document.body.scrollTop < 20 ) {
//            mybutton.style.display = "none";}
//            break;
//            
//        case 1:
//            if ( document.body.scrollTop > 20) {
//            mybutton.style.display = "block";}
//            break;
//            
//        case 2:
//            if ( document.body.scrollTop > 1200 ) {
//            mybutton.style.display = "none";
//            break;}
//    }
//}



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}