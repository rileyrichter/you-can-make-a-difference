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
  $(".yourlocation").closest(".w-embed").find("a").text("New Text");
} else {
  $(".yourlocation").hide();
}
