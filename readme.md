# One-Click QR Login Chrome Extension

This Chrome extension provides a secure and convenient way to log in and out of websites with a single QR code scan. Ideal for users who frequently access public computers, the extension removes the need to type in passwords daily, offering seamless access through a smartphone containing their account information.

## Features

- **One-Click Login/Logout**: Quickly log in or log out of accounts by scanning a QR code.
- **Passwordless Access**: Authenticate with just a QR scan—no need to enter a password.
- **Public PC Friendly**: Perfect for scenarios where users need quick access to a shared or public computer.
- **Enhanced Security**: QR code scanning ensures only authorized devices can access accounts.

## How It Works

1. **Install the Extension**: Add the One-Click QR Login extension to your Chrome browser.
2. **Generate QR Code**: When logging in on a public PC, open the extension to generate a unique QR code.
3. **Scan with Your Phone**: Use your smartphone, which is already logged into your account, to scan the QR code.
4. **Authenticate and Access**: The extension authenticates the user and logs in without needing a password. Simply click to log out when finished.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/username/repository-name.git
2. Navigate to chrome://extensions/ in your browser.
3. Enable Developer mode (toggle at the top-right).
4. Select Load unpacked and choose the folder of this cloned repository.

## 📄 Usage
- **Login**: Click on the extension icon, scan the QR code displayed with your phone, and gain instant access to your account.
- **Logout**: Click on the extension icon again to securely log out when you're done.

## 🧰 Technologies Used
- **JavaScript**: Core logic for the extension.
- **Chrome Extension API**: Interface for managing interactions with Chrome.
- **QR Code Generator Library**: Generates QR codes in real-time for login/logout functions.

## 🌐 Future Enhancements
- **Multi-Account Support**: Enable users to switch between multiple accounts.
- **Session Timeout**: Automatically log out users after a period of inactivity for added security.
- **Mobile App Companion**: Develop a mobile app that securely manages sessions and provides enhanced control over QR logins.

## 🤝 Contributing
1. Fork the repository.
2. Create a new branch for your feature:
```bash
git checkout -b feature-name
```
3. Commit your changes:
```bash
git commit -m "Add new feature"
```
4. Push the branch to your fork:
```bash
git push origin feature-name
```
5. Open a pull request to this repository.

## 📜 License
This project is licensed under the MIT License.