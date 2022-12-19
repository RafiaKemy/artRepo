
    //==============gallery slider=============
    const carousel = document.querySelector(".slider-images");
    const carouselImages = document.querySelectorAll(".slider");

    //Buttons
    const prevBtn = document.querySelector("#prevBtn");
    const nextBtn = document.querySelector("#nextBtn");

    let counter = 1;
    const size = carouselImages[1].clientWidth;

    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';


    //nextBtn Event Listener
    nextBtn.addEventListener('click', function(){
        if(counter >= carouselImages.length -1) return;
        carousel.style.transition = 'transform 0.4s ease-in-out';
        counter++;
        carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });
     //prevBtn Event Listener
     prevBtn.addEventListener('click', function(){
        if(counter <= 0) return;
        carousel.style.transition = 'transform 0.4s ease-in-out';
        counter--;
        carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

   
    carousel.addEventListener('transitionend', function(){
        if(carouselImages[counter].id === "lastImg") {
            carousel.style.transition = 'none';
            counter =  carouselImages.length -2;
            carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
        if(carouselImages[counter].id === "firstImg") {
            carousel.style.transition = 'none';
            counter =  carouselImages.length - counter;
            carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
    });


