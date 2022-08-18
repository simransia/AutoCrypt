let navbar = document.querySelector(".header");
const headerButtons = document.querySelectorAll(".header__button__item");
const priceList = document.querySelectorAll(".pricing-section__list__item");
const plans = document.querySelectorAll(".pricing-section__btn__item");
let priceOne= document.getElementById("basic-price");
let priceTwo= document.getElementById("professional-price");
let priceThree= document.getElementById("business-price");


window.onscroll = function () {
    if (this.scrollY > 150) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
};

for (let a of headerButtons) {
  
    a.addEventListener("click", function(){
      for (let a of headerButtons) {
        a.classList.remove('button');
      } 
      this.classList.add('button');
    });
    
  } 

for (let li of priceList) {
  
  li.addEventListener("click", function(){
    for (let li of priceList) {
      li.classList.remove('active-plan');
    } 
    this.classList.add('active-plan');
  });
  
} 

for (let a of plans) {
  a.addEventListener("click", function(){
    for (let a of plans) {
      a.classList.remove('active-plan-duration');
    } 
    this.classList.add('active-plan-duration');
  
    if(this.innerHTML=="MONTHLY"){
        priceOne.innerHTML = "$10";
        priceTwo.innerHTML = "$29";
        priceThree.innerHTML ="$49";
    }else{
        priceOne.innerHTML = "$120";
        priceTwo.innerHTML =" $348";
        priceThree.innerHTML ="$588";
    }
  });
  
} 