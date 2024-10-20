// Set the launch date
const launchDate = new Date("Dec 20, 2024 00:00:00").getTime();

// Update the countdown every second
const countdownTimer = setInterval(function() {
    const now = new Date().getTime();
    const timeRemaining = launchDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the countdown is finished
    if (timeRemaining < 0) {
        clearInterval(countdownTimer);
        document.getElementById("days").innerHTML = "0";
        document.getElementById("hours").innerHTML = "0";
        document.getElementById("minutes").innerHTML = "0";
        document.getElementById("seconds").innerHTML = "0";
    }
}, 1000);

// Smooth scroll to the form
function scrollToForm() {
    document.getElementById('registration-section').scrollIntoView({ behavior: 'smooth' });
    document.getElementById('registration-section').style.opacity = 1;
    document.getElementById('registration-section').style.transform = 'translateY(0)';
}

// Hide social bar when scrolling down
window.addEventListener('scroll', function() {
    const socialBar = document.getElementById('social-bar');
    const registrationSection = document.getElementById('registration-section');
    const registrationPosition = registrationSection.getBoundingClientRect().top;
    
    // Fade out social bar as you scroll towards the registration section
    if (registrationPosition < window.innerHeight) {
        socialBar.classList.add('hidden');
    } else {
        socialBar.classList.remove('hidden');
    }
});

// Form submission handling (for demonstration purposes)
const form = document.getElementById('registration-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = document.getElementById('email').value;
    
    if (emailInput) {
        alert("Thank you for registering with email: " + emailInput);
        form.reset();
    } else {
        alert("Please enter a valid email.");
    }
});
