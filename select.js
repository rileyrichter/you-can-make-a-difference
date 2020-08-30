$(document).ready(function () {
  $(".js-select2").select2({
    closeOnSelect: true,
    placeholder: `Where do you live?`,
    // allowHtml: true,
    allowClear: false,
    tags: true, //
  });
});
