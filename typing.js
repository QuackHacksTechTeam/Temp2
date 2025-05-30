const texts = [
    "November 14 - 16th | EMU Ballroom",
    "Eugene, University of Oregon"
];
const typingText = document.getElementById('typing-text');
const cursor = document.querySelector('.typing-cursor');
let textIndex = 0, charIndex = 0, isDeleting = false;

function type() {
    const current = texts[textIndex];
    if (!isDeleting) {
        typingText.textContent = current.substring(0, charIndex + 1);
        typingText.className = textIndex === 0 ? "date" : "date"; // keep original styling
        charIndex++;
        if (charIndex === current.length) {
            isDeleting = true;
            setTimeout(type, 2400); // Pause before deleting
            return;
        }
    } else {
        typingText.textContent = current.substring(0, charIndex - 1);
        typingText.className = textIndex === 0 ? "date" : "date"; // keep original styling
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, 400); // Pause before typing next
            return;
        }
    }
    setTimeout(type, isDeleting ? 40 : 80);
}
// Optional: blinking cursor
setInterval(() => {
    cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
}, 500);

type();
