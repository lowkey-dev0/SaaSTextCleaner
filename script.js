document.getElementById("cleanBtn").addEventListener("click", cleanText);
document.getElementById("copyBtn").addEventListener("click", copyText);
document.getElementById("themeToggle").addEventListener("click", toggleTheme);

function cleanText() {
  let text = document.getElementById("input").value;

  text = text.replace(/\s+/g, " ");
  text = text.replace(/^\s+|\s+$/g, "");
  text = text.replace(/\n\s*\n/g, "\n");

  document.getElementById("output").value = text;
  showStatus("Text cleaned");
}

function copyText() {
  const inputText = document.getElementById("input").value;
  const output = document.getElementById("output");
  const copyBtn = document.getElementById("copyBtn");

  output.value = inputText;

  output.select();
  document.execCommand("copy");

  copyBtn.classList.add("copied");
  setTimeout(() => copyBtn.classList.remove("copied"), 450);

  showStatus("Copied to clipboard");
}

function showStatus(msg) {
  const status = document.getElementById("status");
  status.textContent = msg;
  setTimeout(() => (status.textContent = ""), 1500);
}

function toggleTheme() {
  const body = document.body;
  if (body.classList.contains("light")) {
    body.classList.remove("light");
  } else {
    body.classList.add("light");
  }
}
