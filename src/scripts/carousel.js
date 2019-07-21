let slideIndex = 0;
export const carousel = () => {
  console.log("SlidexINdxe", slideIndex);
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); //change image every 2 seconds;
};
