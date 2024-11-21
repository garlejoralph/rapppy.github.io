  //index typing style
    
  document.addEventListener("DOMContentLoaded", function() {
    const typedTextElement = document.getElementById("typed-text");
    const words = ["saya", "sarap", "ka"];
    let currentWordIndex = 0;

    // Function to simulate typing effect
    function typeEffect(text, callback) {
        let i = 0;
        typedTextElement.textContent = ""; // Clear existing text
        const interval = setInterval(function() {
            typedTextElement.textContent += text.charAt(i);
            i++;
            if (i === text.length) {
                clearInterval(interval);
                callback(); // Once typing is done, call the callback
            }
        }, 100); // Adjust typing speed here (100ms per character)
    }

    // Function to cycle through words
    function changeWord() {
        const nextWord = words[currentWordIndex];
        typeEffect(nextWord, function() {
            setTimeout(function() {
                // After typing the word, wait for 1.5s and change word
                typedTextElement.textContent = ''; // Clear text
                currentWordIndex = (currentWordIndex + 1) % words.length; // Cycle through words
                changeWord(); // Recursively change words
            }, 1500); // Wait for 1.5 seconds before clearing and changing the word
        });
    }

    changeWord(); // Start the typing animation
});

  