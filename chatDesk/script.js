const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: false,
    slidesPerView: 5, // показывать по 5 изображению
    spaceBetween: 22, // расстояние между слайдами
    mousewheel: true,
    freeMode: true, // при перетаскивании превью ведет себя как при скролле
    // autoplay: true, // автоматическая прокрутка

    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    scrollbar: {
        el: '.swiper-scrollbar',
    },


});