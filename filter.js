$("#clear").click(function () {
  location.reload();
});

$(".button").click(function () {
  let myVar = $(this).parent().parent().parent().parent().html();
  localStorage.setItem("mylocation", myVar);
  console.log(myVar);
});

if ("mylocation" in localStorage) {
  let currentLocation = storage.getItem(mylocation);
  $(".yourlocation").append(currentLocation);
} else {
  console.log("no");
}
