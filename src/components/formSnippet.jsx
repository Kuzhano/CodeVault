import { useState } from "react";

const PILIHAN_BAHASA = ["JavaScript", "Python", "SQL", "Bash", "Git", "CSS", "HTML"];

function FormSnippet({ onTambah }) {
  const [judul, setJudul] = useState("");
  const [bahasa, setBahasa] = useState("JavaScript");
  const [kode, setKode] = useState("");
  const [catatan, setCatatan] = useState("");
  const [pesanError, setPesanError] = useState("");

  function handleTambah() {
    if (judul.trim() === "" || kode.trim() === "") {
      setPesanError("Judul dan kode wajib diisi.");
      return;
    }

    onTambah({ judul: judul.trim(), bahasa, kode, catatan: catatan.trim() });

    setJudul("");
    setBahasa("JavaScript");
    setKode("");
    setCatatan("");
    setPesanError("");
  }

  return (
    <section className="form">
      <h2>Tambah snippet baru</h2>

      <div className="baris">
        <div className="field">
          <label htmlFor="judul">Judul</label>
          <input
            id="judul"
            type="text"
            placeholder="Contoh: Batalkan commit terakhir"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="bahasa">Bahasa / Tool</label>
          <select id="bahasa" value={bahasa} onChange={(e) => setBahasa(e.target.value)}>
            {PILIHAN_BAHASA.map((pilihan) => (
              <option key={pilihan} value={pilihan}>
                {pilihan}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="kode">Kode</label>
        <textarea
          id="kode"
          placeholder="Tempel kode atau perintah di sini"
          value={kode}
          onChange={(e) => setKode(e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="catatan">Catatan (opsional)</label>
        <input
          id="catatan"
          type="text"
          placeholder="Kapan snippet ini dipakai?"
          value={catatan}
          onChange={(e) => setCatatan(e.target.value)}
        />
      </div>

      {pesanError && <p className="error">{pesanError}</p>}

      <button className="tombol" onClick={handleTambah}>
        Tambah
      </button>
    </section>
  );
}

export default FormSnippet;