var carousel = document.getElementById('carousel');
var images = carousel.getElementsByClassName('carousel-image');
var index = 0;

// Display the first image
images[index].style.display = 'block';

document.getElementById('prev').addEventListener('click', function() {
  // Hide the current image
  images[index].style.display = 'none';

  // Calculate the new index
  index = (index - 1 + images.length) % images.length;

  // Display the new image
  images[index].style.display = 'block';
});

document.getElementById('next').addEventListener('click', function() {
  // Hide the current image
  images[index].style.display = 'none';

  // Calculate the new index
  index = (index + 1) % images.length;

  // Display the new image
  images[index].style.display = 'block';
});
