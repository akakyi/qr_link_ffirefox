let qrcode = new QRCode(
    document.getElementById('QR'),
    {
            text: "tabInfo.url",
            width: 200,
            height: 200,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
    }
);

browser.tabs.query({active: true, lastFocusedWindow: true})
    .then((it) => {
            qrcode.clear();
            qrcode.makeCode(it[0].url);
            console.log("generated for: " + it[0].url)
    });
