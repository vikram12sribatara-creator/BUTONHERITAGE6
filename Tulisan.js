import React from "react";

// Contoh artikel dummy
const tulisanList = [
  {
    title: "Sejarah Kesultanan Buton",
    kategori: "Sejarah",
    excerpt: "Kesultanan Buton merupakan kerajaan maritim yang berjaya di Sulawesi Tenggara...",
    img: "/images/artikel1.jpg"
  },
  {
    title: "Seni Tenun Tradisional",
    kategori: "Seni",
    excerpt: "Tenun Buton kaya motif dan filosofi, diwariskan turun-temurun...",
    img: "/images/artikel2.jpg"
  },
];

const Tulisan = () => (
  <section id="tulisan" className="section">
    <h2>Tulisan</h2>
    <div className="tulisan-list">
      {tulisanList.map((t, i) => (
        <div className="tulisan-card" key={i}>
          <img src={t.img} alt={t.title} className="tulisan-img" />
          <div>
            <span className="tulisan-kategori">{t.kategori}</span>
            <h3>{t.title}</h3>
            <p>{t.excerpt}</p>
            <button className="btn-baca">Baca Selengkapnya</button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Tulisan;