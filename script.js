"use strict";

// ДЛЯ ПАРАЛЛАКСА
window.onload = function() {
    const parallax = document.querySelector('.parallax');

    if (parallax) {
        const content = document.querySelector('.parallax_container');
        const clouds = document.querySelector('.images-parallax__clouds');
        const mountains = document.querySelector('.images-parallax__mountains');
        const human = document.querySelector('.images-parallax__human');

        const forClouds = 40;
        const forMountains = 20;
        const forHuman = 10;

        const speed = 0.05;

        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;

        function setMouseParallaxStyle() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;
            
            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            clouds.style.cssText = `transform: translate(${positionX / forClouds}%,${positionY / forClouds}%);`;
            mountains.style.cssText = `transform: translate(${positionX / forMountains}%,${positionY / forMountains}%);`;
            human.style.cssText = `transform: translate(${positionX / forHuman}%,${positionY / forHuman}%);`;
        
            requestAnimationFrame(setMouseParallaxStyle);
                   
        }
        setMouseParallaxStyle();

        parallax.addEventListener("mousemove", function (e) {
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;

            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;

            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;

        });

    }

};

// ДЛЯ ПЛАВНОГО СКРОЛЛА
const smoothLinks = document.querySelectorAll('a[href^="#content"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}


// ДЛЯ ПЕРЕХОДА В ВЕРХ СТРАНИЦЫ
var scrollUpElems = document.querySelectorAll(".popup__title", ".my_choice");
for (var i = 0; i < scrollUpElems.length; i++) {
    scrollUpElems[i].onclick = function(){
    window.scrollTo(0, 0);
  };
}


// ДЛЯ ВЫВОДА ВЫБРАННОГО ИЗОБРАЖЕНИЯ
var d = document,
myCards = d.getElementById('my_cards');

[].forEach.call(d.getElementsByName('popup__title'), function(el){
el.addEventListener('click', function(){
    myCards.appendChild(this.previousElementSibling);
});
});
   
// ДЛЯ РАНДОМНОГО ИЗОБРАЖЕНИЯ
var imgs=[
    './1.jpg',
    './2.jpg',
    './3.jpg',
    './4.jpg',
    './5.jpg',
    './6.jpg',
    './7.jpg',
    './8.jpg',
    './9.jpg',
    './10.jpg',
    './11.jpg',
    './12.jpg',
    './13.jpg',
    './14.jpg',
    './15.jpg',
    './16.jpg',
    './17.jpg',
    './18.jpg',
    './19.jpg',
    './20.jpg',
    './21.jpg',
    './22.jpg',
    './23.jpg',
    './24.jpg',
    './25.jpg',
    './26.jpg',
    './27.jpg',
    './28.jpg',
    './29.jpg',
    './30.jpg',
    './31.jpg',
    './32.jpg',
    './33.jpg',
    './34.jpg',
    './35.jpg',
    './36.jpg',
    './37.jpg',
    './38.jpg',
    './39.jpg',
    './40.jpg',
    './41.jpg',
    './42.jpg',
    './43.jpg',
    './44.jpg',
    './45.jpg',
    './46.jpg',
    './47.jpg',
    './48.jpg',
    './49.jpg',
    './50.jpg',
    './51.jpg',
    './52.jpg',
    './53.jpg',
    './54.jpg',
    './55.jpg',
    './56.jpg',
    './57.jpg',
    './58.jpg',
    './59.jpg',
    './60.jpg',
    './61.jpg',
    './62.jpg',
    './63.jpg',
    './64.jpg',
    './65.jpg',
    './66.jpg',
    './67.jpg',
    './68.jpg',
    './69.jpg',
    './70.jpg',
    './71.jpg',
    './72.jpg',
    './73.jpg',
    './74.jpg',
    './75.jpg',
    './76.jpg',
    './77.jpg',
    './78.jpg'
     ],
      
    image=document.getElementById('image'),
    button=document.getElementById('button'),
    myRandomCards = d.getElementById('my_cards'),
    myRandomCardBtn = d.getElementsByName('popup__title');

    button.onclick=function(){
        image.src=imgs[Math.floor(Math.random()*imgs.length)]; 
        
        var myRandomImg = image.cloneNode();
        [].forEach.call(d.getElementsByName('popup__title'), function(l){
            l.addEventListener('click', function(){
                myRandomCards.appendChild(myRandomImg);
            });
        });
    };








