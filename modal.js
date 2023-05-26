//https://owlcation.com/stem/javascript_gallery

const images = document.querySelectorAll(".daisyb-img img");

let imgSrc;
let imgIndex;


images.forEach((img, i) => {
   img.addEventListener("click", (e) => {
       imgSrc = e.target.src;
       imgModal(imgSrc);
       console.log(imgSrc);
       imgIndex = i;
   }); 
});

let imgModal = (img) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    document.querySelector(".main").append(modal);
    
    const newImage = document.createElement("img");
    newImage.setAttribute("src", imgSrc);
    
//    console.log(newimg);
    
    const closeBtn = document.createElement("i");
    closeBtn.setAttribute("class", "fas fa-times closeBtn");
    closeBtn.onclick = () => {
    modal.remove();
};
    
    const nextBtn = document.createElement("i");
    nextBtn.setAttribute("class", "fa-solid fa-angle-right right prevNext nextBtn");
    nextBtn.onclick = () => {
        newImage.setAttribute("src", nextImg())
    };
    
    const prevBtn = document.createElement("i");
    prevBtn.setAttribute("class", "fa-solid fa-angle-left left prevNext prevBtn");
    
    prevBtn.onclick = () => {
        newImage.setAttribute("src", prevImg())
    };
    
    modal.append(newImage, closeBtn, nextBtn, prevBtn);
};

let nextImg = () => {
    imgIndex++;
    if (imgIndex >= images.length) {
        imgIndex = 0
    }
    return images[imgIndex].src;
};

let prevImg = () => {
    imgIndex--;
    console.log(imgIndex);
    if (imgIndex < 0) {
        imgIndex = images.length - 1;
    }
    return images[imgIndex].src;
} 


