$("#clear").click(function () {
  location.reload();
});

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
    $(".yourlocation").find("a").text("Contact Your Reps!");
  } else {
    $(".yourlocation").hide();
    $(".current-location-wrapper").hide();
  }
});
