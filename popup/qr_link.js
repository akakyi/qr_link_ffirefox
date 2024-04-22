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

chrome.tabs.query(
    {active: true, lastFocusedWindow: true},
    (it) => {
            qrcode.clear();
            qrcode.makeCode(it[0].url);
            console.log("generated for: " + it[0].url)
    }
);
