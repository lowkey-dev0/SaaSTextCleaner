document.getElementById("cleanBtn").addEventListener("click", cleanText);
document.getElementById("copyBtn").addEventListener("click", copyText);

function cleanText() {
  let text = document.getElementById("input").value;

  text = text.replace(/\s+/g, " ");
  text = text.replace(/^\s+|\s+$/g, "");
  text = text.replace(/\n\s*\n/g, "\n");

  document.getElementById("output").value = text;
}

function copyText() {
  // 1. Read from TOP textarea
  const inputText = document.getElementById("input").value;

  // 2. Write into BOTTOM textarea
  const output = document.getElementById("output");
  output.value = inputText;

  // 3. Copy the BOTTOM textarea to clipboard
  output.select();
  document.execCommand("copy");
}
