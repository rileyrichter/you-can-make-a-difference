$(".button").click(function () {
  let myLocation = $(this).parent().parent().parent().parent().html();
  localStorage.setItem("mylocation", myLocation);
});

$("#remove").click(function () {
  localStorage.removeItem("mylocation");
  $(".yourlocation").hide();
  $(".current-location-wrapper").hide();
});

$(document).ready(function () {
  if ("mylocation" in localStorage) {
    let currentLocation = localStorage.getItem("mylocation");
    $(".yourlocation").append(currentLocation);
    $(".yourlocation").children().css("border-bottom", "none");
    $(".yourlocation").children().css("background-color", "transparent");
    $(".yourlocation").find("a").text("Contact Your Reps!");
    $(".yourlocation").find(".location-status").css("color", "#ffffff");
    $(".yourlocation").find(".location-name").css("color", "#ffffff");
    $(".yourlocation")
      .find(".button.leading-icon.location:hover")
      .css("background-color", "#333333");
    $(".current-location-wrapper").show();
  } else {
    $(".yourlocation").hide();
    $(".current-location-wrapper").hide();
  }
});
