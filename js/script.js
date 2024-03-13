
document.getElementById("paragraph-1").style.visibility = "hidden";

function ShowInfo(index) {
    console.log("selected index: " + index);
  if (document.getElementById("paragraph-1").style.visibility === "visible") {
    document.getElementById("paragraph-1").style.visibility = "hidden";
  } else {
    document.getElementById("paragraph-1").style.visibility = "visible";
  }
}


function GoToTrailerPage() {
    document.location.href = "/html/trailerpage.html";
  }

  function BackButton() {
    document.location.href = "/html/index2.html";
  }