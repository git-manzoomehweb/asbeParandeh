const headerMenu = document.querySelector(".header-menu");
const headerMenuClose = document.querySelector(".header-menu-close");
const bars3 = document.querySelector(".bars3");

if (window.innerWidth >= 1024) {
  headerMenuClose.addEventListener("click", function () {
    headerMenu.style.visibility = "hidden";
    headerMenu.style.opacity = "0";
    // headerMenu.style.display = "none";
  });
  bars3.addEventListener("click", function () {
    headerMenu.style.visibility = "visible";
    headerMenu.style.opacity = "1";
    // headerMenu.style.display = "block";
  });
} else {
  headerMenuClose.addEventListener("click", function () {
    headerMenu.style.transform = "translateX(1024px)";
  });
  bars3.addEventListener("click", function () {
    headerMenu.style.transform = "translateX(0)";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleDropdowns = document.querySelectorAll(".toggle-dropdown");
  const dropdownIcons = document.querySelectorAll(".dropdown-icon");

  toggleDropdowns.forEach((toggle, index) => {
    const submenu = toggle.nextElementSibling;
    const dropdownIcon = dropdownIcons[index];

    toggle.addEventListener("click", function () {
      dropdownIcon.classList.toggle("rotate-180");

      if (submenu.style.maxHeight) {
        submenu.style.maxHeight = null;
        submenu.style.opacity = "0";
      } else {
        submenu.style.maxHeight = submenu.scrollHeight + "px";
        submenu.style.opacity = "1";
      }
    });
  });
});

function loadContentHomePage() {
  loadSearchEngine("search-engine.bc", "searchbox");
}
async function loadSearchEngine(url, sectionload) {
  try {
    var xhrobj = new XMLHttpRequest();
    xhrobj.open("GET", url);
    xhrobj.send();

    xhrobj.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var container = document.getElementById(sectionload);
        container.innerHTML = xhrobj.responseText;

        var scripts = container.getElementsByTagName("script");
        for (var i = 0; i < scripts.length; i++) {
          var scriptTag = document.createElement("script");

          if (scripts[i].src) {
            scriptTag.src = scripts[i].src;
            scriptTag.async = false;
          } else {
            scriptTag.text = scripts[i].textContent;
          }

          document.head
            .appendChild(scriptTag)
            .parentNode.removeChild(scriptTag);
        }

        const pathnamehome = window.location.pathname;
        if (pathnamehome) {
          if (pathnamehome == "/hotel") {
            sessionStorage.setItem("pageName", "hotel");
            $("#flight-type-items").hide();
            $("#Hotel").addClass("active-module");
            $("#Hotel").siblings("li").removeClass("active-module");
            $("#item-Hotel").show();
            $(
              "#item-Flight,#item-Tour,#item-FlightHotel,#item-Insurance,#item-Train"
            ).hide();
            $(".bg-background-banner").children().addClass("hidden");
            $(".bg-background-banner")
              .find("#hotel-title")
              .removeClass("hidden");
            changeParentBackground("hotelmodule-bg");
          } else if (pathnamehome == "/flight") {
            sessionStorage.setItem("pageName", "flight");
            $("#flight-type-items").show();
            $("#Flight").addClass("active-module");
            $("#Flight").siblings("li").removeClass("active-module");
            $("#item-Flight").show();
            $(
              "#item-Hotel,#item-Tour,#item-FlightHotel,#item-Insurance,#item-Train"
            ).hide();
            $(".bg-background-banner").children().addClass("hidden");
            $(".bg-background-banner")
              .find("#flight-title")
              .removeClass("hidden");
            changeParentBackground("flightmodule-bg");
          } else if (pathnamehome == "/flighthotel") {
            sessionStorage.setItem("pageName", "flighthotel");
            $("#flight-type-items").hide();
            $("#FlightHotel").addClass("active-module");
            $("#FlightHotel").siblings("li").removeClass("active-module");
            $("#item-FlightHotel").show();
            $(
              "#item-Flight,#item-Hotel,#item-Tour,#item-Insurance,#item-Train"
            ).hide();
            $(".bg-background-banner").children().addClass("hidden");
            $(".bg-background-banner")
              .find("#flighthotel-title")
              .removeClass("hidden");
            changeParentBackground("flighthotelmodule-bg");
          } else if (pathnamehome == "/tour") {
            sessionStorage.setItem("pageName", "tour");
            $("#flight-type-items").hide();
            $("#Tour").addClass("active-module");
            $("#Tour").siblings("li").removeClass("active-module");
            $("#item-Tour").show();
            $(
              "#item-Flight,#item-Hotel,#item-FlightHotel,#item-Insurance,#item-Train"
            ).hide();
            $(".bg-background-banner").children().addClass("hidden");
            $(".bg-background-banner")
              .find("#tour-title")
              .removeClass("hidden");
            changeParentBackground("tourmodule-bg");
          } else if (pathnamehome == "/train") {
            sessionStorage.setItem("pageName", "train");
            $("#flight-type-items").hide();
            $("#Train").addClass("active-module");
            $("#Train").siblings("li").removeClass("active-module");
            $("#item-Train").show();
            $(
              "#item-Flight,#item-Hotel,#item-FlightHotel,#item-Insurance,#item-Tour"
            ).hide();
            changeParentBackground("trainmodule-bg");
          } else if (pathnamehome == "/insurance") {
            sessionStorage.setItem("pageName", "insurance");
            $("#flight-type-items").hide();
            $("#Insurance").addClass("active-module");
            $("#Insurance").siblings("li").removeClass("active-module");
            $("#item-Insurance").show();
            $(
              "#item-Flight,#item-Hotel,#item-FlightHotel,#item-Train,#item-Tour"
            ).hide();
            changeParentBackground("insurancemodule-bg");
          } else {
            sessionStorage.setItem("pageName", "home");
            $("#flight-type-items").show();
            $("#Flight").siblings("li").removeClass("active-module");
            if (innerWidth > 1024) {
              $("#Flight").addClass("active-module");
            }
            $("#item-Flight").show();
            $(
              "#item-Hotel,#item-Tour,#item-FlightHotel,#item-Insurance,#item-Train"
            ).hide();
            changeParentBackground("flightmodule-bg");
          }
        }
      }
    };
  } catch (error) {}
}

var footerSwiper = new Swiper(".footer-swiper", {
    slidesPerView: 3,
    speed: 400,
    centeredSlides: false,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 9,
        spaceBetween: 50,
      },
    },
  });
  
var travelSwiper = new Swiper(".travel-swiper", {
  slidesPerView: 1,
  speed: 400,
  centeredSlides: false,
  spaceBetween: 30,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-custom",
    prevEl: ".swiper-button-prev-custom",
  },
  breakpoints: {
    1024: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
  },
});

var travelSwiperMobile = new Swiper(".travel-swiper-mobile", {
  slidesPerView: 1,
  speed: 400,
  centeredSlides: false,
  spaceBetween: 30,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-custom",
    prevEl: ".swiper-button-prev-custom",
  },
  breakpoints: {
    1024: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
  },
});

var tourSwiper = new Swiper(".tour-swiper", {
  slidesPerView: 1,
  speed: 400,
  centeredSlides: false,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next-custom",
    prevEl: ".swiper-button-prev-custom",
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
