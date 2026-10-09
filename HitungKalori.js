
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tanya(pertanyaan) {
    return new Promise((resolve) => {
        rl.question(pertanyaan, resolve);
    });
}

async function main() {
    let totalKalori = 0;
    let lanjut = true;

    while (lanjut) {
        console.log("\n=== PROGRAM PENGHITUNG KALORI ===");
        console.log("1. Lari");
        console.log("2. Push-up");
        console.log("3. Plank");
        console.log("4. Selesai");

        let pilihan = await tanya("Pilih aktivitas (1-4): ");

        if (pilihan === "4") {
            lanjut = false;
        } else if (pilihan === "1" || pilihan === "2" || pilihan === "3") {
            let durasi = Number(
                await tanya("Masukkan durasi (menit): ")
            );

            if (!Number.isFinite(durasi) || durasi <= 0) {
                console.log("Durasi harus berupa angka lebih dari 0.");
                continue;
            }

            let kalori = 0;
            let nama = "";

            if (pilihan === "1") {
                kalori = (durasi / 5) * 60;
                nama = "Lari";
            } else if (pilihan === "2") {
                kalori = (durasi / 30) * 200;
                nama = "Push-up";
            } else {
                kalori = durasi * 5;
                nama = "Plank";
            }

            kalori = Number(kalori.toFixed(2));
            totalKalori += kalori;

            console.log(nama + " membakar " + kalori + " kalori.");
            console.log("Total sementara: " +
                Number(totalKalori.toFixed(2)) + " kalori");
        } else {
            console.log("Pilihan tidak valid! Silakan pilih 1-4.");
        }
    }

    console.log("\n=== HASIL AKHIR ===");
    console.log("Total kalori terbakar: " +
        Number(totalKalori.toFixed(2)) + " kalori");

    rl.close();
}

main()