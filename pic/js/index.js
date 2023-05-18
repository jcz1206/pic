// https://www.swiper.com.cn/usage/index.html
// https://www.swiper.com.cn/api/index.html
// https://cn.vuejs.org/guide/essentials/class-and-style.html#binding-html-classes

var swiperParams = {
    loop: true, // 循环模式选项
    autoplay: true,//可选选项，自动滑动
    autoplayDisableOnInteraction: false, // 这东西没用，垃圾
    on:  {
        slideChangeTransitionEnd: function() {
            if (swiperParams.autoplay) {
                this.autoplay.start();
            }
        }
    },
    preventLinksPropagation: false,   // 阻止点击事件冒泡
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
            has: true,
        }
    },
    methods: {
        getItems(v){
            if (v.trim()){
                const a = images.filter(item=>{
                    return item.id.indexOf(v)>-1;
                });
                if (a.length > 0) {
                    this.has = true;
                    return a;
                } else {
                    this.has = false;
                }
                return a;
            }
            this.has = true;
            return images;
        },
        cS(){
            this.items = this.getItems(this.sv);
            this.sv1 = this.sv;
            setTimeout(()=>{setSwiper(this.sv1);
            }, 1000)
            
        },
        sS(){
            this.s = true;
            this.$nextTick(()=>{
                this.$refs.inputSearch.focus();
                // var dom = document.querySelector('#inputSearch')
                // var evt = new InputEvent('input', {
                //     inputType: 'insertText',
                //     data: '',
                //     dataTransfer: null,
                //     isComposing: false
                // });
                // // dom.value = '输入的内容';
                // dom.dispatchEvent(evt);
            })
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