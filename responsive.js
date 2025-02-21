// responsive.js

function adjustLayout() {
    const screenWidth = window.innerWidth;
    const container = document.querySelector('.container');

    if (screenWidth < 600) {
        container.style.gridTemplateColumns = '1fr'; 
    } else if (screenWidth < 900) {
        container.style.gridTemplateColumns = 'repeat(2, 1fr)'; 
    } else {
        container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))'; 
    }

    const images = document.querySelectorAll('.image-container img');
    images.forEach(img => {
        if (screenWidth < 600) {
            img.style.maxWidth = '150px'; 
        } else {
            img.style.maxWidth = '300px'; 
        }
    });

    const blocks = document.querySelectorAll('.block');
    blocks.forEach(block => {
        if (screenWidth < 600) {
            block.style.padding = '1rem'; 
        } else {
            block.style.padding = '1.5rem'; 
        }
    });
}


window.addEventListener('load', adjustLayout);
window.addEventListener('resize', adjustLayout);