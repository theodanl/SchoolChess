let btnLeft = document.getElementById('arrow-left');
let btnRight = document.getElementById('arrow-right');
let index = 0;
let width = 0;
let height = 0;
let arrowLeft = document.getElementById('arrow-left-comment');
let arrowRight = document.getElementById('arrow-right-comment');
let commentSlide = document.querySelector('.comment-group-box');
let counter = 1;

let i = 0;
let NewLeft = [
    document.getElementById('none1'),
    document.getElementById('none2'),
    document.getElementById('none3'),
    document.getElementById('none4'),

]
let title = [
    document.getElementById('title-text1'),
    document.getElementById('title-text2'),
    document.getElementById('title-text3'),
    document.getElementById('title-text4'),


]

let subtitle = [
    document.getElementById('subtitle-text1'),
    document.getElementById('subtitle-text2'),
    document.getElementById('subtitle-text3'),
    document.getElementById('subtitle-text4'),


]

window.addEventListener('resize', update);
update();

function update() {
    width = document.querySelector('.logo-comment-box').offsetWidth;
    document.querySelector('.logo-comment-box').style.height = width;
    width = document.querySelector('.comment-box').offsetWidth;
    document.querySelector('.comment-box').style.height = width*5/20 + 'px';
    
}




NewLeft[0].style.width = 500/21 + '%';
NewLeft[0].style.height = 100 + '%';
title[0].style.fontSize = 2 + 'vw';
subtitle[0].style.fontSize = 1.5 + 'vw';
NewLeft[0].style.opacity = 0.7;




arrowRight.addEventListener("click", function() {
    for (i = 0; i < 5; i++) {
        if (NewLeft[i]) {
            NewLeft[i].style.width = 500/21 + '%';
            NewLeft[i].style.height = 60 + '%';
            NewLeft[i].style.opacity = 0.3;
            title[i].style.fontSize = 1 + 'vw';
            subtitle[i].style.fontSize = 1 + 'vw';
        }
    }
    counter = counter - 1;
    if (counter < -3) {
        counter = 1;
        commentSlide.style.left = counter * 500/13 + '%';
    } else {
        commentSlide.style.left = counter * 500/13 + '%';
    }
    switch(counter) {
        case 1:
            if (NewLeft[0]) {
                NewLeft[0].style.width = 500/21 + '%';
                NewLeft[0].style.height = 100 + '%';
                title[0].style.fontSize = 2 + 'vw';
                subtitle[0].style.fontSize = 1.5 + 'vw';
                NewLeft[0].style.opacity = 0.7;
            }
        break;
        case 0:
            if (NewLeft[1]) {
                NewLeft[1].style.width = 500/21 + '%';
                NewLeft[1].style.height = 100 + '%';
                title[1].style.fontSize = 2 + 'vw';
                subtitle[1].style.fontSize = 1.5 + 'vw';
                NewLeft[1].style.opacity = 0.7;
            }
        break;
        case -1:
            if (NewLeft[2]) {
                NewLeft[2].style.width = 500/21 + '%';
                NewLeft[2].style.height = 100 + '%';
                title[2].style.fontSize = 2 + 'vw';
                subtitle[2].style.fontSize = 1.5 + 'vw';
                NewLeft[2].style.opacity = 0.7;
            }
        break;
        case -2:
            if (NewLeft[3]) {
                NewLeft[3].style.width = 500/21 + '%';
                NewLeft[3].style.height = 100 + '%';
                title[3].style.fontSize = 2 + 'vw';
                subtitle[3].style.fontSize = 1.5 + 'vw';
                NewLeft[3].style.opacity = 0.7;
            }
        break;
        case -3:
            if (NewLeft[4]) {
                NewLeft[4].style.width = 500/21 + '%';
                NewLeft[4].style.height = 100 + '%';
                title[4].style.fontSize = 2 + 'vw';
                subtitle[4].style.fontSize = 1.5 + 'vw';
                NewLeft[4].style.opacity = 0.7;
            }
        break;
    }

})

arrowLeft.addEventListener("click", function() {
    for (i = 0; i < 5; i++) {
        if (NewLeft[i]) {
            NewLeft[i].style.width = 500/21 + '%';
            NewLeft[i].style.height = 60 + '%';
            NewLeft[i].style.opacity = 0.3;
            title[i].style.fontSize = 1 + 'vw';
            subtitle[i].style.fontSize = 1 + 'vw';
        }
    }
    counter = counter + 1;
    if (counter > 1) {
        counter = -3;
        commentSlide.style.left = counter * 400/13 + '%';
    } else {
        commentSlide.style.left = counter * 400/13 + '%';
    }
    switch(counter) {
        case 1:
            if (NewLeft[0]) {
                NewLeft[0].style.width = 500/21 + '%';
                NewLeft[0].style.height = 100 + '%';
                title[0].style.fontSize = 2 + 'vw';
                subtitle[0].style.fontSize = 1.5 + 'vw';
                NewLeft[0].style.opacity = 0.7;
            }
        break;
        case 0:
            if (NewLeft[1]) {
                NewLeft[1].style.width = 500/21 + '%';
                NewLeft[1].style.height = 100 + '%';
                title[1].style.fontSize = 2 + 'vw';
                subtitle[1].style.fontSize = 1.5 + 'vw';
                NewLeft[1].style.opacity = 0.7;
            }
        break;
        case -1:
            if (NewLeft[2]) {
                NewLeft[2].style.width = 500/21 + '%';
                NewLeft[2].style.height = 100 + '%';
                title[2].style.fontSize = 2 + 'vw';
                subtitle[2].style.fontSize = 1.5 + 'vw';
                NewLeft[2].style.opacity = 0.7;
            }
        break;
        case -2:
            if (NewLeft[3]) {
                NewLeft[3].style.width = 500/21 + '%';
                NewLeft[3].style.height = 100 + '%';
                title[3].style.fontSize = 2 + 'vw';
                subtitle[3].style.fontSize = 1.5 + 'vw';
                NewLeft[3].style.opacity = 0.7;
            }
        break;
        case -3:
            if (NewLeft[4]) {
                NewLeft[4].style.width = 500/21 + '%';
                NewLeft[4].style.height = 100 + '%';
                title[4].style.fontSize = 2 + 'vw';
                subtitle[4].style.fontSize = 1.5 + 'vw';
                NewLeft[4].style.opacity = 0.7;
            }
        break;
    }

})

window.onload = function() {
    setTimeout(function() {
        document.querySelector('.loader-block').style.display = 'none';
    },1000)
}


