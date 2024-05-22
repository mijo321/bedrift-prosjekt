var carousel = document.getElementById('carousel');
var images = carousel.getElementsByClassName('carousel-image');
var index = 0;
var threshold = 50; // Set the threshold value

function scrollCarousel(direction) {
  // Calculate the new index
  index = (index + direction + images.length) % images.length;

  // Scroll to the new image
  carousel.scrollLeft = images[index].offsetLeft;
}

carousel.addEventListener('wheel', function(event) {
  // Calculate the direction based on the wheel delta
  var direction = event.deltaY < 0 ? -1 : 1;

  // Check if the absolute value of deltaY is above the threshold
  if (Math.abs(event.deltaY) > threshold) {
    // Scroll the carousel
    scrollCarousel(direction);
  }
});

document.getElementById('prev').addEventListener('click', function() {
  // Scroll to the previous image
  scrollCarousel(-1);
});

document.getElementById('next').addEventListener('click', function() {
  // Scroll to the next image
  scrollCarousel(1);
});
