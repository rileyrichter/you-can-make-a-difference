$("#clear").click(function () {
  location.reload();
});

$(".button").click(function () {
  let myLocation = $(this).parent().parent().parent().parent().html();
  localStorage.setItem("mylocation", myLocation);
});

$(document).ready(function () {
  if ("mylocation" in localStorage) {
    let currentLocation = localStorage.getItem("mylocation");
    $(".yourlocation").append(currentLocation);
    $(".yourlocation").children().css("border-bottom", "none");
  } else {
    $(".yourlocation").hide();
  }
});

setTimeout(function () {
  $(".yourlocation").find("a").text("New Text");
  console.log("time");
}, 1000);
