document.addEventListener('DOMContentLoaded', function () {
    // Function to dynamically load images
    function loadImages() {
        const imageContainer = document.getElementById('image-container');
        const imageUrls = [
            'https://example.com/image1.jpg',
            'https://example.com/image2.jpg',
            // Add more image URLs as needed
        ];

        imageUrls.forEach(url => {
            const img = document.createElement('img');
            img.src = url;
            img.alt = 'Energy Conservation Image';
            imageContainer.appendChild(img);
        });
    }

    // Call the function to load images
    loadImages();
});
