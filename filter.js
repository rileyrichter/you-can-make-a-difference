$("#clear").click(function () {
  location.reload();
});

$(".button").click(function () {
  let myLocation = $(this).parent().parent().parent().parent().html();
  localStorage.setItem("mylocation", myLocation);
});

if ("mylocation" in localStorage) {
  let currentLocation = localStorage.getItem("mylocation");
  $(".yourlocation").append(currentLocation);
  $("div.yourlocation")
    .closest("div.location-grid")
    .css("border-bottom", "none");
  $("div.yourlocation").closest("a.button").text("New Text");
} else {
  $(".yourlocation").hide();
}
