$("#clear").click(function () {
  location.reload();
});

$(".button").click(function () {
  let myVar = $(this).parent().parent().parent().html();
  console.log(myVar);
});
