function RingkasanSnippet({ daftarSnippet }) {
  const jumlahBahasa = new Set(daftarSnippet.map((snippet) => snippet.bahasa)).size;

  return (
    <section className="ringkasan">
      <p>
        <strong>{daftarSnippet.length}</strong> snippet tersimpan
      </p>
      <p>
        <strong>{jumlahBahasa}</strong> bahasa/tool
      </p>
    </section>
  );
}

export default RingkasanSnippet;