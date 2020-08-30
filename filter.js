$(document).ready(function () {
  $("#search").on("keyup", function () {
    let value = $(this).val().toLowerCase();
    $(".location-name").filter(function () {
      $(this)
        .parent()
        .toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
$(document).on("keyup", "#search", function (e) {
  if (e.keyCode == 13) {
    $("input").blur();
    Foundation.libs.topbar.toggle();
  }
});
