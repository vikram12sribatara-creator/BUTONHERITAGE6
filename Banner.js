import React from "react";
import bannerImg from "../assets/images/banner-buton.jpg"; // Ganti path dengan file banner asli

const Banner = () => (
  <section className="banner">
    <img src={bannerImg} alt="Buton Heritage Banner" className="banner-img" />
    <div className="banner-overlay">
      <h1>Buton Heritage</h1>
      <p>
        Menjaga dan mendokumentasikan warisan budaya Buton.<br />
        Bersama, melestarikan untuk generasi kini dan mendatang.
      </p>
    </div>
  </section>
);

export default Banner;