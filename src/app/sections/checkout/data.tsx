export const initial = [
  {
    title: "Tokopedia",
    contents: [
      {
        isSelected: false,
        imgSrc:
          "https://storage.googleapis.com/clevertap-assets/landing-page/partner/tokopedia.png",
        name: "Tokopedia",
        child: (
          <div className="flex transition-all text-sm space-x-4 pt-2">
            <div className="flex flex-col">
              <p>Saldo</p>
              <p className="font-semibold">Rp 6.100.000</p>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    title: "Bank",
    contents: [
      {
        isSelected: false,
        imgSrc:
          "https://storage.googleapis.com/clevertap-assets/landing-page/partner/bca.png",
        name: "BCA VA",
      },
    ],
  },
  {
    title: "Paper Usaha",
    contents: [
      {
        isSelected: false,
        imgSrc:
          "https://storage.googleapis.com/clevertap-assets/landing-page/partner/koinworks.svg",
        name: "KoinWorks",
        child: (
          <div className="flex transition-all text-sm space-x-4 pt-4">
            <div className="flex flex-col">
              <p>Limit</p>
              <p className="font-semibold">Rp 8.000.000</p>
            </div>
            <div className="flex flex-col">
              <p>Fee</p>
              <p className="font-semibold">1.1%</p>
            </div>
            <div className="flex flex-col">
              <p>Tenor</p>
              <p className="font-semibold">30 Hari</p>
            </div>
          </div>
        ),
      },
      {
        isSelected: false,
        imgSrc:
          "https://storage.googleapis.com/clevertap-assets/landing-page/partner/investree.png",
        name: "Investree",
        child: (
          <div className="flex transition-all text-sm space-x-4 pt-4">
            <div className="flex flex-col">
              <p>Limit</p>
              <p className="font-semibold">Rp 8.000.000</p>
            </div>
            <div className="flex flex-col">
              <p>Fee</p>
              <p className="font-semibold">1.1%</p>
            </div>
            <div className="flex flex-col">
              <p>Tenor</p>
              <p className="font-semibold">30 Hari</p>
            </div>
          </div>
        ),
      },
    ],
  },
];
