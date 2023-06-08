let arrowButtons = document.getElementsByClassName("arrow");
let reviews = document.getElementsByClassName("review");

let mode = "EenTweeDrie";

for(let i = 0; 1 < arrowButtons.length; i++){
    arrowButtons[i].onclick = function(){
        if (mode == "EenTweeDrie"){
            reviews[0].style.display = "none";
            reviews[1].style.display = "none";
            reviews[2].style.display = "none";
            reviews[3].style.display = "block";
            reviews[4].style.display = "block";
            reviews[5].style.display = "block"; 
            mode = "VierVijfZes"; 
        }
        else{
            reviews[0].style.display = "block";
            reviews[1].style.display = "block";
            reviews[2].style.display = "block";
            reviews[3].style.display = "none";
            reviews[4].style.display = "none";
            reviews[5].style.display = "none";
            mode = "EenTweeDrie";  
        }

    }
}