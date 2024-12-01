gsap.registerPlugin(ScrollTrigger);

$('.top-btn').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 600);
});

let lastScrollTop = 0;

$(window).scroll(function() {
    let currentScrollTop = $(this).scrollTop(); // 현재 스크롤 위치
    let docHeight = $(document).height(); // 전체 문서의 높이
    let windowHeight = $(window).height(); // 브라우저 창의 높이
    let introHeight = $('.sc-intro').outerHeight(); // .sc-intro의 높이

    // .sc-intro 영역에 있을 때는 탑버튼 숨기기
    if (currentScrollTop < introHeight) {
        gsap.set('.top-btn', {
            autoAlpha: 0
        });
    } else {
        // .sc-intro 영역을 벗어났을 때
        if (currentScrollTop > lastScrollTop) {
            // 내릴 때 탑버튼 숨기기
            gsap.set('.top-btn', {
                autoAlpha: 0
            });
        } else {
            // 올릴 때 탑버튼 보이기
            gsap.set('.top-btn', {
                autoAlpha: 1
            });
        }
    }

    // 화면 최하단에 가까운지 확인
    if (currentScrollTop + windowHeight >= docHeight - 10) {
        // 화면 최하단에 가까우면 탑버튼 보이기
        gsap.set('.top-btn', {
            autoAlpha: 1
        });
        gsap.to('.join', {
            yPercent: -100
        });
    }else {
        gsap.to('.join', {
            yPercent: 100
        });
    }

    lastScrollTop = currentScrollTop; // 현재 스크롤 위치 업데이트
});



const introTl = gsap.timeline({
    scrollTrigger: {
    scrub: 0,
    //pin: true,
    trigger: ".sc-intro",
    start: "0% 0%",
    end: "100% 100%",
    onLeave:function(){
        gsap.to('.sc-intro .desc-scroll-down', { autoAlpha: 0 });
    },
    onEnterBack:function(){
        gsap.to('.sc-intro .desc-scroll-down', { autoAlpha: 1 });
    }
    
    },
    
});

introTl
.to(".intro-desc-text1",{opacity:1})
.to(".sc-intro",{'--opacity':1},"<")
.to(".intro-desc-text1",{opacity:0,
    onStart:function(){
        document.querySelector('.header').classList.add('show');
    },
    onReverseComplete:function(){
        document.querySelector('.header').classList.remove('show');
    }
})
.to(".intro-desc-text2",{opacity:1})
.to(".intro-desc-text2",{opacity:0})
.to(".intro-desc-text3",{opacity:1})
.to(".intro-desc-text3",{opacity:0})
.to(".intro-desc-text4",{opacity:1})



const showcase = gsap.timeline({
    scrollTrigger: {
        trigger: ".sc-showcase",
        start: "0% 0%",
        end: "100% 100%",
        scrub: 0,
        // markers:true,
    },
})
showcase
.from('.sc-showcase .showcase-intro-inner',{
    autoAlpha:0
})
.from('.sc-showcase .showcase-contents',{
'--opacity':0
},"<")
.to('.showcase-intro-text:nth-child(1)',{
    xPercent:100
})
.to('.showcase-intro-text:nth-child(3)',{
    xPercent:-100
},"<")
.to('.sc-showcase .showcase-contents',{
    '--opacity':0
},"<")
.to('.sc-showcase .showcase-intro-inner',{
    autoAlpha:0
})
.to('.sc-showcase .showcase-img .img:nth-child(3)',{
    height:0
})
.to('.sc-showcase .showcase-img .img:nth-child(2)',{
    height:0
})
.from('.sc-showcase .showcase-description',{
    autoAlpha:0
})
.to('.sc-showcase .showcase-contents',{
    '--opacity':1
},"<")




$(`[data-header="dark"]`).each(function(i,el){
    ScrollTrigger.create({
        trigger:el,
        start:"0% 0%",
        end:"100% 0%",
        toggleClass:{
            targets:"header",
            className:"dark"
        },
        //markers:true
    })
})



ScrollTrigger.create({
    trigger:`[data-theme="dark"]`,
    start:"0% 50%",
    end:"100% 50%",
    toggleClass:{
        targets:"body",
        className:"dark"
    },
    onLeave:function(){
        $('header').addClass('dark')
    },onEnterBack:function(){
        $('header').removeClass('dark')
    },
    //markers:true

})

const possibility = gsap.timeline({
    scrollTrigger:{
        trigger: ".sc-possibility",
        start: "0 0%",
        end: "100% 100%",
        scrub: 0,
        // markers:true,
        invalidateOnRefresh:true,
    },
});
possibility
.to(".sc-possibility .slide-wrap",{
    xPercent:-100,
    x:function(){
        return window.innerWidth
    }
})


