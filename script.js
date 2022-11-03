// Carousel
let count = 0;
const sliderText = document.getElementById('slider-content');
const userName = document.getElementById('username');
const leftBtn = document.getElementById('button-left');
const rightBtn = document.getElementById('button-right');
const firstSlide = document.querySelector('.slideOne');
const secondSlide = document.querySelector('.slideTwo');
const thirdSlide = document.querySelector('.slideThree');
leftBtn.onclick = function (){
    count--;
    checkCount()
    changeText()
}
rightBtn.onclick = function (){
    count++;
    checkCount()
    changeText()
}
function checkCount(){
    if(count > 2){
        count = 0;
    }
    if(count < 0){
        count = 2;
    }
}
function changeText(){
    switch(count){
        case 0:
            sliderText.textContent = "“I was very skeptical about ordering vegetables online but thought of giving it a try. When I got the delivery I was really surprised to see the quality. It was as mentioned in the site. Really fresh and nice packing too. I am going to be a repeat customer for sure plus will be referring my friends too. Keep up the good job!”";
            userName.textContent = "Lenny Cantrell";
            secondSlide.style.display = 'none';
            thirdSlide.style.display = 'none';
            firstSlide.style.display = 'flex';
        break
        case 1:
            sliderText.textContent = "“Totally satisfied with the quality and prices...continue and keep up the good work..have already recommended to several friends and family members....”";
            userName.textContent = "Amelia-Mae Farrington";
            secondSlide.style.display = 'flex';
            thirdSlide.style.display = 'none';
            firstSlide.style.display = 'none';
        break
        case 2:
            sliderText.textContent = "“The vegetables and fruits are fresh clean and neatly packed. The leafy vegetables are excellent. Besides they are reasonably priced. The service has been good.”";
            userName.textContent = "Cristian Osborne";
            secondSlide.style.display = 'none';
            thirdSlide.style.display = 'flex';
            firstSlide.style.display = 'none';
        break
    }
}
// Carousel
document.querySelector('.navigation-dropdown').onclick = function (){
    document.querySelector('.navigation-dropdown-content').classList.toggle('dropdown-content__active');
    document.querySelector('.navigation-dropdown-arrow').classList.toggle('dropdown-arrow__active');
}
document.querySelector('.resources-dropdown').onclick = function (){
    document.querySelector('.resources-dropdown-content').classList.toggle('dropdown-content__active');
    document.querySelector('.resources-dropdown-arrow').classList.toggle('dropdown-arrow__active');
}
document.querySelector('.contactus-dropdown').onclick = function (){
    document.querySelector('.contactus-dropdown-content').classList.toggle('dropdown-content__active');
    document.querySelector('.contactusdropdown-arrow').classList.toggle('dropdown-arrow__active');
}
document.querySelector('.burger-menu').onclick = function burgerOpen(){
    document.querySelector('.burger-menu').classList.toggle('burger-menu__active');
    document.querySelector('.burgerTopLine').classList.toggle('burgerTopLine__active');
    document.querySelector('.burgerMiddleLine').classList.toggle('burgerMiddleLine__active');
    document.querySelector('.burgerBottomLine').classList.toggle('burgerBottomLine__active');
    document.querySelector('.burger-menu-wrapper').classList.toggle('burger-menu-wrapper__active');
    document.querySelector(".wrapper-container").classList.toggle("wrapper-container-active")
    document.body.classList.toggle('scrollLock');
}
function burgerClose(){
    document.querySelector('.burger-menu').classList.remove('burger-menu__active');
    document.querySelector('.burgerTopLine').classList.remove('burgerTopLine__active');
    document.querySelector('.burgerMiddleLine').classList.remove('burgerMiddleLine__active');
    document.querySelector('.burgerBottomLine').classList.remove('burgerBottomLine__active');
    document.querySelector('.burger-menu-wrapper').classList.remove('burger-menu-wrapper__active');
    document.body.classList.remove('scrollLock');
}
document.getElementById('header-link-about').onclick = function (){
    document.getElementById('about-scroll').scrollIntoView({
        behavior: "smooth",
    });
}
document.getElementById('header-link-service').onclick = function (){
    document.getElementById('service-scroll').scrollIntoView({
        block: "center",
        behavior: "smooth",
    });
}
document.getElementById('header-link-menu').onclick = function (){
    document.getElementById('menu-scroll').scrollIntoView({
        block: "center",
        behavior: "smooth",
    });
}
document.getElementById('header-link-contact').onclick = function (){
    document.getElementById('contact-scroll').scrollIntoView({
        block: "center",
        behavior: "smooth",
    });
}
document.getElementById('burgerlink-aboutus').onclick = function (){
    burgerClose()
    document.getElementById('about-scroll').scrollIntoView({
        behavior: "smooth",
    });
}
document.getElementById('burgerlink-service').onclick = function (){
    burgerClose()
    document.getElementById('service-scroll').scrollIntoView({
        block: "center",
        behavior: "smooth",
    });
}
document.getElementById('burgerlink-menu').onclick = function (){
    burgerClose()
    document.getElementById('menu-scroll').scrollIntoView({
        block: "center",
        behavior: "smooth",
    });
}
document.getElementById('burgerlink-contact').onclick = function (){
    burgerClose()
    document.getElementById('contact-scroll').scrollIntoView({
        block: "center",
        behavior: "smooth",
    });
}
