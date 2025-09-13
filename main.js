const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const ul0 = document.querySelector('.uln');
const MyName = document.querySelector('.MyName');



menu.style.border = 'none'
menu.addEventListener('click', () => {
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
        menu.style.background = 'orange'
        menu.style.borderRadius = '0px'
        



    } else {
        nav.style.display = 'flex'
        menu.style.background = 'rgba(255, 255, 255, 0.763)'
        menu.style.borderRadius = '50%'


    }
})


// scroll animation of (0)

let content1 = document.querySelector('.content');
let clickcontact = document.querySelector('.clickOFContact')
content1.style.top = '-50px';
clickcontact.style.left = '-100px';
window.onscroll = () => {
    let value = scrollY;

    if (value <= 199) {
        content1.style.top = '-50px';
        clickcontact.style.left = '00px';


    } else {
        content1.style.top = '47px';
        clickcontact.style.left = '-100px';


    }
}
content1.style.top = '-50px';
if (content1.style.top == '-50px') {
    clickcontact.style.left = '00px';

} else {
    clickcontact.style.left = '-100px';

}