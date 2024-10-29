// Function to update the current time
function updateTime() {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('time').innerText = now.toLocaleTimeString([], options);
}

// Function to change the slider image every two days
let currentImageIndex = 0;
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Add your images here

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('slider-image').src = images[currentImageIndex];
}

// Update time every second
setInterval(updateTime, 1000);

// Change image every 2 days (172800000 milliseconds)
setInterval(changeImage, 172800000);

window.onload = () => {
    updateTime();
    changeImage();
};