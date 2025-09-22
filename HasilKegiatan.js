import React from "react";

// Contoh hasil kegiatan
const hasilList = [
  {
    title: "Dokumentasi Pameran Budaya 2024",
    img: "/images/hasil1.jpg",
    ringkasan: "Laporan, galeri foto, dan video pameran budaya.",
  },
  {
    title: "Video Workshop Tari",
    img: "/images/hasil2.jpg",
    ringkasan: "Video dokumentasi dan testimoni peserta.",
  },
];

const HasilKegiatan = () => (
  <section id="hasil-kegiatan" className="section">
    <h2>Hasil Kegiatan</h2>
    <div className="hasil-list">
      {hasilList.map((h, i) => (
        <div className="hasil-card" key={i}>
          <img src={h.img} alt={h.title} className="hasil-img" />
          <h3>{h.title}</h3>
          <p>{h.ringkasan}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HasilKegiatan;