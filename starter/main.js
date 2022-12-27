

// basic Es5 function declaration
// function name () {}
// var myname = "clinton401"
// function popsth() {
//     alert(myname + "  i have been coding since 12")
// }



// console.log(document)

// document.querySelector(".body")

// var hamburger = document.querySelector(".hamburger-container")
// var mobilelinkscontainer = document.querySelector(".mobile-linkscontainer")
// console.log(hamburger)

// function addandremove() {
// hamburger.classList.toggle("showburger")
// mobilelinkscontainer.classList.toggle("showburgerlinks")
// }
const menu = document.getElementById('menu');
const mobile = document.getElementById('mobile');


document.onclick = function(e) {
    if(e.target.id  !== 'mobile' &&  e.target.id !== 'menu') {
        menu.classList.remove('active');
        mobile.classList.remove('active');
    }
}



menu.onclick = function() {
    menu.classList.toggle('active');
    mobile.classList.toggle('active');

}
// mobile.onclick = function() {
//     mobile.classList.toggle('active');
// }
