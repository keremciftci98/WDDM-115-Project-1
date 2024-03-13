function SelectIndex(index) {
  console.log("selected index: " + index);
  idx = index;
  localStorage.setItem("selectedIndex", index);
}
let previousShownIndex = 0;

function ShowInfo() {
  var selectedIndex = localStorage.getItem("selectedIndex");
  console.log("ShowInfo index: " + selectedIndex);

  if (selectedIndex == 1) {
    document.getElementById("oppenheimer.des").style.display = "block";
  } else if (selectedIndex == 2) {
    document.getElementById("poorthings.des").style.display = "block";
  } else if (selectedIndex == 3) {
    document.getElementById("barbie.des").style.display = "block";
  } else if (selectedIndex == 4) {
    document.getElementById("theholdovers.des").style.display = "block";
  } else if (selectedIndex == 5) {
    document.getElementById("killersoftheflowermoon.des").style.display =
      "block";
  }

  if (previousShownIndex == 1) {
    document.getElementById("oppenheimer.des").style.display = "none";
  } else if (previousShownIndex == 2) {
    document.getElementById("poorthings.des").style.display = "none";
  } else if (previousShownIndex == 3) {
    document.getElementById("barbie.des").style.display = "none";
  } else if (previousShownIndex == 4) {
    document.getElementById("theholdovers.des").style.display = "none";
  } else if (previousShownIndex == 5) {
    document.getElementById("killersoftheflowermoon.des").style.display =
      "none";
  }

  previousShownIndex = selectedIndex;
}


function GoToTrailerPage() {
  document.location.href = "/html/trailerpage.html";
}

function BackButton() {
  document.location.href = "/html/index2.html";
}

function ChangeTrailer() {
  var selectedIndex = localStorage.getItem("selectedIndex");

  console.log("ChangeTrailer: ");
  console.log("ChangeTrailer: " + selectedIndex);

  if (selectedIndex == 0) {
    document.getElementById("movietrailer").src =
      "https://www.youtube.com/watch?v=bK6ldnjE3Y0";
    console.log("ChangeTrailer: ");
  } else if (selectedIndex == 1) {
    document.getElementById("movietrailer").src =
      "https://www.youtube.com/watch?v=bK6ldnjE3Y0";
    console.log("ChangeTrailer: 11");
  } else if (selectedIndex == 2) {
    document.getElementById("movietrailer").src =
      "https://www.youtube.com/watch?v=RlbR5N6veqw";
    console.log("ChangeTrailer: 22");
  } else if (selectedIndex == 3) {
    document.getElementById("movietrailer").src =
      "https://www.youtube.com/watch?v=pBk4NYhWNMM";
    console.log("ChangeTrailer: 33");
  } else if (selectedIndex == 4) {
    document.getElementById("movietrailer").src =
      "https://www.youtube.com/watch?v=AhKLpJmHhIg";
    console.log("ChangeTrailer: 44");
  } else if (selectedIndex == 5) {
    document.getElementById("movietrailer").src =
      "https://www.youtube.com/watch?v=EG0si5bSd6I";
    console.log("ChangeTrailer: 55");
  }
}
