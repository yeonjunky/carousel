const carousel = document.getElementsByClassName('carousel');
const right_arrow = document.getElementById('right');
const left_arrow = document.getElementById('left');

console.log(right_arrow)

let current_img = 0;
const carousel_len = carousel.length - 1;

const class_name = 'carousel';
const active = ' active';


function move(direction){
    if (direction === 'right'){
        if (current_img != carousel_len){
            carousel[current_img].className = class_name
            carousel[current_img + 1].className =  carousel[current_img + 1].className + active;
            current_img++;

        } else {
            carousel[current_img].className = class_name;
            carousel[0].className = carousel[1].className + active;
            current_img = 0;

        }

    } else if (direction === 'left') {
        if (current_img === 0){
            carousel[current_img].className = class_name
            carousel[carousel_len].className =  carousel[carousel_len].className + active;
            current_img = carousel_len;

        } else {
            carousel[current_img].className = class_name;
            carousel[current_img - 1].className = carousel[1].className + active;
            current_img--;

        }
    }
}

right_arrow.onclick = () => move('right');
left_arrow.onclick = () => move('left');
