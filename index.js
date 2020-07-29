// ---------------------- swiper设置 -----------------------
var mySwiper = new Swiper(".swiper-container", {
  // 循环模式选项
  loop: true,
  // 是否自动切换
  autoplay: {
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // 如果需要分页器
  pagination: {
    el: ".swiper-pagination",
  },
  // 如果需要前进后退按钮
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//鼠标滑过pagination控制swiper切换
for (i = 0; i < mySwiper.pagination.bullets.length; i++) {
  mySwiper.pagination.bullets[i].onmouseover = function () {
    this.click();
  };
}

//如果你在swiper初始化后才决定使用clickable，可以这样设置
mySwiper.params.pagination.clickable = true;
//此外还需要重新初始化pagination
mySwiper.pagination.destroy();
mySwiper.pagination.init();
mySwiper.pagination.bullets.eq(0).addClass("swiper-pagination-bullet-active");

// ---------------------- swiper设置结束 -----------------------

// ---------------------- header隐藏 -----------------------
var head = document.getElementsByClassName("header")[0];
window.onscroll = function () {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > 300) {
    head.classList.add("headernone");
  } else {
    head.classList.remove("headernone");
  }
};
