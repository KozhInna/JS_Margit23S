const goBackButton = document.querySelector("#backToTop");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    goBackButton.style.display = "block";
  } else {
    goBackButton.style.display = "none";
  }
}

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; /* for 2nd broser */
};
goBackButton.addEventListener("click", getToTop);
