const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
const showHideIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; 
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; 
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); 
    });
});
const autoSlide = () => {

    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
    positionDiff = Math.abs(positionDiff); 
    
    let firstImgWidth = firstImg.clientWidth + 14;

    let valDifference = firstImgWidth - positionDiff;
    if(carousel.scrollLeft > prevScrollLeft) { 
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}
const dragStart = (e) => {

    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {

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





const carousel2 = document.querySelector(".carousel-2"),
firstImg2 = carousel2.querySelectorAll("img")[0],
arrowIcons2 = document.querySelectorAll(".wrapper-2 i");
let isDragStart2 = false, isDragging2 = false, prevPageX2, prevScrollLeft2, positionDiff2;
const showHideIcons2 = () => {
    let scrollWidth = carousel2.scrollWidth - carousel2.clientWidth; 
    arrowIcons2[0].style.display = carousel2.scrollLeft == 0 ? "none" : "block";
    arrowIcons2[1].style.display = carousel2.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons2.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg2.clientWidth + 14; 
        carousel2.scrollLeft += icon.id == "left2" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60);
    });
});
const autoSlide2 = () => {
    if(carousel2.scrollLeft - (carousel2.scrollWidth - carousel2.clientWidth) > -1 || carousel2.scrollLeft <= 0) return;
    positionDiff = Math.abs(positionDiff2);
    let firstImgWidth = firstImg2.clientWidth + 14;
    let valDifference = firstImgWidth - positionDiff2;
    if(carousel2.scrollLeft > prevScrollLeft2) { 
        return carousel2.scrollLeft += positionDiff2 > firstImgWidth / 3 ? valDifference : -positionDiff2;
    }
    carousel2.scrollLeft -= positionDiff2 > firstImgWidth / 3 ? valDifference : -positionDiff2;
}
const dragStart2 = (e) => {
    isDragStart2 = true;
    prevPageX2 = e.pageX || e.touches[0].pageX;
    prevScrollLeft2 = carousel.scrollLeft;
}
const dragging2 = (e) => {
    if(!isDragStart2) return;
    e.preventDefault();
    isDragging = true;
    carousel2.classList.add("dragging2");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX2;
    carousel2.scrollLeft = prevScrollLeft2 - positionDiff2;
    showHideIcons2();
}
const dragStop2 = () => {
    isDragStart2 = false;
    carousel2.classList.remove("dragging2");
    if(!isDragging2) return;
    isDragging2 = false;
    autoSlide2();
}
carousel2.addEventListener("mousedown", dragStart2);
carousel2.addEventListener("touchstart", dragStart2);
document.addEventListener("mousemove", dragging2);
carousel2.addEventListener("touchmove", dragging2);
document.addEventListener("mouseup", dragStop2);
carousel2.addEventListener("touchend", dragStop2);


