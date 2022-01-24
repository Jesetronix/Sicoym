/*N E W S  S L I D E S*/
const slideNews = document.querySelector("#slide-news");
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");
let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

slideNews.insertAdjacentElement('afterbegin', sliderSectionLast);

function next(){
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
    slideNews.style.marginLeft = "-200%";
    slideNews.style.transition = "all 0.5s";
    setTimeout(function(){
        slideNews.style.transition = "none";
        slideNews.insertAdjacentElement('beforeend', sliderSectionFirst);
        slideNews.style.marginLeft = "-100%";
    }, 500);
}

function prev(){
    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slideNews.style.marginLeft = "0";
    slideNews.style.transition = "all 0.5s";
    setTimeout(function(){
        slideNews.style.transition = "none";
        slideNews.insertAdjacentElement('afterbegin', sliderSectionLast);
        slideNews.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener('click', function(){
    next();
});

btnLeft.addEventListener('click', function(){
    prev();
});

setInterval(() => {
    galleryNext();
    next();
}, 5000);

/*G A L L E R Y  S L I D E S*/
const slideGallery = document.querySelector("#slide-gallery");
const btnGalleryLeft = document.querySelector("#gallery-btn-left");
const btnGalleryRight = document.querySelector("#gallery-btn-right");
let sliderGallerySection = document.querySelectorAll(".gallery-slider-section");
let sliderGallerySectionLast = sliderGallerySection[sliderGallerySection.length -1];

slideGallery.insertAdjacentElement('afterbegin', sliderGallerySectionLast);

function galleryNext(){
    let sliderGallerySectionFirst= document.querySelectorAll(".gallery-slider-section")[0];
    slideGallery.style.marginLeft = "-200%";
    slideGallery.style.transition = "all 0.5s";
    setTimeout(() => {
        slideGallery.style.transition = "none";
        slideGallery.insertAdjacentElement('beforeend', sliderGallerySectionFirst);
        slideGallery.style.marginLeft = "-100%";
    }, 500);
}

function galleryPrev(){
    let sliderGallerySection = document.querySelectorAll(".gallery-slider-section");
    let sliderGallerySectionLast = sliderGallerySection[sliderGallerySection.length -1];
    slideGallery.style.marginLeft = "0";
    slideGallery.style.transition = "all 0.5s";
    setTimeout(() => {
        slideGallery.style.transition = "none";
        slideGallery.insertAdjacentElement('afterbegin', sliderGallerySectionLast);
        slideGallery.style.marginLeft = "-100%";
    }, 500);
}

btnGalleryLeft.addEventListener('click', function(){
    galleryPrev();
});

btnGalleryRight.addEventListener('click', function(){
    galleryNext();
});

/*M E N U  B T N*/
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show')
});

/*S C R O L L  R E V E A L */
ScrollReveal().reveal('.nav-main', {delay: 500});
ScrollReveal().reveal('.home', {delay: 500});
ScrollReveal().reveal('.courses-main', {delay: 500});
ScrollReveal().reveal('.news-main', {delay: 500});
ScrollReveal().reveal('.public', {delay: 500});
ScrollReveal().reveal('.gallery', {delay: 500});
ScrollReveal().reveal('.contact-container', {delay: 500});
ScrollReveal().reveal('.maps', {delay: 500});