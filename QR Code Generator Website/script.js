document.getElementById('generate-btn').addEventListener('click', function() {
    const textInput = document.getElementById('text-input').value;
    const qrcodeContainer = document.getElementById('qrcode');

    if (textInput.trim() === '') {
        alert('Please enter some text or URL');
        return;
    }

    // Clear previous QR code
    qrcodeContainer.innerHTML = '';

    // Generate new QR code
    $(qrcodeContainer).qrcode({
        text: textInput,
        width: 200,
        height: 200
    });
});
