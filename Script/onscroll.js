window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("ancor").className = "header_on_scroll";
  } else {
    document.getElementById("ancor").className = "header";
  }
}