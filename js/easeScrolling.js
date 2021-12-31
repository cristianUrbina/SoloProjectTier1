const headerSize = 78;
const littleOffset = 12;

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;

      // Make sure this.hash matches with an actual node hash
      if ($(hash).offset()) {
        $("html, body").stop(); // If it is currently scrolling, stop it;
        // Using jQuery's animate() method to add smooth page scroll
        $("html, body").animate(
          { scrollTop: $(hash).offset().top - (headerSize + littleOffset) },
          1500,
          function () {
            // Add hash (#) to URL when done scrolling (default click behavior)
            // Since we are using an 90px offset (for not hidding content behind header) we need to
            // hide the target when adding hash to the url or it will execute the default event behavior
            let target = document.getElementById(hash.substring(1));
            var original_id = target.id;
            target.id = null; // fooling it by hidding the target
            window.location.hash = hash;
            target.id = original_id;
          }
        );
      }
    } // End if
  });
});
