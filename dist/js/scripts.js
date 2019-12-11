(function() {
  // Start Loader

  $(window).on("load", function() {
    $("body").css("overflow-y", "auto");
    $(".loader").fadeOut();
    $(".loading")
      .fadeOut()
      .css({
        "transituin-delay": "1s"
      });
  });

  // Start Navbar

  $(".overlay").fadeOut();

  $(".mob-collaps").on("click", function() {
    $(this)
      .parent()
      .find(".nav-links > ul")
      .toggleClass("nav-open");

    $(".overlay").fadeToggle();

    $(this)
      .find("span:first-child")
      .toggleClass("rotate");
    $(this)
      .find("span:nth-child(2)")
      .toggleClass("none");
    $(this)
      .find("span:nth-child(3)")
      .toggleClass("rotate2");
  });

  $(".overlay").on("click", function() {
    $(".nav-links ul").removeClass("nav-open");
    $(this).fadeOut();

    $(".mob-collaps span:first-child").removeClass("rotate");
    $(".mob-collaps span:nth-child(2)").removeClass("none");
    $(".mob-collaps span:nth-child(3)").removeClass("rotate2");
  });

  // Start Prevent Default

  $(".default").on("click", function(e) {
    e.preventDefault();
  });

  // Start Main Slider
  var swiper = new Swiper(".main-slider", {
    loop: true,
    autoplay: {
      delay: 5000
    },
    pagination: {
      el: ".main-pagination",
      clickable: true
    }
  });

  if ($(".main-slider").length > 0) {
    let slides = document.querySelectorAll(".swiper-pagination-bullet"),
      wrapper = document.querySelector(".n-pagi"),
      fraction = document.createElement("div");

    fraction.classList.add("fraction");
    fraction.innerHTML = "<span>1<span>" + "/" + slides.length;
    wrapper.append(fraction);

    slides.forEach(function(element, x) {
      let observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          if (mutation.type == "attributes")
            for (let i = 0; i <= x; i++) {
              if (
                element.classList.contains("swiper-pagination-bullet-active")
              ) {
                fraction.innerHTML = `<span>${i + 1}<span>/${slides.length}`;
              }
            }
        });
      });

      observer.observe(element, {
        attributes: true
      });
    });
  }

  // Start Tootip
  $('[data-toggle="tooltip"]').tooltip();

  // Add smooth scrolling on all links inside the navbar
  // Activating The Click On The Navbar Links
  $("a.index").on("click", function(e) {
    // e.preventDefault();

    $(this)
      .parent()
      .addClass("active")
      .siblings()
      .removeClass("active");

    // Animating The Body On Scrolling
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("scroll")).offset().top - 80
      },
      1000
    );
  });

  $(".n-port #Container").mixItUp({
    load: {
      filter: ".web"
    }
  });

  $(".portfolio #Container").mixItUp();

  // Start Testimonial Slider
  var testimonial = new Swiper(".swiper-testimonial", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 5000
    },
    pagination: {
      el: ".testimonial-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

  // Start Main Input Focus
  $(".main-input").on("focus", function() {
    $(this).addClass("has-words");
  });
  $(".main-input").on("blur", function() {
    if ($(this).val() === "") {
      $(this).removeClass("has-words");
    }
  });

  // Start Rate
  var $star_rating = $(".star-rating span");

  var SetRatingStar = function() {
    return $star_rating.each(function() {
      if (
        parseInt($star_rating.siblings("input.rating-value").val()) >=
        parseInt($(this).data("rating"))
      ) {
        return $(this)
          .removeClass("far")
          .addClass("fas");
      } else {
        return $(this)
          .removeClass("fas")
          .addClass("far");
      }
    });
  };

  $star_rating.on("click", function() {
    $star_rating.siblings("input.rating-value").val($(this).data("rating"));
    return SetRatingStar();
  });

  // Window Scroll Function For The Navbar
  var lastScrollPosition = 0;

  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 500) {
      // Start Easy Pie Chart
      $(".perce-box").easyPieChart({
        size: 180,
        scaleLength: 0,
        lineWidth: 15,
        trackColor: "#303030",
        animate: 2000
      });
    }

    var scrollTop = $(this).scrollTop(),
      $navbarSmash = $("header");

    // Changing The Navbar Height On Scrolling
    // function smashNavbar() {
    //   if (scrollTop >= 150 && scrollTop > lastScrollPosition) {
    //     $navbarSmash.addClass("smash");
    //   } else {
    //     $navbarSmash.removeClass("smash");
    //   }
    // }
    // smashNavbar();
    // lastScrollPosition = scrollTop;

    // Sync Class Active To The Nav Links When Scrolling
    $(".n-sec").each(function() {
      if ($(window).scrollTop() > $(this).offset().top - 202) {
        var blockId = $(this).attr("id");
        console.log(blockId);

        $(".nav-links ul li a[data-scroll='" + blockId + "']")
          .parent()
          .addClass("active")
          .siblings()
          .removeClass("active");
      }
    });
  });
})(jQuery);
