var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
  });
  
  
  
  // toggle menu/navbar script
  $('.menu-btn').click(function() {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});

// typing text animation script
var typed = new Typed(".typing", {
    strings: ["Web-Applications", "Mobile-Applications", "Garphic Designin", "UI/UX Design", "Content-Creating" ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});




