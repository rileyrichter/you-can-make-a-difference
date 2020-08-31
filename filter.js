$("#clear").click(function () {
  location.reload();
});

$(".button").click(function () {
  let myVar = $(this).parent().html();
  console.log(myVar);
});
