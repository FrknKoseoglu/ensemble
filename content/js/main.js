V = {
  urlData: "", // Global değişkenler

  init: function () {
    V.global();
    V.features.init();
    V.buttons.init();
  },



  features: {
    init: function () {
      // this.clientInfo();
      this.smoothScroll();
      this.splashScreen();
    },

    copyToClipboard:function(element,coinName){
      
      $(".copyBlock").addClass("active");
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(element).text()).select();
        document.execCommand("copy");
        $temp.remove();
        if(coinName == "btc"){
          var coinAdress = $(".btc #btc").text();
          var copyText = "Bitcoin Copy Succsess"
        }
        else if(coinName == "eth")
        {
          var coinAdress = $(".eth #eth").text();
          var copyText = "Ethereum Copy Succsess"
        }
        else if(coinName == "bnb"){
          var coinAdress = $(".bnb #bnb").text();
          var copyText = "Binance Coin Copy Succsess"
        }
        
        $('.copyAnim #coinAdress').text(coinAdress);
        $('.copyAnim #copyText').text(copyText);


        $(".copyAnim").removeClass("animate__backOutDown");
        $(".copyAnim").addClass("d-flex animate__animated animate__backInUp");
        setTimeout(function () {
            $(".copyAnim").removeClass("animate__backInUp");
            $(".copyAnim").addClass("animate__backOutDown");
            $(".copyBlock").removeClass("active");
        }, 3000);
    },

    clientInfo: function () {
      // Detect Device
      var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
        navigator.userAgent
      )
        ? true
        : false;

      // Browser Width and Height
      var browserWidth = window.innerWidth;
      var browserHeight = window.innerHeight;

      // Get Browser info
      var userAgent = navigator.userAgent;

      console.log("isMobile: " + isMobile);
      console.log("browserWidth: " + browserWidth);
      console.log("browserHeight: " + browserHeight);
      console.log("User-agent header sent: " + userAgent);
    },

    smoothScroll: function () {
      document.querySelectorAll('a[href^="#"]').forEach(($anchor) => {
        $anchor.addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start", //scroll to top of the target element
          });
        });
      });
    },
    
    isNear: function($element, distance, event) {
      var left = $element.offset().left - distance,
          top = $element.offset().top - distance,
          right = left + $element.width() + (2 * distance),
          bottom = top + $element.height() + (2 * distance),
          x = event.pageX,
          y = event.pageY;
      return (x > left && x < right && y > top && y < bottom);
  },
    isBottom: function (distance) {
      $(window).scroll(function () {
        if (
          $(window).scrollTop() + $(window).height() >
          $(document).height() - distance
        ) {
          $("#launcher").addClass("isBottom");
        } else {
          $("#launcher").removeClass("isBottom");
        }
      });
    },
    splashScreen: function () {
      window.addEventListener('load', function () {
        
          $("body").removeClass("noscroll");
          $("#splashscreen").fadeOut();

          setTimeout(function () {
            $(".social").removeClass("active");}, 1500);
      });
      setTimeout(() => {
        setTimeout(function () {
          $(".social").removeClass("active");}, 1500);
        $("body").removeClass("noscroll");
        $("#splashscreen").fadeOut();
        $("#splashscreen").css("display","none");

        setTimeout(function () {
          $(".social").removeClass("active");}, 1500);
      }, 4000);
  },

  },

  slider: {
    Swiper: function () {
      var swiper = new Swiper(".swiper-container", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },
  },

  notice:{
    init:function () { 
        
     },
    formCheckBox: function() {
      $('#kvkk-checkbox').click(function() {
          if ($('#kvkk-checkbox').prop('checked')) {
              $("#btn--disabled").css("display", "none");
              $("#register").prop("disabled", false);
          } else {
              $("#btn--disabled").css("display", "block");
              $("#register").prop("disabled", true);
          }
      });
  },
  formCheckBoxShake: function() {
      $('.form .btn--disabled').click(function() {
          $(".kvkk-checkbox").addClass("anim-shake");
          $(".kvkk-checkbox p").addClass("color-warning");
          $(".kvkk-checkbox a").addClass("color-warning");
          setTimeout(function() {
              $('.kvkk-checkbox').removeClass("anim-shake color-warning");
              $(".kvkk-checkbox p").removeClass("color-warning");
              $(".kvkk-checkbox a").removeClass("color-warning");
          }, 1000);
      });
  }
  },

  buttons: {
    init: function () {
        this.videoImage();
        V.buttons.social();
    },
    social: function () {
      $("#social-button").click(function (e) { 
        e.preventDefault();
        if($(".social").hasClass("active")){
          $(".social").removeClass("active");
        }
        else{
          $(".social").addClass("active");
        }
        
      });
    },
    videoImage: function () {
      $(".video__image").click(function (e) { 
        e.preventDefault();
        $("#yt")[0].src += "?autoplay=1";
        setTimeout(function(){ $("#yt").show(); }, 200);
        
          setTimeout(() => {
            $(".video__player").removeClass("d-none");
            $(".video__image").addClass("d-none");
          }, 500);
            
      });
    },
  },

  popup: {
    init: function () {},

    popup1: function () {
      $(document).ready(function () {
        $("#popup").fancybox().trigger("click");
      });
    },
  },

  form: {

      init:function () { 
          this.form();
          this.formMask();
      },

    form: function (element) {
      //Duplicate Form Send Block
      $("form").submit(function () {
        $(this).find("button[type=submit]").prop("disabled", true);
      });
     $(".phone").click(function () {
          if (!$(".phone").val()) {
              $(".phone").val("(5");
          }
      });
    },
    formMask: function () {
      // Use this Mask github.com/igorescobar/jQuery-Mask-Plugin - jQuery Mask Plugin v1.14.16
      $(".date").mask("00/00/0000");
      $(".time").mask("00:00:00");
      $(".date_time").mask("00/00/0000 00:00:00");
      $(".cep").mask("00000-000");
      $(".phone").mask("(500)-(000)-(0000)");
      $(".phone_with_ddd").mask("(00)-(000)-(000)-(0000)");
      $(".phone_us").mask("(000) 000-0000");
      $(".mixed").mask("AAA 000-S0S");
      $(".cpf").mask("000.000.000-00", { reverse: true });
      $(".cnpj").mask("00.000.000/0000-00", { reverse: true });
      $(".money").mask("000.000.000.000.000,00", { reverse: true });
      $(".money2").mask("#.##0,00", { reverse: true });
      $(".ip_address").mask("0ZZ.0ZZ.0ZZ.0ZZ", {
        translation: {
          Z: {
            pattern: /[0-9]/,
            optional: true,
          },
        },
      });
      $(".ip_address").mask("099.099.099.099");
      $(".percent").mask("##0,00%", { reverse: true });
      $(".clear-if-not-match").mask("00/00/0000", { clearIfNotMatch: true });
      $(".placeholder").mask("00/00/0000", { placeholder: "__/__/____" });
      $(".fallback").mask("00r00r0000", {
        translation: {
          r: {
            pattern: /[\/]/,
            fallback: "/",
          },
          placeholder: "__/__/____",
        },
      });
      $(".selectonfocus").mask("00/00/0000", { selectOnFocus: true });
    },
  },

  global: function () {
    

  },
 

};

$(document).ready(function () {
  V.init();
});

$(window).on("load", function () {});
