let frameID;
const getDiv = document.getElementsByClassName("frame");
const smoothAnimation = () => {
  getDiv[0].insertAdjacentHTML("afterend", "<div class='frame'></div>");
  frameID = requestAnimationFrame(smoothAnimation);
};

const onStart = () => {
  frameID = requestAnimationFrame(smoothAnimation);
};

const onStop = () => {
  cancelAnimationFrame(frameID);
};