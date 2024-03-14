function SelectIndex(index) {
  console.log("selected index: " + index);
  idx = index;
  localStorage.setItem("selectedIndex", index);
}
let previousShownIndex = 0;
let previousShownIndexCast = 0;

function ShowInfo() {
  var selectedIndex = localStorage.getItem("selectedIndex");
  console.log("ShowInfo index: " + selectedIndex);

  if (selectedIndex == 1) {
    document.getElementById("movie1").style.display = "block";
  } else if (selectedIndex == 2) {
    document.getElementById("movie2").style.display = "block";
  } else if (selectedIndex == 3) {
    document.getElementById("movie3").style.display = "block";
  } else if (selectedIndex == 4) {
    document.getElementById("movie4").style.display = "block";
  } else if (selectedIndex == 5) {
    document.getElementById("movie5").style.display = "block";
  } else if (selectedIndex == 6) {
    document.getElementById("movie6").style.display = "block";
  } else if (selectedIndex == 7) {
    document.getElementById("movie7").style.display = "block";
  } else if (selectedIndex == 8) {
    document.getElementById("movie8").style.display = "block";
  } else if (selectedIndex == 9) {
    document.getElementById("movie9").style.display = "block";
  } else if (selectedIndex == 10) {
    document.getElementById("movie10").style.display = "block";
  }

  if (previousShownIndex != selectedIndex) {
    if (previousShownIndex == 1) {
      document.getElementById("movie1").style.display = "none";
    } else if (previousShownIndex == 2) {
      document.getElementById("movie2").style.display = "none";
    } else if (previousShownIndex == 3) {
      document.getElementById("movie3").style.display = "none";
    } else if (previousShownIndex == 4) {
      document.getElementById("movie4").style.display = "none";
    } else if (previousShownIndex == 5) {
      document.getElementById("movie5").style.display = "none";
    } else if (previousShownIndex == 6) {
      document.getElementById("movie6").style.display = "none";
    } else if (previousShownIndex == 7) {
      document.getElementById("movie7").style.display = "none";
    } else if (previousShownIndex == 8) {
      document.getElementById("movie8").style.display = "none";
    } else if (previousShownIndex == 9) {
      document.getElementById("movie9").style.display = "none";
    } else if (previousShownIndex == 10) {
      document.getElementById("movie10").style.display = "none";
    }

    if (previousShownIndexCast == 1) {
      document.getElementById("movie1cast").style.display = "none";
    } else if (previousShownIndexCast == 2) {
      document.getElementById("movie2cast").style.display = "none";
    } else if (previousShownIndexCast == 3) {
      document.getElementById("movie3cast").style.display = "none";
    } else if (previousShownIndexCast == 4) {
      document.getElementById("movie4cast").style.display = "none";
    } else if (previousShownIndexCast == 5) {
      document.getElementById("movie5cast").style.display = "none";
    } else if (previousShownIndex == 6) {
      document.getElementById("movie6cast").style.display = "none";
    } else if (previousShownIndex == 7) {
      document.getElementById("movie7cast").style.display = "none";
    } else if (previousShownIndex == 8) {
      document.getElementById("movie8cast").style.display = "none";
    } else if (previousShownIndex == 9) {
      document.getElementById("movie9cast").style.display = "none";
    } else if (previousShownIndex == 10) {
      document.getElementById("movie10cast").style.display = "none";
    }
  }

  previousShownIndex = selectedIndex;
}

function ShowCast() {
  var selectedIndex = localStorage.getItem("selectedIndex");
  console.log("ShowCast index: " + selectedIndex);

  if (selectedIndex == 1) {
    document.getElementById("movie1cast").style.display = "block";
  } else if (selectedIndex == 2) {
    document.getElementById("movie2cast").style.display = "block";
  } else if (selectedIndex == 3) {
    document.getElementById("movie3cast").style.display = "block";
  } else if (selectedIndex == 4) {
    document.getElementById("movie4cast").style.display = "block";
  } else if (selectedIndex == 5) {
    document.getElementById("movie5cast").style.display = "block";
  } else if (selectedIndex == 6) {
    document.getElementById("movie6cast").style.display = "block";
  } else if (selectedIndex == 7) {
    document.getElementById("movie7cast").style.display = "block";
  } else if (selectedIndex == 8) {
    document.getElementById("movie8cast").style.display = "block";
  } else if (selectedIndex == 9) {
    document.getElementById("movie9cast").style.display = "block";
  } else if (selectedIndex == 10) {
    document.getElementById("movie10cast").style.display = "block";
  }

  if (previousShownIndexCast != selectedIndex) {
    if (previousShownIndexCast == 1) {
      document.getElementById("movie1cast").style.display = "none";
    } else if (previousShownIndexCast == 2) {
      document.getElementById("movie2cast").style.display = "none";
    } else if (previousShownIndexCast == 3) {
      document.getElementById("movie3cast").style.display = "none";
    } else if (previousShownIndexCast == 4) {
      document.getElementById("movie4cast").style.display = "none";
    } else if (previousShownIndexCast == 5) {
      document.getElementById("movie5cast").style.display = "none";
    } else if (previousShownIndexCast == 6) {
      document.getElementById("movie6cast").style.display = "none";
    } else if (previousShownIndexCast == 7) {
      document.getElementById("movie7cast").style.display = "none";
    } else if (previousShownIndexCast == 8) {
      document.getElementById("movie8cast").style.display = "none";
    } else if (previousShownIndexCast == 9) {
      document.getElementById("movie9cast").style.display = "none";
    } else if (previousShownIndexCast == 10) {
      document.getElementById("movie10cast").style.display = "none";
    }

    if (previousShownIndex == 1) {
      document.getElementById("movie1").style.display = "none";
    } else if (previousShownIndex == 2) {
      document.getElementById("movie2").style.display = "none";
    } else if (previousShownIndex == 3) {
      document.getElementById("movie3").style.display = "none";
    } else if (previousShownIndex == 4) {
      document.getElementById("movie4").style.display = "none";
    } else if (previousShownIndex == 5) {
      document.getElementById("movie5").style.display = "none";
    } else if (previousShownIndex == 6) {
      document.getElementById("movie6").style.display = "none";
    } else if (previousShownIndex == 7) {
      document.getElementById("movie7").style.display = "none";
    } else if (previousShownIndex == 8) {
      document.getElementById("movie8").style.display = "none";
    } else if (previousShownIndex == 9) {
      document.getElementById("movie9").style.display = "none";
    } else if (previousShownIndex == 10) {
      document.getElementById("movie10").style.display = "none";
    }
  }

  previousShownIndexCast = selectedIndex;
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
  } else if (selectedIndex == 6) {
    document.getElementById("movietrailer").src =
      "https://www.youtube.com/watch?v=wxN1T1uxQ2g";
  } else if (selectedIndex == 7) {
    document.getElementById("movietrailer").src =
      "https://www.youtube.com/watch?v=nWiQodhMvz4";
  } else if (selectedIndex == 8) {
    document.getElementById("movietrailer").src =
      "https://www.youtube.com/watch?v=pD0mFhMqDCE&t=2s";
  } else if (selectedIndex == 9) {
    document.getElementById("movietrailer").src =
      "https://www.youtube.com/watch?v=Od2NW1sfRdA";
  } else if (selectedIndex == 10) {
    document.getElementById("movietrailer").src =
      "https://www.youtube.com/watch?v=uRu3zLOJN2c";
  }
}
