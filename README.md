# Element Screenshot Selector Extension

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-blue)](https://chrome.google.com/webstore/category/extensions)

A modern, privacy-friendly Chrome extension that lets you **select any element on any web page and instantly save it as a high-quality image**.  
Perfect for capturing chat messages, code snippets, UI components, or any part of a website—right from your browser!

---

## ✨ Features

- **Point-and-Click Selection:** Hover to highlight, click to capture any element.
- **Instant Image Download:** Saves the selected element as a PNG image in your Downloads folder.
- **No Setup Required:** Works out of the box—no configuration, no sign-up.
- **Modern UI:** Clean, floating info box guides you through the process (no annoying alerts).
- **High-Resolution Output:** Uses [html2canvas](https://html2canvas.hertzen.com/) for crisp screenshots.
- **Privacy-First:** No data collection, no analytics, no remote code.
- **Minimal Permissions:** Only uses `activeTab` and `scripting` for maximum security.
- **Works on Most Sites:** Compatible with the vast majority of web pages (see [Limitations](#limitations)).

---

## 🚀 Demo

![Demo GIF](demo/demo.gif)  
*Select any element and save it as an image with a single click!*

---

## 🛠️ Installation

### **From Source (Unpacked Extension)**

1. **Download or Clone this Repository**
    ```bash
    git clone https://github.com/Manu-Tyagi90/element-screenshot-selector-extension.git
    ```
    Or [download as ZIP](https://github.com/Manu-Tyagi90/element-screenshot-selector-extension/archive/refs/heads/main.zip) and extract.

2. **Open Chrome and Go to Extensions**
    - Visit `chrome://extensions/`
    - Enable **Developer mode** (toggle in the top right)

3. **Load the Extension**
    - Click **Load unpacked**
    - Select the folder where you extracted/cloned the files

4. **Pin the Extension**
    - Click the puzzle piece icon in Chrome’s toolbar
    - Pin **Element Screenshot Selector** for easy access

---

## 🖱️ Usage

1. **Navigate to any web page** you want to capture from.
2. **Click the extension icon** in your Chrome toolbar.
3. **Hover over elements**—you’ll see a blue outline on hover.
4. **Click the element** you want to capture.
5. **Image is saved!**  
   - A floating info box will confirm the download.
   - Check your Downloads folder for `element-capture.png`.

---

## 📦 Files & Structure

```
element-screenshot-selector-extension/
│
├── manifest.json           # Extension manifest file
├── background.js           # Background script for script injection
├── inject.js               # Content script for UI and capture logic
├── html2canvas.min.js      # Bundled html2canvas library
├── icon16.png              # 16x16 extension icon
├── icon32.png              # 32x32 extension icon
├── icon48.png              # 48x48 extension icon
├── icon128.png             # 128x128 extension icon
├── README.md               # Project documentation

```

- **manifest.json**: Extension metadata and permissions
- **background.js**: Injects scripts into the active tab
- **inject.js**: Handles UI, element selection, and image capture
- **html2canvas.min.js**: Bundled screenshot library (no remote code)
- **iconXX.png**: Extension icons for Chrome UI
- **README.md**: This documentation

---

## 🔒 Security & Privacy

- **No data collection:** All processing is local, in your browser.
- **No analytics or tracking:** Your browsing and screenshots are private.
- **No remote scripts:** All code is bundled; nothing is loaded from the internet.
- **Minimal permissions:** Only `activeTab` and `scripting` are used, reducing risk.

**Privacy Policy:**  
> This extension does not collect, store, or transmit any personal data. All processing is done locally in your browser.

---

## 🖼️ Customization

- **Change the icon:** Replace the `iconXX.png` files with your own.
- **Edit the UI:** Modify `inject.js` to change the floating info box or highlight style.
- **Change file name:** Edit the `link.download` property in `inject.js` to customize the saved image name.

---

## ⚠️ Limitations

- **iframes & Shadow DOM:**  
  Elements inside iframes or shadow DOM may not be captured due to browser security restrictions.
- **Complex Sites:**  
  Some highly dynamic or protected sites (like Google.com) may not allow capturing certain elements.
- **Full Page Capture:**  
  This extension captures individual elements, not the entire page. For full-page screenshots, use Chrome’s built-in screenshot tool or another extension.

---

## 🧑‍💻 How It Works

- When you click the extension icon, it injects `html2canvas` and a custom script into the current tab.
- The script highlights elements on hover and listens for your click.
- On click, it uses `html2canvas` to render the selected element as a canvas, then saves it as a PNG.
- A floating info box provides feedback throughout the process.

---

## 📝 Contributing

Contributions, bug reports, and feature requests are welcome!

1. **Fork this repository**
2. **Create a new branch** for your feature or fix
3. **Commit your changes**
4. **Open a pull request** with a clear description

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙋 FAQ

**Q: Does this extension work on all websites?**  
A: It works on most, but not on elements inside iframes, shadow DOM, or some highly protected sites.

**Q: Is my data safe?**  
A: Yes! The extension does not collect or transmit any data.

**Q: Can I change the saved image name?**  
A: Yes, edit the `link.download` line in `inject.js`.

**Q: Can I use this code in my own project?**  
A: Yes, it’s open source under the MIT license.

---

## 🌐 Links

- [Chrome Extension Developer Guide](https://developer.chrome.com/docs/extensions/)
- [html2canvas Documentation](https://html2canvas.hertzen.com/)
- [Report an Issue](https://github.com/Manu-Tyagi90/element-screenshot-selector-extension/issues)

---

## ⭐️ Show Your Support

If you find this extension useful, please **star this repo** and share it with others!

---

*Made with ❤️ by [Manu Tyagi](https://github.com/Manu-Tyagi90) and the open source community.*


