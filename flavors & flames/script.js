// Select the header element
const header = document.getElementById('header');

// Array of background images
const backgroundImages = [
    'images/resturant.webp',
    'images/plate.webp',
    'images/resturant2.jpg'
];

let currentImageIndex = 0;

function changeBackgroundImage() {
    // Increment the index to get the next image
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    // Change the background image
    header.style.backgroundImage = `url(${backgroundImages[currentImageIndex]})`;
}

// Change image every 10 seconds (10000 milliseconds)
setInterval(changeBackgroundImage, 5000);
