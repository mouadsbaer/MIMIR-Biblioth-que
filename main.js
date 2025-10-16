// Get the circle element
const circle = document.querySelector('.circle');

// Store the original position
const originalPosition = {
    top: circle.offsetTop,
    left: circle.offsetLeft
};

let isHovering = false;

// Add mouseenter event to detect when cursor is over the circle
circle.addEventListener('mouseenter', () => {
    isHovering = true;
    // Pause the animation when hovering
    circle.style.animationPlayState = 'paused';
});

// Add mouseleave event to return circle to original position
circle.addEventListener('mouseleave', () => {
    isHovering = false;
    // Return to original position
    circle.style.top = '10%';
    circle.style.left = '398px';
    // Resume the animation
    circle.style.animationPlayState = 'running';
});

// Track mouse movement
document.addEventListener('mousemove', (e) => {
    if (isHovering) {
        // Get the circle's dimensions
        const circleWidth = circle.offsetWidth;
        const circleHeight = circle.offsetHeight;
        
        // Center the circle on the cursor
        circle.style.left = (e.pageX - circleWidth / 2) + 'px';
        circle.style.top = (e.pageY - circleHeight / 2) + 'px';
    }
});