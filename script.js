function myFunction() {
  // Get the checkbox
  var cheesecb = document.getElementById("cheese");
  var peascb = document.getElementById("peas");

  // Get the output text
  var text = document.getElementById("first");

  // If the checkbox is checked, display the output text
  if (cheesecb.checked == true) {
    first.style.transition = "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
    first.style.background = "#F9AB55";
    first.style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px";
    first.style.color = "black";
  } else {
    first.style.background = "#7b1e7a";
    first.style.boxShadow = "";
  }

  if (peascb.checked == true) {
    second.style.transition = "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
    second.style.background = "#7DC95E";
    second.style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px";
    second.style.color = "#000";
  } else {
    second.style.background = "#7b1e7a";
    second.style.boxShadow = "";
  }
}
