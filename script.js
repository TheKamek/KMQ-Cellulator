let brush = "fieldTypeSelect";
document.addEventListener("DOMContentLoaded", function () {
  var container = document.getElementById("white-field");
  var menu = document.getElementById("editFieldMenu");
  console.log("Initialized")
  for (var y = 0; y < 10; y++) {
    for (var x = 0; x < 10; x++) {
      var smallDiv = document.createElement("div");
      smallDiv.classList.add("small-div");
      smallDiv.classList.add(`pos-${x}-${y}`);
      smallDiv.title = `X: ${x}, Y: ${y}`;

      smallDiv.addEventListener("click", function (event) {
        var classes = event.target.className.split(/\s+/);
        var positionClass = classes.find((c) => c.startsWith("pos-"));
        var coords = positionClass.split("-").slice(1);
        menu.textContent = `Clicked coordinates: X: ${coords[0]}, Y: ${coords[1]}`;
        const clickedElement = document.getElementsByClassName(
          `small-div pos-${coords[0]}-${coords[1]}`
        )[0];
        console.log("NEGER")
        console.log(brush);
        clickedElement.classList.add(brush);
      });

      container.appendChild(smallDiv);
    }
  }
});

function setBrushType(type) {
  document.getElementById("fieldTypeButton").innerText = /* 'Chosen: '+ */ type;
  document.getElementById("fieldTypeDD").style.height = "43.2px";
  setTimeout(() => {
    document.getElementById("fieldTypeDD").removeAttribute("style");
  }, 10);
  brush = "fieldType" + type;
  console.log(brush);
}

function test(){
  console.log(brush);

}
