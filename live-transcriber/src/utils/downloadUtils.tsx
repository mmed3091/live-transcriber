export function downloadFile(text: string, fileName: string, fileType: string ): void {

  const textFileAsBlob = new Blob([text], { type: fileType });
  const downloadLink = document.createElement("a");
  downloadLink.download = fileName;
  downloadLink.textContent = "Download File";

  
  const objectURL =
    window.URL?.createObjectURL(textFileAsBlob) ??
    (window as any).webkitURL?.createObjectURL(textFileAsBlob);

  if (!objectURL) {
    console.error("Failed to create object URL for download.");
    return;
  }

  downloadLink.href = objectURL;

  
  if (!(window as any).webkitURL) {
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
  }

  downloadLink.click();


  URL.revokeObjectURL(objectURL);
  if (downloadLink.parentNode) {
    document.body.removeChild(downloadLink);
  }
}
