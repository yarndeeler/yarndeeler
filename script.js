// script.js

// Get references to elements
const illustration = document.getElementById('illustration');
const music = document.getElementById('music');
const feedbackAudio = new Audio('feedback.mp3'); // Path to your feedback audio

// Variable to keep track of the click state
let isPlaying = false; // Track if music is playing
let currentSongIndex = 0; // To track which song is currently playing

// Array of song URLs
const songs = [
    'song1.mp3',
    'song2.mp3',
    'song3.mp3',
    'song4.mp3',
    'song5.mp3',
    'song6.mp3'
];

// Add click event listener
illustration.addEventListener('click', function() {
    // Show clicked illustration briefly
    illustration.src = 'your-clicked-illustration.png'; // Show clicked version

    // Play feedback audio
    feedbackAudio.play(); // Play the feedback sound

    // After a short delay, revert to the original illustration
    setTimeout(() => {
        illustration.src = 'your-illustration.png'; // Revert to original illustration
        
        if (isPlaying) {
            // If music is currently playing
            music.pause(); // Stop the music
            music.currentTime = 0; // Reset the music to the beginning
            
            // Move to the next song if not the last song
            if (currentSongIndex < songs.length - 1) {
                currentSongIndex++; // Move to the next song
                music.src = songs[currentSongIndex]; // Set the next song
                music.loop = true; // Enable looping
                music.play(); // Play the next song
            } else {
                // If the last song has been played, stop the music
                currentSongIndex = 0; // Reset song index for next loop
                isPlaying = false; // Update playing state to false
            }
        } else {
            // If music is not playing
            music.src = songs[currentSongIndex]; // Set the next song
            music.loop = true; // Enable looping
            music.play(); // Play the music
            isPlaying = true; // Update playing state to true
        }
    }, 75); // The delay in milliseconds (75ms)

});

