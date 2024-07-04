var clickDiv = document.querySelectorAll(".clickable");

for(var i=0; i < clickDiv.length; i++){
    clickDiv[i].addEventListener("mouseover", function(){
        this.classList.add("hover");
        this.querySelector("a").querySelector(".name").classList.add("hoverName");
        this.querySelector("a").querySelector(".photo").classList.add("hoverImg");
    })
    clickDiv[i].addEventListener("mouseout", function(){
        this.classList.remove("hover");
        this.querySelector("a").querySelector(".name").classList.remove("hoverName");
        this.querySelector("a").querySelector(".photo").classList.remove("hoverImg");
    })
}
