function replaceElement() {
    var mainOneElement = document.getElementById("mainone");
    var mainTwoElement = document.getElementById("maintwo");
    mainOneElement.style.display = "none";
    mainTwoElement.style.display = "flex";
  };

  function changeDisplay() {
      var mainOneElement = document.getElementById("mainone");
      var mainTwoElement = document.getElementById("maintwo");
      mainOneElement.style.display = "block";
      mainTwoElement.style.display = "none";
    }

    function toggleContent() {
    var intake = document.getElementById("intake");
    var showMore = document.querySelector(".show-more");

    if (intake.style.maxHeight) {
      intake.style.maxHeight = null;
      showMore.textContent = "See more";
    } else {
      intake.style.maxHeight = "none";
      showMore.textContent = "See less";
    }
  }
