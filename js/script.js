function myFunction() {
    document.getElementById("italic__click").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.italic__drop_btn')) {

    var dropdowns = document.getElementsByClassName("italic__drop_content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("popup__show");
}