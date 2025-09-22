import React from "react";

// Contoh data dummy kegiatan
const kegiatanList = [
  {
    title: "Pameran Budaya 2024",
    poster: "/images/kegiatan1.jpg",
    desc: "Pameran seni dan artefak budaya Buton.",
    waktu: "3 Mei 2024",
  },
  {
    title: "Workshop Tari Tradisional",
    poster: "/images/kegiatan2.jpg",
    desc: "Pelatihan tari Buton untuk generasi muda.",
    waktu: "12 Juni 2024",
  },
];

const Kegiatan = () => (
  <section id="kegiatan" className="section">
    <h2>Kegiatan</h2>
    <div className="kegiatan-list">
      {kegiatanList.map((k, i) => (
        <div className="kegiatan-card" key={i}>
          <img src={k.poster} alt={k.title} className="kegiatan-img" />
          <h3>{k.title}</h3>
          <p className="kegiatan-waktu">{k.waktu}</p>
          <p>{k.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Kegiatan;