
    //============ admin-dashboard page start==========

    const categoryBtn = document.querySelector('.category-btn').children;
    const items = document.querySelector('.gallery-images').children;


    //========filter item section===========
    for(let i=0; i<categoryBtn.length; i++){
        categoryBtn[i].addEventListener('click', function(){
            for(let j=0; j<categoryBtn.length; j++){
                categoryBtn[j].classList.remove("active");  //remove current active class
            }
            this.classList.add("active");   //add class by clicked
            const target = this.getAttribute("data-target") //button selection

            for(let k=0; k<items.length; k++){
                items[k].style.display = "none";

                if(target == items[k].getAttribute("data-id")){
                    items[k].style.display = "flex";
                }

                if(target == "all"){
                    items[k].style.display = "flex";
                }
            }
        })
    }

    //============delete button============
    todoList.addEventListener('click', function(e){
        const item = e.target;

        // DELETE TODO
        if(item.classList[0] === "trash-btn") {
            const todo = item.parentElement;
            //ANIMATION
            todo.classList.add('fall');
            removeLocalTodos(todo);
            todo.addEventListener('transitionend', function(){
                todo.remove();
            });
        }

        // CHECK TODO
        if(item.classList[0] === "complete-btn") {
            const todo = item.parentElement;
            todo.classList.add('completed');
        }
    });
    // ===========admin-dashboard section end============