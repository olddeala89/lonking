const check = document.querySelector('.main');
check.addEventListener('click', event => {
menu__toggle.checked = false;
});
$('a[href^="#about"]').click(function(){ // #1
let anchor = $(this).attr('href'); // #2
$('html, body').animate({ // #3
scrollTop: $(anchor).offset().top // #4
}, 600); // #5
});
$('a[href^="#benef"]').click(function(){ // #1
let anchor = $(this).attr('href'); // #2
$('html, body').animate({ // #3
scrollTop: $(anchor).offset().top // #4
}, 600); // #5
});
$('a[href^="#catalog"]').click(function(){ // #1
let anchor = $(this).attr('href'); // #2
$('html, body').animate({ // #3
scrollTop: $(anchor).offset().top // #4
}, 600); // #5
});
$('a[href^="#otgruz"]').click(function(){ // #1
    let anchor = $(this).attr('href'); // #2
    $('html, body').animate({ // #3
    scrollTop: $(anchor).offset().top // #4
    }, 600); // #5
    });
    $('a[href^="#contacts"]').click(function(){ // #1
        let anchor = $(this).attr('href'); // #2
        $('html, body').animate({ // #3
        scrollTop: $(anchor).offset().top // #4
        }, 600); // #5
        });   
        $('a[href^="#whywe"]').click(function(){ // #1
            let anchor = $(this).attr('href'); // #2
            $('html, body').animate({ // #3
            scrollTop: $(anchor).offset().top // #4
            }, 600); // #5
            });
            $('a[href^="#poryadok"]').click(function(){ // #1
                let anchor = $(this).attr('href'); // #2
                $('html, body').animate({ // #3
                scrollTop: $(anchor).offset().top // #4
                }, 600); // #5
                });
$('a[href^="#up"]').click(function(){ // #1
    let anchor = $(this).attr('href'); // #2
    $('html, body').animate({ // #3
    scrollTop: $(anchor).offset().top // #4
    }, 600); // #5
    });
    $('a[href^="#sert"]').click(function(){ // #1
        let anchor = $(this).attr('href'); // #2
        $('html, body').animate({ // #3
        scrollTop: $(anchor).offset().top // #4
        }, 600); // #5
        });
    $('a[href^="#partners"]').click(function(){ // #1
        let anchor = $(this).attr('href'); // #2
        $('html, body').animate({ // #3
        scrollTop: $(anchor).offset().top // #4
        }, 600); // #5
        });
    const sliderWrap = document.querySelector(".slaider-flex");
    const slider = document.querySelector(".slaider__img");
    const slides = document.querySelectorAll(".slaider__img");
    const sliderBtn = document.querySelectorAll(".slider__pag-btn");
    let index = 0;
    let needToSwipe = 0;
    let x = {};
    let max = slides.length;
    
    window.onload = window.onresize = () => {
     sliderWrap.style.transitionDuration = "0s";
     sliderWrap.offsetHeight;
     sliderWrap.style.width = "100%";
     let currentWidth = sliderWrap.clientWidth;
     sliderWrap.style.transitionDuration = ".5s";
     sliderWrap.offsetHeight;
     let elsFull = Math.floor(currentWidth / (slides[0].scrollWidth + 0));
     max = slides.length - elsFull - 1;
     sliderWrap.style.width = (elsFull * (slides[0].scrollWidth + 0) - 0) + "px";
    }
    function slide(num) {
     if(num > 0 && index >= max){
          index = 0;
     }	else if(num > 0 || index > 0) index += num;
         sliderWrap.scrollTo({
          left: index * (slides[0].scrollWidth + 0),
         behavior: 'smooth'
           });
    }
    function slideBtn(num) {
        if(num > 0 && index >= max){
          index = 0;
          setActive(sliderBtn[index], sliderBtn, "slider__pag-btn-active");
     }	else if(num > 0 || index > 0) index = num;
         setActive(sliderBtn[index], sliderBtn, "slider__pag-btn-active");
         sliderWrap.scrollTo({
          left: index * (slides[0].scrollWidth + 0),
         behavior: 'smooth'
           });
    }
    function setActive(el, elArr, cl) {
        elArr.forEach((item) => {
            item.classList.remove(cl);
        });
        el.classList.add(cl);
    }
    
    
    for (let el of document.querySelectorAll(".info-sell-pictures-inner > .info-sell-pictures-img")) {
        el.addEventListener('click', (e) => changePicture(e));
    }
    function changePicture(e){
        let target = e.target
        if(window.matchMedia("screen and (max-width: 870px)").matches){
          let index = Array.prototype.slice.call(target.parentElement.childNodes).filter(e => !(e instanceof Text)).indexOf(target);
          let parent = target.parentElement.parentElement.childNodes;
          parent = parent[0] instanceof Text ? parent[1] : parent[1];
          let scrollTo = Array.prototype.slice.call(parent.childNodes).filter(e => !(e instanceof Text))[index];
          parent.scroll({
              left: scrollTo.offsetLeft - parent.offsetLeft,
              behavior: "smooth"
          });
          return;
        }
        let childNodes = target.parentNode.parentNode.childNodes;
        let toReplace = (childNodes[0] instanceof Text ? childNodes[1] : childNodes[0]).childNodes;
        toReplace = toReplace[0] instanceof Text ? toReplace[1] : toReplace[0];
        toReplace.style.backgroundImage = target.style.backgroundImage;
    }
    sliderWrap.addEventListener("touchstart", e => {
        if (e.changedTouches && e.changedTouches[0]) {
            let cur = e.changedTouches[0];
            x[cur.identifier] = cur.pageX;
        }
    })
    sliderWrap.addEventListener("touchend", e => {
        if (e.changedTouches && e.changedTouches[0]) {
            let cur = e.changedTouches[0];
            if (cur.pageX <= (x[cur.identifier] - needToSwipe)) index++;
            else if (cur.pageX >= (x[cur.identifier] + needToSwipe)) index--;
            if (index > 0 && index < max) {
                sliderWrap.scrollTo({
                  left: index * (slides[0].scrollWidth + 0),
                 behavior: 'smooth'
                   });
            }	else if (index <= 0 || index >= max) {
                      index = 0;
                      sliderWrap.scrollTo({
                      left: index * (slides[0].scrollWidth + 0),
                     behavior: 'smooth'
                   });
             }
            if (x[cur.identifier] != undefined) delete x[cur.identifier];
            setActive(sliderBtn[index], sliderBtn, "slider__pag-btn-active");
        }
    })
    const acsent = document.querySelector('.acsent');
    function acs() {
        acsent.style.display = 'flex'
    }
    check.addEventListener('click', event => {
        acsent.style.display = 'none'
    });
    setTimeout(acs, 30000);
    function close() {
        acsent.style.display = 'none'
    }
AOS.init();