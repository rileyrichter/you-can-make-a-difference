$("#clear").click(function () {
  location.reload();
});

$(".button").click(function () {
  let myVar = $(this).parent().parent().parent().parent().html();
  localStorage.setItem("mylocation", myVar);
  console.log(myVar);
});

if ("mylocation" in localStorage) {
  console.log("yes");
} else {
  console.log("no");
}
