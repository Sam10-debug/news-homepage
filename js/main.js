const hamburger= document.querySelector("#hamburger")
const close= document.querySelector("#close")
const mobileMenu= document.querySelector(".mobile-menu")
// console.log(mobileMenu)
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