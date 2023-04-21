var myArray = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6']

var count = 0;
setInterval(function() {
  //use this below line if you want random images
  //var rand = myArray[Math.floor(Math.random() * myArray.length)];

  if (count >= myArray.length) count = 0; // if it is last image then show the first image.
  // use this below line if you want images in order.
  var rand = myArray[count];
  document.getElementById('img').src = rand;
  document.getElementById('img').alt = rand; // use 'alt' to display the image name if image is not found
  count++;
}, 1000);