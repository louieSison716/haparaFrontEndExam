export const scrollSearch = () => {
    var target = $("#search_form");
    if (target.length) {
        $('html,body').animate({
        scrollTop: target.offset().top
        }, 1000);
        return false;
    }
}