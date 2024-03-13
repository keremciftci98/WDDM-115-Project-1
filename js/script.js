
document.getElementById("paragraph-1").style.visibility = "hidden";

function ShowInfo() {
  if (document.getElementById("paragraph-1").style.visibility === "visible") {
    document.getElementById("paragraph-1").style.visibility = "hidden";
  } else {
    document.getElementById("paragraph-1").style.visibility = "visible";
  }
}
