function searchClicked(){
  const searchBar = document.querySelector('.home .searchBar');
  searchBar.classList.toggle('active');
}

function scrollToSection(event){
  event.preventDefault();
  const toSection = document.querySelector(event.target.getAttribute("href"));
  const offSetTop = toSection.offSetTop;

  window.scrollTo({
    top: offSetTop,
    behavior: "smooth"
  });
}

function toTop(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

let phoneColors = document.querySelectorAll(".phonecolor");
phoneColors.forEach((color)=>{
  color.addEventListener('click',()=>{
    let dataColor = color.getAttribute("data-color");
    document.querySelector(".phone .phoneimg .box").style.setProperty("background", dataColor);
  });
});

let tabletColors = document.querySelectorAll(".tabletcolor");
tabletColors.forEach((color)=>{
  color.addEventListener('click',()=>{
    let dataColor = color.getAttribute("data-color");
    document.querySelector(".tablet .tabletimg .box").style.setProperty("background", dataColor);
  });
});

function openMenu(){
  const menu = document.querySelector(".header .navbar .links");
  menu.classList.toggle('active');
}