$('.section-title').click(
    function () {
        $(this).next('.list').toggle();
        $(this).children().children('.click-here').hide();
        $(this).children().children('.clicked').show();
    }
);

$('.date').html(new Date().getFullYear());
