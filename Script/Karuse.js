document.addEventListener('DOMContentLoaded', function() {
    const leftArrow = document.querySelector('.arrow-left');
    const rightArrow = document.querySelector('.arrow-right');
    const photoContainer = document.querySelector('.cont_cat');

    leftArrow.addEventListener('click', function() {
        rotateLeft();
    });

    rightArrow.addEventListener('click', function() {
        rotateRight();
    });

    function rotateLeft() {
        const photos = Array.from(document.querySelectorAll('.cont_cat .photo:not(.arrow)'));
        photoContainer.insertBefore(photos[photos.length - 1], photos[0]);
    }

    function rotateRight() {
        const photos = Array.from(document.querySelectorAll('.cont_cat .photo:not(.arrow)'));
        photoContainer.insertBefore(photos[0], rightArrow);
    }
});
