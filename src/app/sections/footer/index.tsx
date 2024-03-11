import Image from "next/image";
import PhoneIcon from "@/app/assets/icons/phone";
import EmailIcon from "@/app/assets/icons/email";
import HomeIcon from "@/app/assets/icons/home";
import Button from "../../components/atom/button";

const Footer = () => {
  return (
    <footer className="px-4 sm:px-[10%] pt-[10%] bg-gradient-to-br from-[#4195D5] from-0% via-[#27638a] via-50% to-[#133F5D] to-100%">
      <div className="flex sm:flex-row flex-col sm:space-x-[88px] items-center">
        <Image
          src={"/img-solution.png"}
          alt=""
          draggable={false}
          width={600}
          height={0}
          style={{ width: "20vw", height: "auto" }}
        />
        <div className="sm:w-1/2 space-y-8">
          <p className="text-white font-semibold text-lg sm:text-4xl sm:leading-[59px] sm:text-left text-center">
            Solusi Pembayaran untuk Kelancaran Cashflow Bisnis via Paper id
          </p>
          <Button
            variant="contained"
            label={<p>Daftar Gratis Sekarang</p>}
            className="py-4 px-12 w-full sm:w-fit"
          />
        </div>
      </div>

      <nav className="flex sm:flex-row flex-col border-t border-b mt-[10%] py-[21px] justify-between space-y-12 sm:space-y-0">
        <div className="flex flex-col space-y-[15px] sm:w-1/2">
          <Image src={"/paper-logo.svg"} width={157} height={56} alt="paper" />
          <div className="flex sm:flex-row flex-col sm:space-x-8 text-white text-sm">
            <div className="flex sm:flex-row flex-col space-y-6 sm:space-y-0 sm:space-x-7">
              <div className="flex-col space-y-2.5 sm:w-1/2">
                <p className="font-semibold">Hubungi Kami</p>
                <div className="flex space-x-2">
                  <PhoneIcon size={24} />
                  <div className="flex flex-col space-y-1">
                    <p>+62 821 1767 9137</p>
                    <p>+62 821 1767 9137</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <EmailIcon size={24} />
                  <p>support@paper.id</p>
                </div>
                <div className="flex space-x-2">
                  <HomeIcon size={24} />
                  <p>
                    Jl. Sunter Garden Raya
                    <br /> No.5D, RT.6/RW.12,
                    <br /> Sunter Agung, Tj. Priok, <br />
                    Kota Jkt Utara, DKI Jakarta <br />
                    14350
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-2.5">
                <p className="font-semibold">Jam Operasional</p>
                <div className="flex space-x-2">
                  <div className="flex flex-col space-y-2">
                    <p>Senin - Jumat</p>
                    <p>Sabtu & Libur Nasional</p>
                  </div>
                  <div className="flex flex-col space-y-2 flex-none">
                    <p>: 07.00 - 22.00 WIB</p>
                    <p>: 08.00 - 17.00 WIB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex text-sm sm:flex-row flex-col space-y-6 sm:space-y-0  text-white space-x-8">
          <div>
            <p className="font-semibold">Fitur Lainnya</p>
            <div className="flex space-x-8 pt-[10px]">
              <ul className="flex flex-col space-y-[10px]">
                <li>Order dan Penawaran</li>
                <li>Akuntansi Gratis</li>
                <li>Digital Payment</li>
                <li>Manajemen Stok</li>
                <li>Laporan Keungan</li>
                <li>One Click Share</li>
                <li>Template Invoice</li>
              </ul>
              <ul className="flex flex-col space-y-[10px]">
                <li>Order dan Penawaran</li>
                <li>Akuntansi Gratis</li>
                <li>Digital Payment</li>
                <li>Manajemen Stok</li>
                <li>Laporan Keungan</li>
                <li>One Click Share</li>
                <li>Template Invoice</li>
              </ul>
            </div>
          </div>
          <ul className="hidden sm:flex flex-col space-y-[10px]">
            <li className="font-semibold">Jual Beli</li>
            <li>Jasa</li>
            <li>F&B</li>
          </ul>
          <ul className="hidden sm:flex flex-col space-y-[10px]">
            <li className="font-semibold">Perusahaan</li>
            <li>Tentang Kami</li>
            <li>Cara Kerja</li>
            <li>Karir</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Help Center</li>
            <li>FAQ</li>
          </ul>
        </div>
      </nav>
      <div></div>
      <div
        className="flex text-center sm:text-left flex-col space-y-10 sm:space-y-0 sm:flex-row items-center
       sm:justify-between pt-7 pb-32"
      >
        <p className="text-white/60 text-sm">
          Copyright © 2023 Paper.id (PT Pakar Digital Global)
        </p>
        <Image src={"/sosmed.png"} width={145} height={25} alt="" />
        <div className="text-sm text-white flex justify-center sm:justify-start space-x-4">
          <p>Privacy Policy</p>
          <p>Terms & Condition</p>
          <p>Sitemap</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
