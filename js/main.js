// Get the circle element
const circle = document.querySelector('.circle');

// Make sure circle is positioned
if (getComputedStyle(circle).position === 'static') {
    circle.style.position = 'absolute';
}

// Store the original position after ensuring positioning is set
const originalPosition = {
    top: circle.style.top || getComputedStyle(circle).top,
    left: circle.style.left || getComputedStyle(circle).left
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
    // Return to original position using stored values
    circle.style.top = originalPosition.top;
    circle.style.left = originalPosition.left;
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