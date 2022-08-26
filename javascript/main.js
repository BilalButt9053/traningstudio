const menu=document.querySelector('#menu');
const navdata=document.querySelector('#navdata');

menu.addEventListener('click',function(){
    console.log("ssnjasdknhasjkf")
    if (!navdata.classList.contains('show')) {
        navdata.classList.add('show');
        navdata.classList.remove('right-navbar');
    } else {
        navdata.classList.add('right-navbar');
        navdata.classList.remove('show');
    }
})