// JavaScript for Parallax Effect

// Listen for the scroll event on the window
window.addEventListener("scroll", function () {
    // Get the scroll position
    let scrollPosition = window.scrollY;

    // Get all elements with the class of "parallax" for the parallax effect
    let parallaxElements = document.querySelectorAll('.parallax');

    // Loop through each parallax element and apply the effect
    parallaxElements.forEach(function (element) {
        // Adjust the background position to create the parallax effect
        // Adjust the multiplier to control the speed of the parallax effect
        let speed = element.getAttribute('data-speed') || 0.5; // Default speed if not specified
        element.style.backgroundPosition = 'center ' + (scrollPosition * speed) + 'px';
    });
});
