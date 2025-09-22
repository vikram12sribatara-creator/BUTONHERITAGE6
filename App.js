import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import VisiMisi from "./components/VisiMisi";
import Kegiatan from "./components/Kegiatan";
import HasilKegiatan from "./components/HasilKegiatan";
import Tulisan from "./components/Tulisan";
import TentangKami from "./components/TentangKami";
import Footer from "./components/Footer";
import "./styles/main.css";

function App() {
  return (
    <div className="app-bg">
      <Navbar />
      <Banner />
      <main>
        <VisiMisi />
        <Kegiatan />
        <HasilKegiatan />
        <Tulisan />
        <TentangKami />
      </main>
      <Footer />
    </div>
  );
}

export default App;