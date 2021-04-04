/* globals $, symbols */

// Disable form submission (eg. via Enter key)
$('form').submit(false)

$('textarea, input, select').on('change keyup', function () {
  updateQrCode()
})

const updateQrCode = function () {
  const size = 350

  $('#error-container').hide()
  $('#qr').empty()
  $('#qr').qrcode({
    render: $('input[name=qr-format]:checked').val(),
    width: size,
    height: size,
    size: size,
    color: '#3a3',
    text: $('#qr-data').val(),
    textOverlay: $('#qr-overlay').val(),
    textOverlayTransparency: !$('#qr-overlay-transparency').is(':checked'),
    textOverlayBorder: $('#qr-overlay-border').is(':checked'),
    ecLevel: 'H',
    minVersion: 5,
    symbols: symbols[$('#qr-overlay-font').val()]
  })
}

updateQrCode()
