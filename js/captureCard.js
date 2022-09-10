function saveAs(url, fileName) {
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.appendChild(a);
}

export function captureCard(event) {
  const cardDiv = event.path[1].previousSibling;
  //   cardDiv.style.borderRadius = none;
  html2canvas(cardDiv, {
    allowTaint: true,
    useCORS: true,
    width: cardDiv.offsetWidth,
    height: cardDiv.offsetHeight,
    scale: 1,
  }).then((canvas) => {
    const imgURL = canvas.toDataURL();
    saveAs(imgURL, "myCard.png");
  });
}
