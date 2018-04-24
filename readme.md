# Fake Steak
### Moral foundation analysis browser extension

# Installation

1. [Clone](https://help.github.com/articles/cloning-a-repository/) this repository.
2. Install [Firefox](https://www.mozilla.org/en-US/firefox/new/).
3. Launch Firefox and navigate to [about:debugging](//about:debugging) by typing it into the URL bar.
4. Click the "Load Temporary Add-On" button.
5. Navigate to where you cloned this repository and select a file in it (e.g. `manifest.json`).
6. The extension will be loaded temporarily. It will be unloaded when you close Firefox.

# Use

Simply click the Fake Steak icon to recieve the Fake Steak evaluation of any webpage.

# Known Bugs/Issues

Fake Steak evaluates only content in `<p>` tags presently, which means that some superfluous content may be evaluated and some actual content may not be. Fixing this would involve smarter web scraping or perhaps adding the option to manually select text or elements.
