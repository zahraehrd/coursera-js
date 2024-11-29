// Fonction appelée lors du survol d'une image
function upDate(previewPic) {
    // Vérifier si l'image existe
    if (!previewPic || !previewPic.src || !previewPic.alt) {
        console.error("L'élément survolé est invalide.");
        return;
    }

    // Récupérer l'élément avec l'id "image"
    const imageDiv = document.getElementById("image");
    if (imageDiv) {
        // Modifier l'image de fond et le texte
        imageDiv.style.backgroundImage = `url(${previewPic.src})`;
        imageDiv.textContent = previewPic.alt;
    } else {
        console.error("L'élément avec l'id 'image' est introuvable.");
    }
}

// Fonction appelée lors du départ de la souris
function unDo() {
    const imageDiv = document.getElementById("image");
    if (imageDiv) {
        // Réinitialiser l'image de fond et le texte
        imageDiv.style.backgroundImage = "";
        imageDiv.textContent = "Hover over an image below to display here";
    } else {
        console.error("L'élément avec l'id 'image' est introuvable.");
    }
}
