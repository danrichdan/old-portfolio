$(".carousel").carousel({
  pause: "hover",
});

function closeNavDropDown() {
  var $navDropDown = $("header nav div.container-fluid div.navbar-collapse");

  if ($navDropDown.hasClass("in")) {
    $navDropDown.removeClass("in");
  }
}

function scrollToApplicationSection() {
  $("html, body").animate(
    {
      scrollTop: $("#projects").offset().top,
    },
    1750
  );
}

function pauseSlideAndOpenModal(modalToOpen) {
  $(".carousel").carousel("pause");

  scrollToApplicationSection();

  setTimeout(function () {
    $(modalToOpen).modal("show");
  }, 3000);

  closeNavDropDown();
}

function scrollToSlides(linkText) {
  var modalToOpenId;

  switch (linkText) {
    case "Pooch Memory Match":
      $(".carousel").carousel(0);
      modalToOpenId = "#pooch-memory-match";
      break;

    case "Taj McGraw Studios":
      $(".carousel").carousel(1);
      modalToOpenId = "#taj";
      break;

    case "Student Grade Table":
      $(".carousel").carousel(2);
      modalToOpenId = "#sgt";
      break;

    case "Meetup Map":
      $(".carousel").carousel(3);
      modalToOpenId = "#meetup-map";
      break;

    case "M-Boutique":
      $(".carousel").carousel(4);
      modalToOpenId = "#mboutique";
      break;

    // case "Double Date OC":
    //   $(".carousel").carousel(5);
    //   modalToOpenId = "#double-date-oc";
    //   break;

    // case "The Genie's Guessing Game":
    //   $(".carousel").carousel(6);
    //   modalToOpenId = "#genie";
    //   break;

    default:
      alert(
        "There seems to be a missing slide.  Please click on a different application link."
      );
  }
  pauseSlideAndOpenModal(modalToOpenId);
}

function linkBehavior() {
  //MAIN SECTION LINKS
  $(
    'ul.nav li a[href="#about"],ul.nav li a[href="#skills"],ul.applications li a[href="#projects"],ul.nav li a[href="#contact"]'
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

      case "#projects":
        sectionId = "#projects";
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

  //INDIVIDUAL APPLICATION LINKS
  $(
    'ul.applications li a[href$=".com"],ul.applications li a[href$=".info"],ul.applications li a[href*="github"]'
  ).click(function (event) {
    var aText = $(this).text();

    event.preventDefault();

    scrollToSlides(aText);
  });

  //BACK TO TOP CLICK HANDLER
  $("#back-to-top").click(function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $("#main-header").offset().top,
      },
      1200
    );
  });
}

//BACK TO TOP BUTTON FUNCTION
function animateToTopButton() {
  var $window = $(window);

  var $toTopButton = $("#back-to-top");
  $toTopButton.hide();

  var endZone = $("#footer").offset().top - $window.height() - 3000;

  $window.on("scroll", function () {
    if (endZone < $window.scrollTop()) {
      $toTopButton.show();
    } else {
      $toTopButton.hide();
    }
  });
}

$(document).ready(function () {
  linkBehavior();
  animateToTopButton();

  $(".carousel-inner").on("click", "img", function () {
    $(".carousel").carousel("pause");
  });
});
