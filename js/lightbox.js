
// lightbox click and image become large
const closeLightbox = document.querySelector(".close-lightbox");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");


closeLightbox.addEventListener('click', function(){     //close lightbox by clicking close button
    lightbox.classList.add("hide");
    lightbox.classList.remove("show");
});


lightbox.addEventListener("click", function(e){ //if you want to close lightbox by clicking anywhere outside image
    if(e.target!=lightboxImage){
        lightbox.classList.add("hide");
        lightbox.classList.remove("show");
    }
});


// now open lightbox when click to plus icon
const itemImg = document.querySelectorAll(".single-image");


itemImg.forEach(function(element){
    element.querySelector(".fa-plus").addEventListener('click', function(){
        lightbox.classList.remove("hide");
        lightbox.classList.add("show");
        lightboxImage.src=element.querySelector("img").getAttribute("src")

    })

});
