var mySwiper = new Swiper ('.swiper', {
    loop: true, // 循环模式选项
    // autoplay: true,//可选选项，自动滑动
    // grabCursor: true,
    watchSlidesProgress: true,
    mousewheelControl: true,
    keyboardControl: true,

    // direction: 'vertical',
    // nested:true,
    // //resistanceRatio: 0,
    // slidesPerView: 'auto',
    // freeMode: true,
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    
    // 如果需要分页器
    pagination: {
    el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
    el: '.swiper-scrollbar',
    },
})  