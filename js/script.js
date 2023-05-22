let allImg = document.querySelectorAll('.infinity-slider img');
let current = 0;

function slider() {
    for (let i = 0; i < allImg.length; i++) {
        allImg[i].classList.add('opacity0');
    }

    allImg[current].classList.remove('opacity0');

    if (current + 1 == allImg.length) {
        current = 0;
    }
    else {
        current++;
    }
}

document.querySelector('.infinity-slider').onclick = slider;