// Terminal typing animation

document.addEventListener('DOMContentLoaded', function() {
    const typingTextElement = document.getElementById('typing-text');
    const cursorElement = document.querySelector('.cursor');
    
    // Multi-line terminal text
    const lines = [
        'Hello, I am Laksindu janith',
        'specializing in IoT and web development.',
        'const skills = [\'Arduino\', \'ESP32\', \'JavaScript\', \'HTML\', \'CSS\'];',
        'console.log(\'Let\'s build something amazing together!\');'
    ];
    
    let lineIndex = 0;
    let charIndex = 0;
    let typingSpeed = 80; // milliseconds per character
    let pauseBetweenLines = 1200; // pause at the end of each line
    let erasingSpeed = 30; // milliseconds per character when erasing
    
    /**
     * Types the current line character by character
     */
    function typeLine() {
        if (charIndex < lines[lineIndex].length) {
            typingTextElement.textContent += lines[lineIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeLine, typingSpeed);
        } else {
            // Pause at the end of the line
            setTimeout(eraseLine, pauseBetweenLines);
        }
    }
    
    /**
     * Erases the current line character by character
     */
    function eraseLine() {
        if (charIndex > 0) {
            typingTextElement.textContent = lines[lineIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseLine, erasingSpeed);
        } else {
            // Move to the next line
            lineIndex = (lineIndex + 1) % lines.length;
            setTimeout(typeLine, typingSpeed);
        }
    }
    
    // Start the typing animation
    setTimeout(typeLine, 1000);
    
    // Cursor blinking is handled in CSS
});

// Add a function to simulate typing for a single text string
function typeText(elementId, text, speed = 100) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}