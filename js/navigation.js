// Lighting navigation header links when scrolling

const divs = document.querySelectorAll('*[id^="section"]');
let currentSection = -1; // 0 based
const changeColorMargin = littleOffset + 10;

divs.forEach((el) => {
  if (window.pageYOffset + changeColorMargin >= el.offsetTop - headerSize) {
    currentSection++;
  }
});

changeLinkColor(currentSection, "rgb(73, 80, 95)");

function changeLinkColor(section, color) {
  const currentLink = document.querySelectorAll(`[href="#section${section + 1}"]`);
  currentLink[0].style.backgroundColor = color;
}

window.addEventListener("scroll", function () {
  if (window.pageYOffset + changeColorMargin < divs[currentSection].offsetTop - headerSize) {
    changeLinkColor(currentSection, "transparent");
    currentSection--;
    changeLinkColor(currentSection, "rgb(73, 80, 95)");
  } else if (
    currentSection + 1 < divs.length &&
    window.pageYOffset + changeColorMargin >= divs[currentSection + 1].offsetTop - headerSize
  ) {
    changeLinkColor(currentSection, "transparent");
    currentSection++;
    changeLinkColor(currentSection, "rgb(73, 80, 95)");
  }
});
