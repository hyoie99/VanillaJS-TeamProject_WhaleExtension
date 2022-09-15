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
  // console.log(event.path[2].querySelector("#data").offsetWidth);
  //   cardDiv.style.borderRadius = none;

  html2canvas(cardDiv, {
    allowTaint: true,
    useCORS: true,
    letterRendering: true,
    width: cardDiv.offsetWidth,
    height: cardDiv.offsetHeight,
    scale: 1,
  }).then((canvas) => {
    const imgURL = canvas.toDataURL();
    saveAs(imgURL, "myCard.png");
  });

  // html2canvas(document.getElementById("couponSample1")).then((canvas) => {
  //   document.getElementById("canvas1").appendChild(canvas);
  //   let url = document.querySelector("#canvas1 canvas").toDataURL("image/png");
  // });
}
