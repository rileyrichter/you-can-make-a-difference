$("#clear").click(function () {
  location.reload();
});

$(".button").click(function () {
  let myVar = $(this).parent().parent().parent().parent().html();
  localStorage.setItem("mylocation", myVar);
});

if ("mylocation" in localStorage) {
  let currentLocation = localStorage.getItem("mylocation");
  $(".yourlocation").append(currentLocation);
} else {
  $(".yourlocation").hide();
}
