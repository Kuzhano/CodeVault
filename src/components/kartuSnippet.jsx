function KartuSnippet({ judul, bahasa, kode, catatan }) {
  return (
    <article className="kartu" data-bahasa={bahasa}>
      <div className="kartu-atas">
        <h3>{judul}</h3>
        <span className="badge">{bahasa}</span>
      </div>

      <pre className="kode">
        <code>{kode}</code>
      </pre>

      {catatan && <p className="catatan">{catatan}</p>}
    </article>
  );
}

export default KartuSnippet;