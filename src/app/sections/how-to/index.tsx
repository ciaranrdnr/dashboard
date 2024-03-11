"use client";
import { useState } from "react";
import Steps from "../../components/steps";
import Slideshow from "../../components/slideshow";

const HowToSection = () => {
  const contents = {
    desc: [
      "Isi data diri dan unggah dokumen legal Anda (SIUP, Akta Perusahaan, dll) pada halaman Pendaftaran.",
      "Dapatkan persetujuan penawaran dari berbagai macam lembaga keuangan penyedia pembayaran.",
      "Tanda tangan dokumen secara digital.",
      "Selesai! Anda dapat langsung melakukan transaksi dengan Paper Usaha.",
    ],
    imgSrc: [
      "https://paper-sepia.vercel.app/_next/image?url=%2Fimg-how-to-1.png&w=1200&q=100",
      "https://paper-sepia.vercel.app/_next/image?url=%2Fimg-how-to-2.png&w=1200&q=100",
      "https://paper-sepia.vercel.app/_next/image?url=%2Fimg-how-to-3.png&w=1200&q=100",
      "https://paper-sepia.vercel.app/_next/image?url=%2Fimg-how-to-4.png&w=1200&q=100",
    ],
  };
  const [selected, setSelected] = useState(0);
  return (
    <section className="how-to pt-[54px] pb-[60px]">
      <h2 className="text-navy text-3xl sm:text-5xl text-center font-semibold">
        Proses Pendaftaran SmartCart Pay Later
      </h2>
      <div className="flex flex-col sm:flex-row sm:space-x-24 h-full items-center">
        <Steps
          contents={contents.desc}
          selected={selected}
          onChange={(e: any) => {
            setSelected(e);
          }}
          className="w-full px-4 sm:w-1/2 sm:pl-[10%] pt-[10%]"
        />
        <Slideshow urls={contents.imgSrc} active={selected} />
      </div>
    </section>
  );
};
export default HowToSection;
