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

let processScroll = () => {
  let docElem = document.documentElement,
    docBody = document.body,
    scrollTop = docElem["scrollTop"] || docBody["scrollTop"],
    scrollBottom =
      (docElem["scrollHeight"] || docBody["scrollHeight"]) - window.innerHeight,
    scrollPercent = (scrollTop / scrollBottom) * 100 + "%";

  // console.log(scrollTop + ' / ' + scrollBottom + ' / ' + scrollPercent);

  document
    .getElementById("progress-bar")
    .style.setProperty("--scrollAmount", scrollPercent);
};

document.addEventListener("scroll", processScroll);
