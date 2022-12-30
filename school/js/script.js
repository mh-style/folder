$(".mh-slider").mhSlider({
    nav: true,
    loop: true,
    dots: false,
    margin: 10,
});

let search_bar_show = document.querySelector('#search-bar-show');
let search_bar_show_input = document.getElementById('search-bar');
search_bar_show.addEventListener('mouseenter', function () {
    search_bar_show_input.style.opacity = 1;
});
if (search_bar_show_input == null) {
    search_bar_show_input.style.opacity = 1;
} else {
    search_bar_show.addEventListener('mouseleave', function () {
        search_bar_show_input.style.opacity = 0;
    });
}
