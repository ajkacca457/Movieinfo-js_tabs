const tabbtns=document.querySelectorAll(".btn-tab");
const articles= document.querySelectorAll(".article-info");
const info=document.querySelector(".infocont");


info.addEventListener("click", function(e){
const id=e.target.dataset.id;

if(id){
  tabbtns.forEach((item) => {
    item.classList.remove("active");
    e.target.classList.add("active");
  });

articles.forEach((item) => {
  item.classList.remove("active");
});

const showarticle=document.getElementById(id);
showarticle.classList.add("active");

}


})


console.log(info);
