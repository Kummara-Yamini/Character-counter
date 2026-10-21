
const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const wordCount = document.getElementById("wordCount");

textInput.addEventListener("input", function () {
    const text = textInput.value;

    // Count characters, including spaces
    charCount.textContent = text.length;

    // Count words, excluding extra spaces
    const words = text.trim().split(/\s+/);
    wordCount.textContent = text.trim() === "" ? 0 : words.length;
});
