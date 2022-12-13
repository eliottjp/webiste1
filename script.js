var state = false;
function expand() {
  if (state == false) {
    document.getElementById("items").style.transform = "scaleX(1)";
    document.getElementById("toggle1").style.transform = "rotate(45deg)";

    state = true;
  } else {
    document.getElementById("items").style.transform = "scaleX(0)";
    document.getElementById("toggle1").style.transform = "rotate(0deg)";
    state = false;
  }
}

function hover(element) {
  element.setAttribute("src", "http://dummyimage.com/100x100/eb00eb/fff");
}

function unhover(element) {
  element.setAttribute("src", "http://dummyimage.com/100x100/000/fff");
}
