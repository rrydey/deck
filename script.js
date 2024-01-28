function toggleContent(switchId, contentId) {
  var switchDiv = document.getElementById(switchId);
  var contentDiv = document.getElementById(contentId);

  switchDiv.addEventListener("click", function () {
    contentDiv.classList.toggle("not-active");
    switchDiv.classList.toggle("switch-off");

    // Use transitionend event to set display to none after the opacity transition is complete
    contentDiv.addEventListener(
      "transitionend",
      function () {
        if (!contentDiv.classList.contains("not-active")) {
          // Content is visible, set display to block
          contentDiv.style.display = "block";
        } else {
          // Content is hidden, set display to none
          contentDiv.style.display = "none";
        }
      },
      { once: true }
    );
  });
}

// Call the function for each switch-content pair
toggleContent("adhadhu-btn", "adhadhu");
toggleContent("dhauru-btn", "dhauru");
toggleContent("mihaaru-btn", "mihaaru");
toggleContent("sun-btn", "sun");
toggleContent("raajje-btn", "raajje");
