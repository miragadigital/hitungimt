document.getElementById('calculateBtn').addEventListener('click', function() {
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var nama = document.getElementById('namaku').value;
    
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0 ) {
        showModal('Mohon masukkan angka yang valid untuk tinggi dan berat.');
        return;
    }

    var bmi = weight / ((height / 100) * (height / 100));
    var bmiCategory = '';
    var pesan = '';

    if (bmi < 18.5) {
        bmiCategory = 'Kurus';
    } else if (bmi < 25) {
        bmiCategory = 'Normal';
    } else if (bmi < 30) {
        bmiCategory = 'Gemuk';
    } else {
        bmiCategory = 'Obesitas';
    }

    if (bmi < 18.5) {
        pesan = 'Kamu kok kecil banget,, Jangan hemat-hemat ya '+ nama +', makan yang banyak, ada mie ayam, soto, rawon di SKA STPL Bekasi';
    } else if (bmi < 25) {
        pesan = 'Pertahankan badan ideal mu itu '+ nama +', karena perang yang berat adalah perang melawan nafsu makan kalo udah nongkrong di SKA STPL Bekasi';
    } else if (bmi < 30) {
        pesan = 'Awas lho '+ nama +', baju mungkin udah mulai ga muat, mungkin beratnya hidup ini tak seberat badan mu, coba rutin jajan jus tanpa gula di SKA STPL Bekasi';
    } else {
        pesan = 'Banyakin puasa dan olahraga ya '+ nama +', lapangan STPL lega, ada lapang tenis dan voli, nongkrong di SKA STPL Bekasi nya cukup jajan jus tanpa gula saja ya';
    }

    var result = 'Hasil IMT Anda: ' + bmi.toFixed(2) + '<br>';
    result += 'Kategori IMT: ' + bmiCategory + '<br><br>'; 
    result += 'Wejangan Sepuh : <br>' + pesan;

    showModal(result);
});

function showModal(message) {
    var modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = '<div class="modal-content">' + message + '<br><button class="modal-button" onclick="closeModal()">Hitung Lagi</button><span class="close">&times;</span></div>';
    document.body.appendChild(modal);
    var closeButton = modal.querySelector('.close');
    closeButton.addEventListener('click', function() {
        modal.remove();
    });
}

function closeModal() {
    var modal = document.querySelector('.modal');
    modal.remove();
}
