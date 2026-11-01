import { useState } from "react";
import Header from "./components/header";
import RingkasanSnippet from "./components/ringkasanSnippet";
import FormSnippet from "./components/formSnippet";
import FilterSnippet from "./components/filterSnippet";
import DaftarSnippet from "./components/daftarSnippet";

function App() {
  const [daftarSnippet, setDaftarSnippet] = useState([
    {
      id: 1,
      judul: "Batalkan commit terakhir",
      bahasa: "Git",
      kode: "git reset --soft HEAD~1",
      catatan: "Commit dibatalkan, perubahan file tetap ada di staging.",
    },
    {
      id: 2,
      judul: "Buat project React dengan Vite",
      bahasa: "Bash",
      kode: `npm create vite@latest nama-project -- --template react
cd nama-project
npm install
npm run dev`,
      catatan: "Server berjalan di http://localhost:5173",
    },
    {
      id: 3,
      judul: "Pusatkan elemen dengan Flexbox",
      bahasa: "CSS",
      kode: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
}`,
      catatan: "",
    },
    {
      id: 4,
      judul: "Ambil data dengan async/await",
      bahasa: "JavaScript",
      kode: `async function ambilData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
}`,
      catatan: "fetch() butuh response.json() untuk membaca isinya.",
    },
    {
      id: 5,
      judul: "Gabungkan dua tabel dengan JOIN",
      bahasa: "SQL",
      kode: `SELECT m.nama, k.nama_kelas
FROM mahasiswa m
JOIN kelas k ON m.kelas_id = k.id;`,
      catatan: "",
    },
    {
      id: 6,
      judul: "Looping dengan nomor urut",
      bahasa: "Python",
      kode: `buah = ["apel", "jeruk", "mangga"]
for i, nama in enumerate(buah, start=1):
    print(i, nama)`,
      catatan: "enumerate() memberi indeks otomatis tanpa variabel counter.",
    },
    {
      id: 7,
      judul: "Kerangka dasar HTML5",
      bahasa: "HTML",
      kode: `<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <title>Judul Halaman</title>
  </head>
  <body></body>
</html>`,
      catatan: "",
    },
  ]);

  const [kataKunci, setKataKunci] = useState("");
  const [bahasaAktif, setBahasaAktif] = useState("Semua");

  const daftarBahasa = [...new Set(daftarSnippet.map((snippet) => snippet.bahasa))];

  const kata = kataKunci.trim().toLowerCase();
  const snippetTampil = daftarSnippet.filter((snippet) => {
    const cocokBahasa = bahasaAktif === "Semua" || snippet.bahasa === bahasaAktif;
    const cocokKata =
      snippet.judul.toLowerCase().includes(kata) ||
      snippet.kode.toLowerCase().includes(kata) ||
      snippet.catatan.toLowerCase().includes(kata);
    return cocokBahasa && cocokKata;
  });

  function tambahSnippet(dataBaru) {
    const snippetBaru = { id: Date.now(), ...dataBaru };
    setDaftarSnippet([snippetBaru, ...daftarSnippet]);
    setKataKunci("");
    setBahasaAktif("Semua");
  }

  return (
    <div className="app">
      <Header
        judul="CodeVault"
        deskripsi="Simpan potongan kode dan perintah yang sering lupa, supaya tidak perlu mencari ulang."
      />
      <RingkasanSnippet daftarSnippet={daftarSnippet} />

      <div className="layout">
        <FormSnippet onTambah={tambahSnippet} />

        <main className="konten">
          {daftarSnippet.length > 0 && (
            <FilterSnippet
              kataKunci={kataKunci}
              onUbahKataKunci={setKataKunci}
              daftarBahasa={daftarBahasa}
              bahasaAktif={bahasaAktif}
              onUbahBahasa={setBahasaAktif}
              jumlahTampil={snippetTampil.length}
              totalSnippet={daftarSnippet.length}
            />
          )}
          <DaftarSnippet daftarSnippet={snippetTampil} totalSnippet={daftarSnippet.length} />
        </main>
      </div>
    </div>
  );
}

export default App;