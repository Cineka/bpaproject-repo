//Nav menu 
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


//progress bar script
window.onscroll = function() {myFunction()};

function myFunction() {
var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
var scrolled = (winScroll / height) * 100;
document.getElementById("myBar").style.width = scrolled + "%";
}



$( window ).resize(function() {
  // Adding table when window resized to below 500px
  if($(this).width() <= 500){
    $( "body" ).append( "<div class='scrollDown'>\/ Scroll Down \/</div>");

  }else if($(this).width() > 500){
    // Removing table from DOM when window resized to above 500px
    $( "#dynamicTable" ).remove();
  }

});
