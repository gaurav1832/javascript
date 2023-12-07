var rect = document.querySelector("#center");
rect.addEventListener("mousemove", function (details) {
  var rectLoc = rect.getBoundingClientRect();
  var insidrLoc = details.clientX - rectLoc.left;

  console.log(details.clientX - rectLoc.left);
});
