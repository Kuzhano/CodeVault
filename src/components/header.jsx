function Header({ judul, deskripsi }) {
  return (
    <header className="header">
      <span className="logo" aria-hidden="true">
        {"{ }"}
      </span>
      <div>
        <h1>{judul}</h1>
        <p>{deskripsi}</p>
      </div>
    </header>
  );
}

export default Header;