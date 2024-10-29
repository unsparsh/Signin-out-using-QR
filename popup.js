// Import the QR Code generator library (like QRCode.js) if not already added
// For example: https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js

document.addEventListener('DOMContentLoaded', () => {
    const qrCodeContainer = document.getElementById('qrcode');
    const logoutButton = document.getElementById('logout');

  
// Generate QR Code
function generateQRCode(url) {
    try {
        // Clear existing content
        const qrCodeContainer = document.getElementById('qrcode');
        if (!qrCodeContainer) {
            throw new Error('QR code container not found');
        }
        qrCodeContainer.innerHTML = '';

        // Debug log
        console.log('Generating QR code for URL:', url);

        // Create QR Code instance
        const qrcode = new QRCode(qrCodeContainer, {
            text: url || 'https://example.com', // Fallback URL for testing
            width: 180,
            height: 180,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });

        // Add loading indicator
        qrCodeContainer.innerHTML += '<div>Loading QR Code...</div>';

        // Verify QR code generation
        setTimeout(() => {
            const qrImage = qrCodeContainer.querySelector('img');
            const qrCanvas = qrCodeContainer.querySelector('canvas');
            
            if (!qrImage && !qrCanvas) {
                throw new Error('QR code elements not created');
            }

            // Remove loading indicator if exists
            const loadingDiv = qrCodeContainer.querySelector('div');
            if (loadingDiv) loadingDiv.remove();

            console.log('QR Code generated successfully');
        }, 500);

    } catch (error) {
        console.error('QR Code generation error:', error);
        const qrCodeContainer = document.getElementById('qrcode');
        if (qrCodeContainer) {
            qrCodeContainer.innerHTML = `
                <div style="color: red; text-align: center;">
                    Error generating QR code: ${error.message}
                </div>`;
        }
    }
}

    // Fetch login token and generate QR code
    function initQRCode() {
        // Verify QRCode library is loaded
        if (typeof QRCode === 'undefined') {
            console.error('QRCode library not loaded!');
            document.getElementById('qrcode').innerHTML = 'QR Code library failed to load';
            return;
        }

        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            if (tabs[0] && tabs[0].url) {
                console.log('Current tab URL:', tabs[0].url);
                generateQRCode(tabs[0].url);
            } else {
                console.error('No URL found');
                document.getElementById('qrcode').innerHTML = 'No URL found to generate QR code';
            }
        });
    }

    


    // Logout function to end session on all devices
    logoutButton.addEventListener('click', () => {
        // Clear session and handle logout (you may call an API to log out from all sessions)
        alert("Logged out from all active sessions!");
    });

    // Initialize QR code on page load
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM loaded, initializing QR code...');
        initQRCode();
    });

    // Add error event listener to catch script loading errors
    window.addEventListener('error', function(e) {
        console.error('Script error:', e);
        if (e.target.src && e.target.src.includes('qrcode.min.js')) {
            document.getElementById('qrcode').innerHTML = 'Failed to load QR Code library';
        }
    }, true);
});

// In popup.js
chrome.runtime.sendMessage({ action: "resetTimer" });

