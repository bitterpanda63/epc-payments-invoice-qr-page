var QRCode = require('qrcode');
var canvas = document.getElementById('qrcode_canvas');
let params = new URLSearchParams(document.location.search);

document.getElementById("amount").innerText = params.get('amount');
let amount = params.get('amount').slice(1).replace(",", ".");
let qrcode_text = `BCD\n001\n1\nSCT\n${params.get('bic')}\n${params.get('name')}\n${params.get('iban').toUpperCase()}\nEUR${amount}\nCHAR\n\nINV${params.get('invoice')}\n`

QRCode.toCanvas(canvas, qrcode_text, function (error) {
  if (error) console.error(error)
  console.log('success!');
})