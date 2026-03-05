/**
 * Developed by SEPT
 * Service ZONE QR Code Generator
 */

document.addEventListener("DOMContentLoaded", function() {
    // بيجيب رابط الصفحة الحالي تلقائياً
    const currentUrl = window.location.href;
    const qrElement = document.getElementById("qrcode");

    if (qrElement) {
        new QRCode(qrElement, {
            text: currentUrl,
            width: 130,
            height: 130,
            colorDark : "#000000", // لون المربعات
            colorLight : "#ffffff", // لون الخلفية
            correctLevel : QRCode.CorrectLevel.H
        });
    }
});