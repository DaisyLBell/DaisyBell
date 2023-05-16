//
//
//var gallery = document.getElementByIdElementById('#paginated_gallery');
//var gallery_scroller = document.getElementsByClassName('.gallery_scroller');
//var gallery_item_size = gallery_scroller.querySelector('div').clientWidth;
//
//
//gallery.getElementsByClassName('.next').addEventListener('click', function () {
//    gallery_scroller.scrollBy(gallery_item_size, 0);
//});
//
//gallery.getElementsByClassName('.prev').addEventListener('click', function () {
//    gallery_scroller.scrollBy(-gallery_item_size, 0);
//});
//
//
//function updateAlignment(event) {
//    var alignment = event.target.value;
//    for (item of gallery.querySelectorAll('gallery_scroller > div'))
//        item.style.scrollSnapAlign = alignment;
//}




//gallery 2

//const carousel = document.getElementsByClassName(".carousel");
//
//let isDragging = false, startX, startScrollLeft;
//
//const dragStart = (e) => {
//    isDragging = true;
//    carousel.classList.add("dragging");
//    startX = e.pageX;
//    startScrollLeft = carousel.scrollLeft;
//}
//
//const dragging = (e) => {
//    if (!isDragging) return;
//    console.scrollLeft = startScrollLeft - (e.pageX - startX);
//    
//}
//
//const dragStop = () => {
//    isDragging = false;
//    carousel.classList.remove("dragging");
//}
//
//carousel.addEventListener("mousedown", dragStart);
//carousel.addEventListener("mousemove", dragging);
//document.addEventListener("mouseup", dragStop);






//gallery 3
//const prev = document.querySelector(".prev");
//const next = document.querySelector(".next");
//const slider = document.querySelector(".slider-wrapper");
//const innerSlider = document.querySelector(".slider-inner");
//
//
//
//let dragged = false;
//let startX;
//let x;
//
//
//slider.addEventListener("mouseenter", () => {
//    slider.style.cursor = "grab";
//    
//});
//
//slider.addEventListener("mousemove", (e)=> {
//    if(!dragged) return;
//    e.preventDefault();
//    
//    x = e.offsetX;
//    innerSlider.style.left = `${x - startX}px`;
//    
//    checkProbs();
//});
//
//slider.addEventListener("mouseup",  () => {
//    slider.style.cursor = "grab";
//    dragged = false;
//});
//
//slider.addEventListener("mousedown", (e) => {
//    dragged = true;
//    startX = e.offsetX - innerSlider.offsetLeft;
//    slider.style.cursor = "grabbing";
//});
//
//
//
//slider.addEventListener("touchstart", (e) => {
//    dragged = true;
//    startX = e.targetTouches[0].clientX - innerSlider.offsetLeft;
//    checkProbs();
//},
//   { passive: true }
//);
//
//slider.addEventListener("touchmove", (e) => {
//    if(!dragged) return;
//    x = e.targetTouches[0].clientX;
//    innerSlider.style.left = `${x - startX}px`;
//}, 
//{ passive:true }
//);
//
//
//
//prev.addEventListener("click", () => {
//    let innerSliderLeft = innerSlider.style.left;
//    innerSlider.style.left = parseInt(innerSliderLeft.replace("px", "")) + 265 + "px";
//    checkProbs();
//})
//
//next.addEventListener("click", () => {
//    let innerSliderLeft = innerSlider.style.left;
//    innerSlider.style.left = parseInt(innerSliderLeft.replace("px", "")) - 265 + "px";
//    checkProbs();
//})
//
//
//
//const checkProbs = () => {
//    let  outer = slider.getBoundingClientRect();
//    let inner = slider.getBoundingClientRect();
//    
//    if (parseInt(innerSlider.style.left) > 0) innerSlider.style.left = "-10px";
//    if (inner.right < outer.right) innerSlider.style.left = `-${inner.width - outer.width - 10}px`;
//}










const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});
const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;
    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}
const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}
const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);
document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);