const featureBottomTl = gsap.timeline({
    scrollTrigger:{
        trigger: ".sc-feature-bottom",
        start: "0 90%",
        end: "100% 80%",
        scrub: 0,
        // markers:true,
    },
});
featureBottomTl
.from('.sc-feature-bottom .feature-item:nth-child(1)',{xPercent:-50})
.from('.sc-feature-bottom .feature-item:nth-child(2)',{xPercent:-50},"<")
.from('.sc-feature-bottom .feature-item:nth-child(3)',{xPercent:50},"<")


const featureBottomTl2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".sc-feature-bottom",
        start: "0 50%",
        end: "100% 30%",
        scrub: 0,
        // markers:true,
        onEnter:function(){
            $('.sc-feature-bottom').addClass('blur')
        },
        onLeaveBack:function(){
            $('.sc-feature-bottom').removeClass('blur')
        }
    },
});
featureBottomTl2
.from('.sc-feature-bottom .feauture-title',{opacity:0})



gsap.set('.sc-service .service-area2 .card-text',{autoAlpha:0})
gsap.set('.sc-service .service-area3 .card-item:nth-child(1)', {autoAlpha:0})

const service1 = gsap.timeline({
    scrollTrigger:{
        trigger: ".service-area1",
        start: "0 0%",
        end: "100% 100%",
        scrub: 0,
        //markers:true,
        invalidateOnRefresh:true,

    },
});
service1
.to('.sc-service .service-slide',{
    x:function(){
        return -$('.sc-service .service-area1 .slide-head').outerWidth();
    }
})
.to('.sc-service .service-area1 li.card-item:nth-child(2)',1,{
    xPercent:-100,
    x:-40*1
})
.to('.sc-service .service-area1 li.card-item:nth-child(3)',1,{
    xPercent:-100*2,
    x:-40*2
},"<")
.to('.sc-service .service-area1 li.card-item:nth-child(4)',1,{
    xPercent:-100*3,
    x:-40*3
},"<")
.to('.sc-service .service-area1 .icon-card-img',{
    autoAlpha:0
},'b-=0.5')
.to('.sc-service .service-area1 .icon-card-img-active',{
    autoAlpha:1
},'b-=0.5')





const service2 = ScrollTrigger.create({
    trigger:'.service-area2',
    start:"0% 0%",
    end:"100% 100%",
    fastScrollEnd: 3000,
    onEnter:function(){
        gsap.set('.sc-service .service-area1 ul.card-list',{autoAlpha:0})
        gsap.set('.sc-service .service-area2 .card-text',{autoAlpha:1})
        gsap.to('.sc-service .service-wrap .card-text .text-gradient', {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
        });
    },
    onLeaveBack:function(){
        gsap.set('.sc-service .service-area1 ul.card-list',{autoAlpha:1})
        gsap.set('.sc-service .service-area2 .card-text',{autoAlpha:0})
        gsap.to('.sc-service .service-wrap .card-text .text-gradient', {
            opacity: 0,
            duration: 1,
            ease: "power2.out",
        });
        
    }

})

const service3 = gsap.timeline({
    scrollTrigger:{
        trigger: ".service-area3",
        start: "0 0%",
        end: "100% 100%",
        scrub: 0,
        //markers:true,
        invalidateOnRefresh:true,
        fastScrollEnd: 3000,

        onEnter:function(){
            gsap.set('.sc-service .service-area2 .card-text',{
                autoAlpha:0
            })
            gsap.set('.sc-service .service-area3 .card-item:nth-child(1)',{
                autoAlpha:1
            })
        },
        onLeaveBack:function(){
            gsap.set('.sc-service .service-area2 .card-text',{
                autoAlpha:1
            })
            gsap.set('.sc-service .service-area3 .card-item:nth-child(1)',{
                autoAlpha:0
            })
        }
    },
})
service3
.to('.sc-service .service-area3 .card-item:not(:first-child)',{
    '--opacity' : 1,
},'a')
.to('.sc-service .service-area3 .card-item:not(:first-child) img',{
    'filter' : 'blur(10px)',
},'a')
.to('.sc-service .service-area3 .card-item:nth-child(2)',{
    xPercent:-100,
    x:-40,
},'b')
.to('.sc-service .service-area3 .card-item:nth-child(3)',{
    xPercent:-100*2,
    x:-40*2
},'b')
.to('.sc-service .service-area3 .card-item:nth-child(4)',{
    xPercent:-100*3,
    x:-40*3
},'b')
.to('.sc-service .service-area3 p.title',{
    opacity:1,
},'c')
.to('.sc-service .service-area3 .card-text',{
    '--opacity':1,
},'c')


