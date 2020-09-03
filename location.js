// Add a location as a favorite in localStorage
// When you click a button with the class of .live-button
$(".live-button").click(function () {
  // Let myLocation = the html of the .location-grid element
  let myLocation = $(this).closest(".location-list-item").html();
  // Set that html as the value in local storage with the key of mylocation
  localStorage.setItem("mylocation", myLocation);
});

// Add the ability to remove a location
// When you click the button with an ID of remove
$("#remove").click(function () {
  // remove the mylocation item from local storage
  localStorage.removeItem("mylocation");
  // remove the div with a class of .current-location-wrapper
  $(".current-location-wrapper").remove();
});

// Add the ability to remove a location
// When you click the button with an ID of skip
$("#skip").click(function () {
  // focus on the element with an ID of main
  document.getElementById("main").focus();
});

// If else statement, this checks whether there is a mylocation in localStorage
$(document).ready(function () {
  // If there is a mylocation in localStorage
  if ("mylocation" in localStorage) {
    // set a variable called currentLocation and make the value the mylocation localStorage item
    let currentLocation = localStorage.getItem("mylocation");
    // append that html in local storage to the .yourlocation div
    $(".yourlocation").append(currentLocation);
    // style .yourlocation by removing the border and changing the background color
    $(".yourlocation").children().css("border-bottom", "none");
    $(".yourlocation").children().css("background-color", "transparent");
    // change the text of the button so it's different that when it's in the list
    $(".yourlocation").find("a").text("Contact your reps!");
    // make sure to show the .current-location-wrapper
    $(".current-location-wrapper").show();
  } else {
    // if there's nothing in localStorage, remove.current-location-wrapper
    $(".current-location-wrapper").remove();
  }
});
