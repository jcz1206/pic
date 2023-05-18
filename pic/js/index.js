// https://www.swiper.com.cn/usage/index.html
// https://www.swiper.com.cn/api/index.html
// https://cn.vuejs.org/guide/essentials/class-and-style.html#binding-html-classes

var swiperParams = {
    loop: true, // 循环模式选项
    autoplay: true,//可选选项，自动滑动
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
}

var mySwiper;
function setSwiper(v) {
    swiperParams.autoplay = !v || (v && v.trim().length <= 0);
    mySwiper = new Swiper ('.swiper', swiperParams);
}

function ss(v){
    if (v.trim()){
        const a = images.filter(item=>{
            return item.id.indexOf(v)>-1;
        });
        if (a.length > 0) {
            return a;
        }
        return a;
    }
    return images;
}

const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            items: images,
            s: false,
            sv:'',
            sv1: '',
        }
    },
    methods: {
        cS(){
            this.items = ss(this.sv);
            this.sv1 = this.sv;
            setTimeout(()=>{setSwiper(this.sv1);}, 100)
            
        },
        sS(){
            this.s = true;
          // 反例：无法访问此处的 `this`!
        },
        hS(){
            this.s = false;
            this.sv = this.sv1;
          // 反例：无法访问此处的 `this`!
        }
    },
    mounted() {
        setSwiper();
    }
}).mount('#app');