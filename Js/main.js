//accordion
const accordion=document.getElementsByClassName('contentbx');
        for(i=0;i<accordion.length;i++){
            accordion[i].addEventListener('click',function(){
                this.classList.toggle('active')
            })
}

//counts
function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = (progress * (end - start) + start).toFixed(2);
        obj.innerText = value;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Function to start the counters when the section comes into view
function startCounters(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateValue("students", 0,20000, 3000);
            animateValue("hours", 0, 1000, 3000);
            animateValue("instructors", 0,100, 3000);
            animateValue("rating", 0, 4.4, 3000);
            observer.disconnect(); // Stop observing after animation starts
        }
    });
}

// Using Intersection Observer API to detect when the counter section is in view
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(startCounters, {
        threshold: 0.5 // Start animation when 50% of the section is visible
    });

    const counterSection = document.querySelector('.counters');
    observer.observe(counterSection);
});

// bars
function openNav() {
    document.getElementById("side-navs").style.width = "100%";
}

function closeNav() {
    document.getElementById("side-navs").style.width = "0";
}

// love icon
const love=document.getElementsByClassName('love');
        for(i=0;i<love.length;i++){
            love[i].addEventListener('click',function(){
                this.classList.toggle('active')
            })
}

// likes icon
const likes=document.getElementsByClassName('likes');
        for(i=0;i<likes.length;i++){
            likes[i].addEventListener('click',function(){
                this.classList.toggle('active')
            })
}


//slides images
 //access images
let slideImages=document.querySelectorAll('.slides .slide-details img');

let next =document.querySelector('.next');
let prev=document.querySelector('.prev');

let dots=document.querySelectorAll('.dot');

var counter=0;

next.addEventListener('click',slideNext);
function slideNext(){
    slideImages[counter].style.animation='next1 .5s ease-in forwards';
    if(counter >=slideImages.length-1){
        counter=0;
    }else{
        counter++;
    }
    slideImages[counter].style.animation='next2 .5s ease-in forwards';
    indicators();
}

 prev.addEventListener('click',slidePrev);
 function slidePrev(){
     slideImages[counter].style.animation='prev1 .5s ease-in forwards'
     if(counter==0){
         counter=slideImages.length-1;
     }else{
         counter--;
     }
     slideImages[counter].style.animation='prev2 .5s ease-in forwards'
     indicators();
 }

 //auto
 function autoSliding(){
     deletInterval=setInterval(timer,3000);
     function timer(){
         slideNext()
         indicators();
     }
 }
 autoSliding();

 //stop when mouse hover
 const container=document.querySelector('.slide-container');
 container.addEventListener('mouseover',function(){
     clearInterval(deletInterval)
 })

 //resume
 container.addEventListener('mouseout',autoSliding);
 //
 function indicators(){
     for(i=0;i<dots.length;i++){
         dots[i].className=dots[i].className.replace(' active','');
     }
     dots[counter].className +=' active';
 }
 //
 function switchImages(currentImage){
     currentImage.classList.add('active');
     var imageId=currentImage.getAttribute('attr');
     if(imageId>counter){
         slideImages[counter].style.animation='next1 .5s ease-in forwards';
         counter=imageId;
         slideImages[counter].style.animation='next2 .5s ease-in forwards';
     }
     else if(imageId==counter){
         return;
     }
     else{
         slideImages[counter].style.animation='prev1 .5s ease-in forwards';
         counter=imageId;
         slideImages[counter].style.animation='prev2 .5s ease-in forwards';
     }
    indicators();
}


