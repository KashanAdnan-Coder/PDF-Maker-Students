document.getElementById('generate-pdf').addEventListener('click', function () {
    const { jsPDF } = window.jspdf;

    const pdf = new jsPDF();

    const img = document.getElementById('image');
    const fname = document.getElementById('fname').value
    const cnic = document.getElementById('cnic').value
    const course = document.getElementById('course').value
    const img1 = document.getElementById('image1');
    const imgData = img.src;
    const imgData2 = img1.src;

    var file = document.getElementById('fileInput').files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            let imageUrl = e.target.result;
            console.log(imageUrl);

        };
    }

    // pdf.addImage(imageUrl, 'PNG', 20, 20, 50, 50, 50);
    function generateRandomSixDigitNumber() {
        const randomNumber = Math.floor(100000 + Math.random() * 900000);
        return randomNumber.toString();
    }
    const randomSixDigitNumber = generateRandomSixDigitNumber();
    pdf.text(randomSixDigitNumber, 52, 119);
    pdf.addImage(imgData, 'PNG', 5, 5, 95, 130);
    pdf.addImage(imgData2, 'PNG', 105, 5, 95, 130);
    pdf.text(document.querySelector('#name').value, 33, 102);
    pdf.text(document.querySelector('#name').value, 126, 19);
    pdf.text(fname, 142, 25);
    pdf.text(cnic, 124, 32);
    pdf.text(course, 128, 39);

    pdf.save('print-this-pdf.pdf');
});