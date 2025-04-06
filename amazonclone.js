const rightbtn = document.querySelector(".r-btn");
const leftbtn = document.querySelector(".l-btn");

rightbtn.addEventListener("click", function (event) {
    const b = document.querySelector(".product-slide");
    b.scrollLeft += 1400;
    event.preventDefault();
});


leftbtn.addEventListener("click", function (event) {
    const b = document.querySelector(".product-slide");
    b.scrollLeft -= 1400;
    event.preventDefault();
});

const rbt = document.querySelector(".btn2");
const lbt = document.querySelector(".btn1");

rbt.addEventListener("click", function (event) {
    const b = document.querySelector(".product-slide-1");
    b.scrollLeft += 1400;
    event.preventDefault();
});


lbt.addEventListener("click", function (event) {
    const b = document.querySelector(".product-slide-1");
    b.scrollLeft -= 1400;
    event.preventDefault();
});



window.onscroll = function() {
    stickyNavbar();
};

const navbar = document.querySelector('.first');

function stickyNavbar() {
    if (window.scrollY > 65) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}


const a = document.querySelector(".btn22");
const b = document.querySelector(".btn11");

a.addEventListener("click", function (event) {
    const b = document.querySelector(".product-slide-3");
    b.scrollLeft += 1400;
    event.preventDefault();
});


b.addEventListener("click", function (event) {
    const b = document.querySelector(".product-slide-3");
    b.scrollLeft -= 1400;
    event.preventDefault();
});




const lbtn111 = document.querySelector(".btn222");
const rbtn222 = document.querySelector(".btn111");

lbtn111.addEventListener("click", function (event) {
    
    const b = document.querySelector(".product-slide-4");
    b.scrollLeft += 1400;
    event.preventDefault();
});


rbtn222.addEventListener("click", function (event) {
    console.log("h")
    const b = document.querySelector(".product-slide-4");
    b.scrollLeft -= 1400;
    event.preventDefault();
});






const sidebar = document.querySelector(".sidebar");
const cross = document.querySelector(".fa-xmark");
const black = document.querySelector(".black");
const hdnhead = document.querySelector(".hdn-head");
const sidebtn = document.querySelector(".second-1");

sidebtn.addEventListener("click", () => {
    sidebar.classList.add("active");
    cross.classList.add("active");
    black.classList.add("active");
    hdnhead.classList.add("active");
    document.body.classList.add("stop-scroll")
})


cross.addEventListener("click", () => {
    sidebar.classList.remove("active");
    cross.classList.remove("active");
    black.classList.remove("active");
    hdnhead.classList.remove("active");
    document.body.classList.remove("stop-scroll")

})


const sign = document.querySelector(".sign");
const hdnsign = document.querySelector(".hdn-sign");
const triangle = document.querySelector(".triangle");
const black1 = document.querySelector(".black")

sign.addEventListener("mouseover",()=> {
    black1.classList.add("active_1");
    hdnsign.classList.add("active");
    triangle.classList.add("active");
})

black1.addEventListener("mouseover",()=> {
    black1.classList.remove("active_1");
    hdnsign.classList.remove("active");
    triangle.classList.remove("active");
})


backtop = document.querySelector(".backtop")

backtop.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
})




