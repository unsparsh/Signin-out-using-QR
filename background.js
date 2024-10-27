// Define auto-logout time in milliseconds (e.g., 30 minutes)
const AUTO_LOGOUT_TIME = 30 * 60 * 1000;
let autoLogoutTimer;

// Start auto-logout timer
function startAutoLogout() {
    // Clear any existing timer
    clearTimeout(autoLogoutTimer);

    // Set a new timer
    autoLogoutTimer = setTimeout(() => {
        logoutAllSessions();
        console.log("Auto-logout triggered after 30 minutes of inactivity.");
    }, AUTO_LOGOUT_TIME);
}

// Function to logout all sessions
function logoutAllSessions() {
    // Logic to log out from all sessions (e.g., call an API endpoint)
    chrome.storage.local.clear(() => {
        console.log("User logged out from all sessions.");
        alert("You have been logged out from all sessions.");
    });
}

// Listen for messages from popup.js to reset the timer on activity
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "resetTimer") {
        startAutoLogout();
    }
});

// Initialize the timer on install or extension start
chrome.runtime.onInstalled.addListener(() => {
    startAutoLogout();
});
chrome.runtime.onStartup.addListener(() => {
    startAutoLogout();
});
