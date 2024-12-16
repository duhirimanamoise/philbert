function checkPassword() {
    // Set the correct password
    const correctPassword = "mypassword";
  
    // Get user input and error message elements
    const userInput = document.getElementById("password-input").value;
    const errorMessage = document.getElementById("error-message");
  
    // Check the password
    if (userInput === correctPassword) {
      // Redirect to the homepage if the password is correct
      window.location.href = "homepage.html";
      return false; // Prevent form submission
    } else {
      // Show an error message if the password is incorrect
      errorMessage.textContent = "Incorrect password. Please try again.";
      return false; // Prevent form submission
    }
  }
  // Wait for the window to load
window.onload = function () {
    // Hide the loading screen
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.display = "none";
  
    // Show the main content
    const mainContent = document.getElementById("main-content");
    mainContent.classList.remove("hidden");
  };
  