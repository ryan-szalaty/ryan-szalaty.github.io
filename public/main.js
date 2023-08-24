const imageButtons = document.getElementsByClassName("image-button");
const artImage = document.getElementById("art-image");
const artImageButton = document.getElementById("art-image-button");
const downloadButton = document.getElementById("download-button");
let currentNumber = 1;

function updateArtImageNumber() {
    artImage.src = `art-${currentNumber}.jpg`
}

function cycleImages() {
    currentNumber++;
    if (currentNumber > 3) {
        currentNumber = 1;
    }
    updateArtImageNumber();
}

function downloadPDF() {
    const filePath = "resume.pdf";
    downloadButton.href = filePath;
    downloadButton.click();
}

artImageButton.addEventListener("click", cycleImages);
downloadButton.addEventListener("click", downloadPDF);