$(document).ready(function () {
  applyClickHandlers();
  insertCurrentYear(".copyright-year");
});

function applyClickHandlers() {
  mobileNavigation();
  linkBehavior();
  animateToTopButton();
  backToTop();
}

//FUNCTION FOR THE HAMBURGER MENU
function mobileNavigation() {
  const $hamburgerMenu = $(".hamburger-menu-container");
  $hamburgerMenu.click(function () {
    $(".hamburger-menu-container").find("div").toggleClass("change");
    $("#mobile-nav").toggleClass("hide-show responsive");
  });
}

function closeNavDropDown() {
  var $navDropDown = $("#mobile-nav");
  if ($navDropDown.hasClass("responsive")) {
    $(".hamburger-menu-container").find("div").toggleClass("change");
    $("#mobile-nav").toggleClass("hide-show responsive");
  }
}

function linkBehavior() {
  //MAIN SECTION LINKS
  $(
    'a[href="#about"], a[href="#skills"], a[href="#applications"], a[href="#contact"]'
  ).click(function (event) {
    event.preventDefault();

    var $headerLink = $(this).attr("href");
    var sectionId;

    switch ($headerLink) {
      case "#about":
        sectionId = "#about";
        break;

      case "#skills":
        sectionId = "#skills";
        break;

      case "#applications":
        sectionId = "#applications";
        break;

      case "#contact":
        sectionId = "#contact";
        break;

      default:
        alert("There is an error, please refresh the page");
    }
    $("html, body").animate(
      {
        scrollTop: $(sectionId).offset().top,
      },
      1500
    );
    closeNavDropDown();
  });
}
//DISPLAY BACK TO TOP BUTTON
function animateToTopButton() {
  const $window = $(window);
  const $toTopButton = $("#back-to-top");
  $toTopButton.hide();
  const endZone = $("footer").offset().top - $window.height() - 2175;
  $window.on("scroll", function () {
    if (endZone < $window.scrollTop()) {
      $toTopButton.show();
    } else {
      $toTopButton.hide();
    }
  });
}

//BACK TO TOP CLICK HANDLER
function backToTop() {
  $("#back-to-top").click(function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("header").offset().top,
      },
      1200
    );
    $("#back-to-top").hide();
  });
}

// Adds Current Year to Page Element -- Used in Copyright
function insertCurrentYear(selector) {
  let date = new Date();
  date = date.getFullYear();
  $(selector).text(date);
}
