
$(window).load(function(){
  $(".preloader").fadeOut();
})




$(document).ready(function(){

   
// main Swiper 
const mainSwiper = new Swiper('.mainBanner .swiper', {
  loop: true,
  autoplay: true,
  draggable: true,

  pagination: {
    el: '.mainBanner .swiper-pagination',
    clickable: true,
  },
  
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
  }
});


if($(window).width() < 768){
  const bannersGroup = new Swiper('.banners-group .swiper', {
    loop: true,
    autoplay: true,
    draggable: true,
    pagination: {
      el: '.banners-group .swiper-pagination',
      clickable: true,
    },
    
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      
    }
  
  })
}

// Bnners group swiper 



// categories swiper
const categories = new Swiper('.categories .swiper', {
  loop: true,
  autoplay : true ,
  pagination: {
    el: '.categories .swiper-pagination',
    clickable: true,
  },

  // Responsive breakpoints
  breakpoints: {
    350: {
      slidesPerView: 3,
      spaceBetween: 7
    },
    580: {
      slidesPerView: 4,
      spaceBetween: 7
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 7
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 7
    } , 
      1200: {
      slidesPerView: 7,
      spaceBetween: 7
    } , 
    1450: {
      slidesPerView: 8,
      spaceBetween: 7.1
    }
  }
});


//  newArrival swiper

const newArrivalSwiper = new Swiper(' .newarrival .swiper', {
  loop: true,
  autoplay: true,
  draggable: true,
 
  pagination: {
    el: '.newarrival .swiper-pagination',
    clickable: true,
  },
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 7
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 17
    } , 
    1200: {
      slidesPerView: 5,
      spaceBetween: 17
    } , 
    1399: {
      slidesPerView: 6,
      spaceBetween: 17
    }
  }
});

//  special-offers swiper

const specialOffersSwiper = new Swiper(' .special-offers .swiper', {
  loop: true,
  autoplay: true,
  draggable: true,
 
  pagination: {
    el: '.special-offers .swiper-pagination',
    clickable: true,
  },
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 7
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 17
    } , 
    1200: {
      slidesPerView: 5,
      spaceBetween: 17
    } , 
    1399: {
      slidesPerView: 6,
      spaceBetween: 17
    }
  }
});

//  bestseller swiper
const bestsellerSwiper = new Swiper(' .bestseller .swiper', {
  loop: true,
  autoplay: true,
  draggable: true,
 
  pagination: {
    el: '.bestseller .swiper-pagination',
    clickable: true,
  },
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 7
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 17
    } , 
    1200: {
      slidesPerView: 5,
      spaceBetween: 17
    } , 
    1399: {
      slidesPerView: 6,
      spaceBetween: 17
    }
  }
});

//  shemagh-ghutra swiper
const shemaghGhutraSwiper = new Swiper(' .shemagh-ghutra .swiper', {
  loop: true,
  autoplay: true,
  draggable: true,
 
  pagination: {
    el: '.shemagh-ghutra .swiper-pagination',
    clickable: true,
  },
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 7
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 17
    } , 
    1200: {
      slidesPerView: 5,
      spaceBetween: 17
    } , 
    1399: {
      slidesPerView: 6,
      spaceBetween: 17
    }
  }
});



// brands swiper
const brands = new Swiper('.brands .swiper', {
  loop: true,
  autoplay : true ,
  pagination: {
    el: '.brands .swiper-pagination',
    clickable: true,
  },

  // Responsive breakpoints
  breakpoints: {
    350: {
      slidesPerView: 3,
      spaceBetween: 7
    },
    580: {
      slidesPerView: 4,
      spaceBetween: 9
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 9
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 9
    } , 
      1200: {
      slidesPerView: 6,
      spaceBetween: 9
    } , 
    1450: {
      slidesPerView: 8,
      spaceBetween: 9.4
    }
  }
});











// **************************************************************************************************



// open and close nav

let closeBtn = document.querySelector(".closeBtn"); 
let openBtn = document.querySelector(".bars"); 

closeBtn.addEventListener("click" , function(){
  $("nav").removeClass("open-nav");
  $("body").removeClass("overflow-hiddden") ;
})

openBtn.addEventListener("click" , function(){
  $("nav").addClass("open-nav");  
  $("body").addClass("overflow-hiddden") ;
})



// **************************************************************************************************

// to top button

$(window).scroll(function(){
  if($(window).scrollTop() > 150){
    $(".toTop").addClass("showToTop")
  }else{
    $(".toTop").removeClass("showToTop")
  }
})

$(".toTop").click(function(){
  $('html, body').animate({scrollTop:0}, 400);
}) 



// **************************************************************************************************


//fixed nav

let myHeader = document.querySelector("header"),
prevScrollposition = $(window).scrollTop();

$(window).on("scroll", function () {
   if ($(window).scrollTop() > 150) {
       $(myHeader).addClass("fixed");
   } else {
       $(myHeader).removeClass("fixed");
   }
   var scrollTop = $(window).scrollTop();
   prevScrollposition < scrollTop && prevScrollposition > 0 ? myHeader.classList.add("stayTop") : myHeader.classList.remove("stayTop"), (prevScrollposition = scrollTop);
 });







// **************************************************************************************************

// nested menus in siebar

if($(window).width() <= 992) {  
  $(".categories-btn").click(function (e) {
    e.preventDefault() ;
    $(this).siblings(".sub-menu").slideToggle(300) ;
    $(this).toggleClass("nav-arrow-rotate");
    })
}



  /********************************************************************************* */

// footer nested menu

if($(window).width() < 768){
  $(".footer-title").click(function(e){
    e.preventDefault() ;
    $(this).next().slideToggle(300) ; 
    $(this).toggleClass("arrow-rotate");
    $(".footer-title").not($(this)).next().slideUp(300);
    $(".footer-title").not($(this)).removeClass("arrow-rotate");
  })
  }






/********************************************************************************* */


})







