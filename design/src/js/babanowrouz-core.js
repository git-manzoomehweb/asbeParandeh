

function loadContentHomePage() {
  loadSearchEngine('search-engine.bc', 'searchbox');
}
async function loadSearchEngine(url, sectionload) {
  try {
    var xhrobj = new XMLHttpRequest();
    xhrobj.open('GET', url);
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

          document.head.appendChild(scriptTag).parentNode.removeChild(scriptTag);
        }

        const pathnamehome = window.location.pathname;
        if (pathnamehome) {
          if (pathnamehome == '/hotel') {
            sessionStorage.setItem('pageName', 'hotel');
            $("#flight-type-items").hide();
            $("#Hotel").addClass("active-module");
            $("#Hotel").siblings("li").removeClass("active-module");
            $("#item-Hotel").show();
            $("#item-Flight,#item-Tour,#item-FlightHotel,#item-Insurance,#item-Train").hide();
            $('.bg-background-banner').children().addClass('hidden');
            $('.bg-background-banner').find('#hotel-title').removeClass('hidden');
            changeParentBackground('hotelmodule-bg');

          } else if (pathnamehome == '/flight') {
            sessionStorage.setItem('pageName', 'flight');
            $("#flight-type-items").show();
            $("#Flight").addClass("active-module");
            $("#Flight").siblings("li").removeClass("active-module");
            $("#item-Flight").show();
            $("#item-Hotel,#item-Tour,#item-FlightHotel,#item-Insurance,#item-Train").hide();
            $('.bg-background-banner').children().addClass('hidden');
            $('.bg-background-banner').find('#flight-title').removeClass('hidden');
            changeParentBackground('flightmodule-bg');
          } else if (pathnamehome == '/flighthotel') {
            sessionStorage.setItem('pageName', 'flighthotel');
            $("#flight-type-items").hide();
            $("#FlightHotel").addClass("active-module");
            $("#FlightHotel").siblings("li").removeClass("active-module");
            $("#item-FlightHotel").show();
            $("#item-Flight,#item-Hotel,#item-Tour,#item-Insurance,#item-Train").hide();
            $('.bg-background-banner').children().addClass('hidden');
            $('.bg-background-banner').find('#flighthotel-title').removeClass('hidden');
            changeParentBackground('flighthotelmodule-bg');
          } else if (pathnamehome == '/tour') {
            sessionStorage.setItem('pageName', 'tour');
            $("#flight-type-items").hide();
            $("#Tour").addClass("active-module");
            $("#Tour").siblings("li").removeClass("active-module");
            $("#item-Tour").show();
            $("#item-Flight,#item-Hotel,#item-FlightHotel,#item-Insurance,#item-Train").hide();
            $('.bg-background-banner').children().addClass('hidden');
            $('.bg-background-banner').find('#tour-title').removeClass('hidden');
            changeParentBackground('tourmodule-bg');
          }
          else if (pathnamehome == '/train') {
            sessionStorage.setItem('pageName', 'train');
            $("#flight-type-items").hide();
            $("#Train").addClass("active-module");
            $("#Train").siblings("li").removeClass("active-module");
            $("#item-Train").show();
            $("#item-Flight,#item-Hotel,#item-FlightHotel,#item-Insurance,#item-Tour").hide();
            changeParentBackground('trainmodule-bg');

          } else if (pathnamehome == '/insurance') {
            sessionStorage.setItem('pageName', 'insurance');
            $("#flight-type-items").hide();
            $("#Insurance").addClass("active-module");
            $("#Insurance").siblings("li").removeClass("active-module");
            $("#item-Insurance").show();
            $("#item-Flight,#item-Hotel,#item-FlightHotel,#item-Train,#item-Tour").hide();
            changeParentBackground('insurancemodule-bg');
          } else {
            sessionStorage.setItem('pageName', 'home');
            $("#flight-type-items").show();
            $("#Flight").siblings("li").removeClass("active-module");
            if(innerWidth > 1024){
              $("#Flight").addClass("active-module");
            }
            $("#item-Flight").show();
            $("#item-Hotel,#item-Tour,#item-FlightHotel,#item-Insurance,#item-Train").hide();
            changeParentBackground('flightmodule-bg');
          }

        }
      }
    };
  } catch (error) {
  }

}

