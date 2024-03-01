document.querySelector('.header__burger').onclick = () =>{
    document.querySelector('.menu').classList.toggle('active');
}

const mainSwipers = document.querySelectorAll(".mySwiper")

mainSwipers.forEach(mainSwiper =>{
    var swiper = new Swiper(mainSwiper, {
        slidesPerView: 4,
        grid: {
            rows: 1,
            fill: "row"
        },
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
        },
        pagination: {
            el: '.product-pagination',
            type: "fraction"
        }
    });
})

const cardContentArr = document.querySelectorAll('.js-product-card')


cardContentArr.forEach(cardContent => {
    const slider = cardContent.querySelector('.mySwiper2')

    const slider2 = cardContent.querySelector('.mySwiper3')


    var swiper2 = null;
    var swiper3 = null 
    if(slider){
        swiper2 = new Swiper(slider, {
            slidesPerView: 1,
            allowTouchMove: false
        });
    }
    if(slider2){
        swiper3 = new Swiper(slider2, {
            slidesPerView: 1,
            allowTouchMove: false,
            speed: 0,
            effect: "fade",
            fadeEffect: {
                crossFade: true,
            },
        });
    }

    var optionButtons = cardContent.querySelectorAll('.product_collage__card_option');

    optionButtons.forEach(function (button, index) {
    button.addEventListener('click', function (e) {
        if(swiper2){
            swiper2.slideTo(index);
        }
        if(swiper3){
            swiper3.slideTo(index);
        }
        
        const allRelatedBtns = e.currentTarget.parentNode.querySelectorAll('.product_collage__card_option:not(.more)')
        allRelatedBtns.forEach((item) => {
            if(item !== e.currentTarget){
                item.classList.remove('active');
                item.style.borderWidth = '0px'
            }else{
                item.classList.add('active');
                item.style.borderWidth = '2px'
            }
        })
    });
});

})


const faqRows = document.querySelectorAll('.js-faq');


    faqRows.forEach(item =>{
        const btns = item.querySelectorAll('.js-btn')
        const content = item.querySelector('.js-content')


        btns.forEach(btn =>{
            btn.onclick = () => {
                content.classList.toggle('active')
            }
        })

        // btn.
    })


    const urlParams = new URLSearchParams(window.location.search);
    const currentPage = urlParams.get('page') || 1;


    var swiper = new Swiper(".mySwiper", {
        initialSlide: currentPage - 1,
        slidesPerView: 4,
        grid: {
            rows: 1,
            fill: "row"

        },
        allowTouchMove: false,
        spaceBetween: 30,
        // pagination:true,
        pagination: {
            el: ".product-pagination",
            clickable: true,
            type: "fraction"
        },
        navigation: {
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
        },
        // pagination: {
        //     el: '.product-pagination',
        //     renderBullet: function (index, className) {
        //         return '<span class="custom-bullet ' + className + '">' + (index + 1) + "</span>";
        //     },
        // },
    });

    var swiper = new Swiper(".mySwiper10", {
        initialSlide: currentPage - 1,
        slidesPerView: 4,
        grid: {
            rows: 2,
            fill: "row"

        },
        allowTouchMove: false,
        spaceBetween: 30,
        // pagination:true,
        pagination: {
            el: ".product-pagination",
            clickable: true,
             type: "fraction"
        },
        navigation: {
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
        },
        pagination: {
            el: '.product-pagination',
            renderBullet: function (index, className) {
                return '<span class="custom-bullet ' + className + '">' + (index + 1) + "</span>";
            },
        },
    });



    swiper.on('slideChange', function () {
        var currentSlideIndex = swiper.activeIndex;
        const urlParams = new URLSearchParams(window.location.search);
        const newUrl = window.location.pathname + '?page=' + (currentSlideIndex + 1);
        history.pushState({}, '', newUrl);
    });


    var swiper6 = new Swiper(".mySwiper6", {
        slidesPerView: 1,
        effect:'fade',
        allowTouchMove: false,
        fadeEffect: {
            crossFade: true,
        },
        speed: 100,

        
    });

    var swiper5 = new Swiper(".mySwiper5", {
        slidesPerView: 1,
        effect:'fade',
        fadeEffect: {
            crossFade: true,
        },
        speed: 100,
        navigation: true,
        pagination: {
            el: '.product-pagination-234',
            type: "fraction"
        },
        navigation: {
            nextEl: ".swiper-button-next-custom2",
            prevEl: ".swiper-button-prev-custom2",
        },
        thumbs: {
            swiper: swiper6,
        },
    });
