// Import the QR Code generator library (like QRCode.js) if not already added
// For example: https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js

document.addEventListener('DOMContentLoaded', () => {
    const qrCodeContainer = document.getElementById('qr-code');
    const logoutButton = document.getElementById('logout');

    // Generate QR Code
   function generateQRCode(url) {
        qrCodeContainer.innerHTML = ""; // Clear any existing QR code
        new QRCode(qrCodeContainer, {
            text: url,
            width: 200,
            height: 200,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    }

    // Fetch login token and generate QR code
    async function initQRCode() {
        // Fetch the token from your server
        try {
            const response = await fetch("http://localhost:3000/generate-token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userId: "user@example.com" }) // Replace with the actual user identifier
            });

            if (!response.ok) {
                throw new Error("Failed to generate token");
            }

            const data = await response.json();
            const loginUrl = `http://localhost:3000/auth/login?token=${data.token}`; // Use the generated token
            generateQRCode(loginUrl);
        } catch (error) {
            console.error("Error fetching token:", error);
        }
    }

    


    // Logout function to end session on all devices
    logoutButton.addEventListener('click', () => {
        // Clear session and handle logout (you may call an API to log out from all sessions)
        alert("Logged out from all active sessions!");
    });

    // Initialize QR code on page load
    initQRCode();
});

// In popup.js
chrome.runtime.sendMessage({ action: "resetTimer" });

