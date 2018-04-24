// Execute the script
browser.tabs.executeScript({file: "/content_scripts/fake-steak.js"});

console.log("this is the popup");

function parseMF(count, totalMFCount, wordCount) {
  // This just became ugly...
  let percent = parseFloat(((100 * count) / totalMFCount).toFixed(2));
  let percentTotal = parseFloat(((100 * count) / wordCount).toFixed(2));
  let words = count === 1 ? "word" : "words";
  return percent + "% (" + count + " " + words + ", " + percentTotal + "% of article)"; 
}

function handleMessage(message) {
  let wordCount = message.MFs["Words"];
  document.getElementById("Words").innerText = wordCount + (wordCount == 1 ?
    " word" : " words");
  // total number of moral foundation words
  let MFCount = 0;
  let MFCategoryCount = {"Harm": 0 , "Fairness": 0, "Ingroup": 0, "Authority":
    0, "Purity": 0};
  for (let key in message.MFs) {
    if (key !== "Words" && key !== "MoralityGeneral") {
      let count = message.MFs[key];
      MFCount += count; 
      MFCategoryCount[key.match(/[A-Z][a-z]*/)[0]] += count;
    }
  }
  console.log(MFCategoryCount);
  for (let key in message.MFs) {
    if (key !== "Words") {
      let count = message.MFs[key];
      document.getElementById(key).innerText = parseMF(count, MFCount,
        wordCount);
    }
  }
  for (let key in MFCategoryCount) {
    if (key !== "Words") {
      let count = MFCategoryCount[key];
      document.getElementById(key).innerText = parseMF(count, MFCount,
        wordCount);
    }
  }
}

browser.runtime.onMessage.addListener(handleMessage);
