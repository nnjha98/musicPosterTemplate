let qr; // QR Code instance

function setup() {
    createCanvas(400, 400);
    let url = "https://example.com"; // Replace with your desired URL
    // qr = qrcode(0, 'L');
//   qr.addData('https://editor.p5js.org/kazuhikoarase/sketches/Req28QjIW');
//   qr.make();
    drawQRCode();
}

function drawQRCode() {
    background(255);
    // Get the QR code canvas and draw it on the p5.js canvas
    // let ascii = qr.createASCII();
    // console.log(ascii)
    fill('red');  // Set fill color to red
      noStroke();
    rect(200,200,2,2)
    // image(loadImage(qr.createDataURL(10,2)), 0, 0); // Center the QR code
}
