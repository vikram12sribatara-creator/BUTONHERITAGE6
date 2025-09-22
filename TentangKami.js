import React from "react";

const struktur = [
  { nama: "Vikram", jabatan: "Ketua Umum" },
  { nama: "Wa Ode Elmayana", jabatan: "Sekretaris" },
  { nama: "Arief Rahmansyah Ramadhan", jabatan: "Bendahara" },
  { nama: "Annisa Tsabitdina Suhardi", jabatan: "Bidang Media dan Informasi" },
  { nama: "Wa Ode Elmayana", jabatan: "Bidang Kajian Ilmiah dan Penalaran" },
  { nama: "Arief Rahmansyah", jabatan: "Bidang Advokasi" },
  { nama: "Wa Ode Alfisyah Rahmadani", jabatan: "Bidang Usaha Kreatif" },
  { nama: "Annisa Tsabitdina Suhardi", jabatan: "Bidang Pelestarian" },
];

const TentangKami = () => (
  <section id="tentang-kami" className="section">
    <h2>Tentang Kami</h2>
    <p>
      <strong>Buton Heritage</strong> adalah lembaga yang bergerak dalam pelestarian budaya Buton, baik benda maupun takbenda, berdiri sejak 2024.
    </p>
    <h3>Struktur Organisasi</h3>
    <table className="struktur-table">
      <thead>
        <tr>
          <th>Nama</th>
          <th>Jabatan</th>
        </tr>
      </thead>
      <tbody>
        {struktur.map((s, i) => (
          <tr key={i}>
            <td>{s.nama}</td>
            <td>{s.jabatan}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

export default TentangKami;