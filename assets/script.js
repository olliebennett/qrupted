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

// https://stackoverflow.com/a/21903119/1323144
const getUrlParameter = function (sParam) {
  const sPageURL = window.location.search.substring(1)
  const sURLVariables = sPageURL.split('&')
  let sParameterName
  let i

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=')

    if (sParameterName[0] === sParam) {
      return typeof sParameterName[1] === 'undefined' ? true : decodeURIComponent(sParameterName[1])
    }
  }
  return false
}

// On page load, set data+text from url param if present
$(function () {
  const tParam = getUrlParameter('t')
  const dParam = getUrlParameter('d')
  if (tParam) {
    $('#qr-data').val(dParam)
    $('#qr-overlay').val(tParam)
  }
  // Refresh QR code
  updateQrCode()
})