$('.sc-prove').each(function(i, el) {
    
    const $middleItem = $(el).find(".prove-item:nth-child(2)"); // 가운데 문장의 너비 및 위치
    const middleWidth = $middleItem.outerWidth();
    const middleLeft = $middleItem.offset().left;  // 가운데 문장의 왼쪽 위치

    // 첫 번째 문장과 세 번째 문장의 초기 위치 계산
    const $firstItem = $(el).find(".prove-item:nth-child(1)");
    const $thirdItem = $(el).find(".prove-item:nth-child(3)");

    const firstItemWidth = $firstItem.outerWidth();  // 첫 번째 문장의 너비
    const thirdItemLeft = $thirdItem.offset().left;  // 세 번째 문장의 왼쪽 위치

    // 첫 번째 문장의 끝을 가운데 문장의 왼쪽 끝으로 맞추기 위해 이동해야 할 거리
    const firstItemEnd = middleLeft - firstItemWidth;

    const proveTl = gsap.timeline({
        scrollTrigger: {
            trigger: el,
            start: "0 70%",
            end: "100% 80%",
            scrub: 0,
        },
    });

    proveTl
        // 첫 번째 문장의 끝을 가운데 문장의 왼쪽 끝에 맞추기
        .to($firstItem, { x: firstItemEnd - $firstItem.offset().left })
        
        // 세 번째 문장을 가운데 문장의 오른쪽 끝으로 이동
        .to($thirdItem, { x: middleLeft + middleWidth - thirdItemLeft }, "<")
        
        // 바 애니메이션 추가
        .from(el, { "--barX": 100 }, "<");
});




// const proveNetworkTl = gsap.timeline({
//     scrollTrigger:{
//         trigger: ".sc-prove-network",
//         start: "0 30%",
//         end: "100% 100%",
//         scrub: 0,
//     },
// });
// proveNetworkTl.to(".sc-prove-network .sc-prove-before",{x:-250},"transform")
// .to(".sc-prove-network .sc-prove-after",{x:250},"transform")
// .to(".sc-prove-network .prove-item.item1",{x:-400},"transform")
// .to(".sc-prove-network .prove-item.item3",{x:380},"transform")
gsap.set(".sc-asset .down p span:nth-child(2) ",{
    autoAlpha:0
})

const sectionAsset = gsap.timeline({
    scrollTrigger:{
        trigger: ".sc-asset",
        start: "0 0%",
        end: "100% 100%",
        scrub: 0,
        invalidateOnRefresh:true,
        //markers:true,

        onEnter:function(){
            gsap.set('.sc-asset .card-item',{
                "--opacity":1
            })
            gsap.to(".sc-asset .down ",{
                autoAlpha:1
            })
        },
        onLeaveBack:function(){
            gsap.set('.sc-asset .card-item',{
                "--opacity":0
            })
            gsap.to(".sc-asset .down ",{
                autoAlpha:0
            })
        },
        onLeave:function(){
            gsap.to(".sc-asset .down ",{
                autoAlpha:0
            })
        },
        onEnterBack:function(){
            gsap.to(".sc-asset .down ",{
                autoAlpha:1
            })
        },
        onUpdate:function(self){
            const progress = self.progress; 
            if(progress > 0.5){
                gsap.set(".sc-asset .down p span:nth-child(1) ",{
                    autoAlpha:0
                })
                gsap.set(".sc-asset .down p span:nth-child(2) ",{
                    autoAlpha:1
                })
                gsap.to(".asset-slide .card-item .blur ",{
                    'filter': 'blur(40px)',
                    
                })
            }else {
                gsap.set(".sc-asset .down p span:nth-child(2) ",{
                    autoAlpha:0
                })
                gsap.set(".sc-asset .down p span:nth-child(1) ",{
                    autoAlpha:1
                })
                gsap.to(".asset-slide .card-item .blur ",{
                    'filter': 'blur(0px)',
                    
                })
            }
        }
        
    },
})
sectionAsset.to(".asset-slide",{
    xPercent:-100,
    x:()=>{
        return window.innerWidth
    }
})

const sectionCreator = gsap.timeline({
    scrollTrigger:{
        trigger: ".sc-creator",
        start: "0 0%",
        end: "100% 100%",
        scrub: 0,

        //markers:true,
    },
})
.to('.sc-creator .title',{
    opacity : 1
})

const sectionCreator2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".sc-creator-slide",
        start: "0 0%",
        end: "100% 100%",
        scrub: 0,
        //markers:true,

        onEnter:function(){
            gsap.to('.sc-creator-slide li.card-item .blur',{
                'filter': 'blur(30px)'
            })
        },
        onLeaveBack:function(){
            
        },
        
    },
})
sectionCreator2.to(".creator-slide",{
    xPercent:-100,
    x:()=>{
        return window.innerWidth
    }
})

for (let i = 0; i < 1; i++) {
    $('.join .join-wrap').first().clone().appendTo('.join');
}

