// Execute the script
browser.tabs.executeScript({file: "/content_scripts/fake-steak.js"});

console.log("this is the popup");

function handleMessage(message) {
  let wordCount = message.MFs["Words"];
  // total number of moral foundation words
  let MFCount = 0;
  for (let key in message.MFs) {
    if (key !== "Words") {
      MFCount += message.MFs[key];
    }
  }
  for (let key in message.MFs) {
    if (key !== "Words") {
      let count = message.MFs[key];
      console.log(count / MFCount);
      // This just became ugly...
      let percent = parseFloat(((100 * count) / MFCount).toFixed(2));
      let percentTotal = parseFloat(((100 * count) / wordCount).toFixed(2));
      let words = count === 1 ? "word" : "words";
      document.getElementById(key).innerText = percent + "% (" + count + " " + words + ", " + percentTotal + "% of article)"; 
    }
  }
}

browser.runtime.onMessage.addListener(handleMessage);
