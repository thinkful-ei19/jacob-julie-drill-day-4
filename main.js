function carousel () {
    $('.thumbnails img').on('click', event => {
        $('.hero img').attr('src', $(event.target).attr('src'));
        $('.hero img').attr('alt', $(event.target).attr('alt'));
        console.log("test");
    });
}
$(carousel);