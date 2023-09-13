document.addEventListener("DOMContentLoaded", function () {
    const kalkulatorForm = document.getElementById("kalkulatorForm");
    const sisiInput = document.getElementById("sisi");
    const hasilDiv = document.getElementById("hasil");
    const luasSpan = document.getElementById("luas");
    const kelilingSpan = document.getElementById("keliling");
    const resetButton = document.getElementById("resetButton");

    kalkulatorForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const sisi = parseFloat(sisiInput.value);

        if (isNaN(sisi) || sisi <= 0) {
            alert("Masukkan panjang sisi dengan benar.");
        } else {
            const luas = sisi * sisi;
            const keliling = 4 * sisi;

            luasSpan.textContent = luas;
            kelilingSpan.textContent = keliling;
            hasilDiv.style.display = "block";
        }
    });

    resetButton.addEventListener("click", function () {
        kalkulatorForm.reset();
        hasilDiv.style.display = "none";
    });
});
