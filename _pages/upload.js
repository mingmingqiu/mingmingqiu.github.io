async function uploadFile() {
    let file = document.getElementById("fileInput").files[0];
    let requestType = document.getElementById("requestType").value;
    let outputElement = document.getElementById("output");

    if (!file) {
        outputElement.innerText = "❌ Please select a file before submitting.";
        return;
    }

    let formData = new FormData();
    formData.append("file", file);
    formData.append("request_type", requestType);

    try {
        let response = await fetch("https://52.91.126.235:8000/upload/", {
            method: "POST",
            body: formData
        });

        if (!response.ok) {
            throw new Error(`Server responded with ${response.status}`);
        }

        let result = await response.json();
        outputElement.innerText = result.response;
    } catch (error) {
        outputElement.innerText = `❌ Error: ${error.message}`;
        console.error("Upload failed:", error);
    }
}
