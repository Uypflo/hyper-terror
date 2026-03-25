// src/inputHandler.js
// Keyboard input handling code

document.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'ArrowUp':
            console.log('Up arrow pressed');
            break;
        case 'ArrowDown':
            console.log('Down arrow pressed');
            break;
        case 'ArrowLeft':
            console.log('Left arrow pressed');
            break;
        case 'ArrowRight':
            console.log('Right arrow pressed');
            break;
        default:
            console.log(`Key pressed: ${event.key}`);
    }
});
