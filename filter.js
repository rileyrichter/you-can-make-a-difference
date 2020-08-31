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
  let someButton = $(".yourlocation").closest(".locationwrapper").find("a");
  someButton.text("New text");
  console.log(someButton.text);
} else {
  $(".yourlocation").hide();
}
