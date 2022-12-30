

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
const body = document.querySelector('body');
const butn = document.querySelector('.butn');
const icon = document.querySelector('.btn_icon');
// const buttn = document.querySelector('buttn')


function store(value) {
    localStorage.setItem('darkmode', value)
};

function load() {
    const darkmode = localStorage.setItem('darkmode');

    if(!darkmode) {
        store(false);
        icon.classList.add('fa-sun');
    } else if(darkmode == 'true') {
        body.classList.add('darkmode');
        icon.classList.add('fa-moon');
    } else if(darkmode == 'false') {
        icon.classList.add('fa-sun');
    }
}


butn.onclick = function() {
    body.classList.toggle('darkmode');
    icon.classList.add('animated');

    store(body.classList.contains('darkmode'));


    if(body.classList.contains('darkmode')) {
       icon.classList.remove('fa-sun');
       icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
       icon.classList.add('fa-sun');
    };




    setTimeout( () => {
        icon.classList.remove('animated');
    }, 500);
}
