
    // ==============all-images page start===========
    const filterBtn = document.querySelector("#filter-img");
    const filterImages = document.querySelector(".filter-images")

    // FILTER images
    filterBtn.addEventListener('click', function(e){
        const filterImage = filterImages.childNodes;

        filterImage.forEach(function(targetImage){
            switch (e.target.value){
                case "all":
                    targetImage.style.display = "flex";
                    break;

                case "acrylic":
                    if (targetImage.classList.contains('acrylic')){
                        targetImage.style.display = "flex";
                    } else {
                        targetImage.style.display = "none";
                    }
                    break;

                case "3d":
                    if (targetImage.classList.contains('3d')){
                        targetImage.style.display = "flex";
                    } else {
                        targetImage.style.display = "none";
                    }
                    break;

                case "gardenning":
                    if (targetImage.classList.contains('gardenning')){
                        targetImage.style.display = "flex";
                    } else {
                        targetImage.style.display = "none";
                    }
                    break;

                case "pencil":
                    if (targetImage.classList.contains('pencil')){
                        targetImage.style.display = "flex";
                    } else {
                        targetImage.style.display = "none";
                    }
                    break;
            }
        });
    });