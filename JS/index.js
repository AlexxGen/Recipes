var clickDiv = document.querySelectorAll(".clickable");

for(var i=0; i < clickDiv.length; i++){
    clickDiv[i].addEventListener("mouseover", function(){
        this.classList.add("hover");
    })
    clickDiv[i].addEventListener("mouseout", function(){
        this.classList.remove("hover");
    })
}