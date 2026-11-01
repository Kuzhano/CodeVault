import KartuSnippet from "./kartuSnippet";

function DaftarSnippet({ daftarSnippet, totalSnippet }) {
  if (totalSnippet === 0) {
    return <p className="kosong">Belum ada data snippet</p>;
  }

  if (daftarSnippet.length === 0) {
    return <p className="kosong">Tidak ada snippet yang cocok. Coba kata kunci atau bahasa lain.</p>;
  }

  return (
    <section className="daftar">
      {daftarSnippet.map((snippet) => (
        <KartuSnippet
          key={snippet.id}
          judul={snippet.judul}
          bahasa={snippet.bahasa}
          kode={snippet.kode}
          catatan={snippet.catatan}
        />
      ))}
    </section>
  );
}

export default DaftarSnippet;