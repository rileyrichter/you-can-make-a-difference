$("#clear").click(function () {
  document.getElementById("search").value = "";
});
var options = {
  valueNames: ["name"],
};

var userList = new List("statelist", options);
