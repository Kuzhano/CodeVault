function FilterSnippet({
  kataKunci,
  onUbahKataKunci,
  daftarBahasa,
  bahasaAktif,
  onUbahBahasa,
  jumlahTampil,
  totalSnippet,
}) {
  const pilihanBahasa = ["Semua", ...daftarBahasa];

  return (
    <section className="filter">
      <div className="cari">
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <input
          type="search"
          aria-label="Cari snippet"
          placeholder="Cari judul, kode, atau catatan…"
          value={kataKunci}
          onChange={(e) => onUbahKataKunci(e.target.value)}
        />
      </div>

      <div className="chips">
        {pilihanBahasa.map((bahasa) => (
          <button
            key={bahasa}
            className={bahasa === bahasaAktif ? "chip aktif" : "chip"}
            data-bahasa={bahasa === "Semua" ? undefined : bahasa}
            aria-pressed={bahasa === bahasaAktif}
            onClick={() => onUbahBahasa(bahasa)}
          >
            {bahasa}
          </button>
        ))}
      </div>

      <p className="info-hasil">
        Menampilkan {jumlahTampil} dari {totalSnippet} snippet
      </p>
    </section>
  );
}

export default FilterSnippet;