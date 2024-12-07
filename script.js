function calculateBMI() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const weight = parseFloat(document.getElementById('weight').value);
    const gender = document.querySelector('input[name="gender"]:checked');

    if (!name || !age || !height || !weight || !gender) {
        alert("Harap isi semua field!");
        return;
    }

    const bmi = (weight / (height * height)).toFixed(1);
    let category = '';
    let circleClass = '';
    let messages = [];

    if (bmi < 18.5) {
        category = "Kekurangan Berat Badan";
        circleClass = "yellow";
        messages = [
            "Berat badan kurang, bukan berarti harus makan semua snack di supermarket! Yuk tambahkan protein dan kalori sehat 🍳🥗.",
            "Kamu sering lupa makan ya? Ingat, makan itu wajib, bukan hobi! 🍔🍚",
            "Berat badan kurang? Makan teratur, jangan cuma ngemil kerupuk pas lapar 😅."
        ];
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal";
        circleClass = "green";
        messages = [
            "Selamat, kamu lagi di jalur yang benar! Jangan lupa tetap makan sehat dan rajin olahraga ya 🏃‍♂️🥦.",
            "BMI kamu normal, kayak hidup kamu yang penuh keseimbangan! Pertahankan ya 😎.",
            "Kamu keren banget! Jaga terus pola makan dan gaya hidup sehatmu 💪."
        ];
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Kelebihan Berat Badan";
        circleClass = "red";
        messages = [
            "Ayo semangat bergerak! Jangan cuma olahraga jari di HP, ya 🏋️‍♀️📱.",
            "Kelebihan berat badan? Yuk kurangi makanan goreng-gorengan, tapi jangan kurangi senyum! 😊.",
            "Ingat, bakso jumbo itu gak termasuk olahraga angkat beban, ya! 💪🍜."
        ];
    } else {
        category = "Obesitas";
        circleClass = "red";
        messages = [
            "Obesitas itu tanda tubuh minta perhatian ekstra. Yuk mulai langkah kecil untuk hidup sehat! 🚶‍♂️🥗.",
            "Jangan galau, mulai hari ini coba jalan kaki lebih sering dan kurangi 'teh manis' harianmu 🍵.",
            "Berat badan kamu itu cerita perjalanan hidup. Yuk ubah bab berikutnya jadi lebih sehat dan aktif! 📖🏃."
        ];
    }

    // Pilih pesan secara acak
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    const resultText = `
        <div class="result-circle ${circleClass}"></div>
        <div class="result-text">
            Nama: ${name} <br>
            Jenis Kelamin: ${gender.value} <br>
            Umur: ${age} tahun <br>
            BMI: ${bmi} (${category}) <br>
            <p class="promotive-message">${randomMessage}</p>
        </div>
    `;

    document.getElementById('result').innerHTML = resultText;
}


function printPreview() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const result = document.getElementById('result').innerText;

    if (!name || !age || !height || !weight || !gender) {
        alert("Harap isi semua field!");
        return;
    }

    const bmi = (weight / (parseFloat(height) / 100) ** 2).toFixed(1);
    let category = '';

    if (bmi < 18.5) category = "Kekurangan Berat Badan";
    else if (bmi >= 18.5 && bmi < 24.9) category = "Normal";
    else if (bmi >= 25 && bmi < 29.9) category = "Kelebihan Berat Badan";
    else category = "Obesitas";

    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write(`
<html>
    <head>
        <title>Print Preview</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 20px;
                padding: 0;
            }
            h3, h4 {
                text-align: center;
                margin-bottom: 5px;
                margin-top: 5px
            }
            .container {
                display: flex;
                justify-content: space-between;
                gap: 250px;
            }
            .left-section, .right-section {
                flex: 1;
            }
            .left-section p, .right-section p {
                margin: 8px 0;
            }
            textarea {
                width: 100%;
                height: 120px;
                margin-top: 5px;
                padding: 8px;
                border: 1px solid #ccc;
                border-radius: 4px;
                resize: none;
            }
            h5 {
                margin-top: 10px;
                margin-bottom: 5px;
            }
            img {
                display: block;
                margin-left: auto;
                margin-right: auto;
                width: 4%;
            }
            p{
                font-size: smaller;
            }
        </style>
    </head>
    <body>
        <img src="logo.png" alt="">
        <h3>Form Pemeriksaan Kesehatan Massal</h3>
        <h4>KLINIK STPL BEKASI</h4>
        <div class="container">
            <div class="left-section">
                <p><strong>Nama:</strong> ${name}</p>
                <p><strong>Jenis Kelamin:</strong> ${gender.value}</p>
                <p><strong>Umur:</strong> ${age} tahun</p>
            </div>
            <div class="right-section">
                <p><strong>Tinggi Badan:</strong> ${height} cm</p>
                <p><strong>Berat Badan:</strong> ${weight} kg</p>
                <p><strong>BMI:</strong> ${bmi} (${category})</p>
            </div>
        </div>
        <h5>Keluhan dan Hasil TTV</h5>
        <textarea></textarea>
        <h5>Terapi Yang Diberikan</h5>
        <textarea></textarea>
        <script>
            window.print();
        </script>
    </body>
</html>

    `);
    printWindow.document.close();
}
