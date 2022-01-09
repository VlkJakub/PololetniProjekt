function sidebar_open() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("mySidebar").style.zIndex = "99";
  }
  
  function sidebar_close() {
    document.getElementById("mySidebar").style.width = "0";
  }


  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }