document.addEventListener("DOMContentLoaded", function () {
  var container = document.getElementById("white-field");

  for (var y = 0; y < 10; y++) {
    for (var x = 0; x < 10; x++) {
      var smallDiv = document.createElement("div");
      smallDiv.classList.add("small-div");
      smallDiv.classList.add(`pos-${x}-${y}`); // Hinzufügen der Positionsklasse
      container.appendChild(smallDiv);
    }
  }
});
