const textarea = document.createElement("textarea");
textarea.id = "wordArea";
textarea.rows = 5;
textarea.cols = 50;
document.body.insertBefore(textarea, document.getElementById("positionOutput"));

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("wordArea").value = "";
});

function searchWord() {
    let word = document.getElementById("wordInput").value.toUpperCase();
    let text = document.getElementById("wordArea").value.toUpperCase();
    let positionOutput = document.getElementById("positionOutput");
    positionOutput.innerText = "";

    let words = text.split(/\s+/).filter(w => w.length > 0);
    let positions = [];

    words.forEach((w, index) => {
        if (w === word) {
            positions.push(index + 1);
        }
    });

    if (positions.length > 0) {
        positionOutput.innerText = `Palabra encontrada en las posiciones: ${positions.join(", ")}`;
    } else {
        alert("Palabra no encontrada");
    }
}



