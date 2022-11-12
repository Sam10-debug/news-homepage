const hamburger= document.querySelector("#hamburger")
const close= document.querySelector("#close")
const mobileMenu= document.querySelector(".mobile-menu")

const showMobileNav=()=>{
	mobileMenu.classList.add("show")
	// console.log("show")
}
const hideMobileNav=()=>{
	mobileMenu.classList.remove("show")
	// console.log("hide")
}
hamburger.addEventListener("click",showMobileNav)
close.addEventListener("click",hideMobileNav)

function reveal() {
	var reveals = document.querySelectorAll(".reveal");
	var show = document.querySelectorAll(".shows");
	for (var i = 0; i < reveals.length; i++) {
	  var windowHeight = window.innerHeight;
	  var elementTop = reveals[i].getBoundingClientRect().top;
	  var elementVisible = 150;
	  if (elementTop < windowHeight - elementVisible) {
		reveals[i].classList.add("active");
	  } else {
		reveals[i].classList.remove("active");
	  }
	}
	for (var i = 0; i < show.length; i++) {
	  var windowHeight = window.innerHeight;
	  var elementTop = reveals[i].getBoundingClientRect().top;
	  var elementVisible = 150;
	  if (elementTop < windowHeight - elementVisible) {
		reveals[i].classList.add("active");
	  } else {
		reveals[i].classList.remove("active");
	  }
	}
  }

  window.addEventListener("scroll", reveal);


// To check the scroll position on page load
reveal();