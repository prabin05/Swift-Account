// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

// User
function menuToggle(){
  const toggleMenu = document.querySelector('.menu');
  toggleMenu.classList.toggle('active')
}

//prompt
function checker(){
  var result = confirm('Are you sure? \nYou want to Log Out');
  if (result== false){
    event.preventDefault();
  }
}