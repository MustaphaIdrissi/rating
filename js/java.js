let rating=document.querySelectorAll(".fa-star");
let total=rating.length;
let star=0;
rating.forEach(Element=>{


Element.addEventListener("mouseout",function(){
    let star=0; 
  for(let i=0;i<total;i++){
  
    rating[i].classList.remove("hover"); 
  }    
  });

  Element.addEventListener("mouseover",function(){
    star=Element.getAttribute("data-star");
  for(let i=0;i<star;i++){
  
    rating[i].classList.add("hover"); 
  }    
  });

    Element.addEventListener("click",function(){
        star=Element.getAttribute("data-star");
        starrting(star);
    })
});
function starrting(star){
 
    for(let i=0;i<total;i++){
      if(i<star){
        rating[i].classList.add("fa-solid");
        rating[i].classList.remove("fa-regular");
        affiche();
    }else{
        rating[i].classList.add("fa-regular");
        rating[i].classList.remove("fa-solid");
        affiche();
    }
  }
}
function affiche(){
  document.getElementById("resulta").innerHTML=star+"/"+total;
}