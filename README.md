# QRupted - Corrupted QR Codes with Text Overlay.

See it in action at [QRupted.com](http://qrupted.com/)!

## Idea

By utilising the (optional) error correction functionality of QR Code generators and readers, it is possible to overlay an image or text onto the QR Code, without losing the stored data. This is great for branding purposes, and to create a more compelling and intriguing logo to scan.

Creating an overlay image has been done - this is relatively trivial, and involves imposing a logo over a pre-generated QR code.

I feel that a cleaner solution, which arguably looks more appealing and eye-catching, is to use a blocky ASCII "font", where each block corresponds to a data point on the QR code.

## Implementation

There are a multitude of libraries in many languages for creating QR codes. I used [jQuery qrcode](http://larsjung.de/qrcode/) by Lars Jung, with my own modifications made to the raw QR Code data before the image is generated.
