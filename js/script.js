$(document).ready(function() {
    $(".inquireClose").click(function() {
        $(".inquiremassege").hide(100);
    });
});

// window.addEventListener('scroll', function() {


//     // stikyHeaderMenu.classList.toggle('stikyHeaderMenu', window.scrollY > 0);
//     // stikylogoImage.classList.toggle('stikylogoImage', window.scrollY > 0);
//     // stikyList.classList.toggle('stikyList', window.scrollY > 0);
//     // stikyA.classList.toggle('stikyA', window.scrollY > 0);

// });

const stikyHeaderMenu = document.querySelector('.headerMenu');


window.addEventListener("scroll", function() {
    if (window.scrollY >= 30) {
        stikyHeaderMenu.style.position = 'fixed';
        stikyHeaderMenu.style.top = '0';
        stikyHeaderMenu.style.height = '100px';
        stikyHeaderMenu.style.padding = '0px';
        stikyHeaderMenu.style.background = '#eed7ce';
    } else {
        stikyHeaderMenu.style.position = 'absolute';
        stikyHeaderMenu.style.top = '0';
        stikyHeaderMenu.style.height = '170px';
        stikyHeaderMenu.style.padding = '0px';
        stikyHeaderMenu.style.background = 'linear-gradient(181deg, rgb(238 215 206 / 44%), rgb(238 215 206 / 0%))';
    }

});