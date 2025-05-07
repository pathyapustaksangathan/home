function mousemover(){

    let main=document.querySelector("#main");
    let mouse=document.querySelector("#mouse");
    
    main.addEventListener("mousemove",function(pos){
        gsap.to(mouse,{
    x:pos.x,
    y:pos.y,
    delay:0.3,
        })
    })
    gsap.from(mouse,{
        scale:0,
        delay:3,
        opacity:0,
    })
}

mousemover();




function gsap1(){
    
let tl=gsap.timeline();

tl.from("#loader h2",{
    x:80,
    opacity:0,
    stagger:0.3,
    delay:0.1
})
tl.to("#loader",{
    y:-1000,
    opacity:0,
    duration:1
})
tl.from("#page1 #nav",{
    opacity:0,
    duration:0.5,
});

tl.from("#page1 #nav img,#page1 #nav a, #page1 #nav #nav3",{
    y:-80,
    opacity:0,
    duration:0.5,
    stagger:0.17,
    delay:0.5
})

tl.from("#page1 #left h1,#page1 #left button",{
    x:-1000,
    duration:0.5,
    stagger:0.2
})
tl.from("#page1 #right ",{
    scale:0.5,
    opacity:0,
})
// tl.from("#main #page4 #about h3",{
//     x:-500,
//     duration:1,
//     scrollTrigger:{
//         trigger:"#page4",
//         scroller:"#main",
//     }
// })
// tl.from("#page4 #about p",{
//     opacity:0,
//     y:100,
//     duration:1,
//     delay:0.2,
//     scrollTrigger:{
//         trigger:"#page4",
//         scroller:"#main",
//     }
// })

}
gsap1();




const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function loco(){
    





gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco();

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  




  function imghover() {
    let boxes = document.querySelectorAll("#page3 .box");
    
    boxes.forEach(box => {
        let img = box.querySelector("img");
        let desc = box.querySelector(".desc");
        let originalImgHeight = img.style.height;
        let originalDescDisplay = desc.style.display;

        let clicked = false;

        box.addEventListener("click", function() {
            if (!clicked) {
                desc.style.display = "none";
                img.style.height = "100%";
                clicked = true;
            } else {
                desc.style.display = originalDescDisplay;
                img.style.height = originalImgHeight;
                clicked = false;
            }
        });

        box.addEventListener("dblclick", function() {
            let facebookProfile = box.getAttribute("data-facebook");
            window.open(facebookProfile, "_blank");
        });
    });
}

imghover();

function formpage(){
    window.open('https://pathyapustaksangathan.github.io/enrollnow/'," ");
}
