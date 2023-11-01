import { CardSecondary } from "@/components/Card";
import { Input, Button, Chip, Divider } from "@nextui-org/react";
import { Poppins } from "next/font/google";

const poppinsExtrabold = Poppins({ weight: "900", preload: false });
export default function Home() {
  const problemsData = [
    {
      heading: "Plant a tree",
      textContent: "CarbonCoin is created by a person who planting a tree",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="m20 18-4-5h3l-4-5h2l-5-6-5 6h2l-4 5h3l-4 5h7v4h2v-4z"></path>
        </svg>
      ),
    },
    {
      heading: "Take Photos",
      textContent:
        "Anyone around the world can plant a tree and take before and after photos with the CarbonCoin app",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M20 3H7c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h6c1.103 0 2-.897 2-2h8c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM9.997 19H4V9h6l-.003 10zm10-2H12V9c0-1.103-.897-2-2-2H7V5h13l-.003 12z"></path>
        </svg>
      ),
    },
    {
      heading: "Recieve CarbonCoin",
      textContent:
        "Other CarbonCoin users verify the planting (via photos & other data in their app) and the CarbonCoin is minted",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M20 7V5c0-1.103-.897-2-2-2H5C3.346 3 2 4.346 2 6v12c0 2.201 1.794 3 3 3h15c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zm-2 9h-2v-4h2v4zM5 7a1.001 1.001 0 0 1 0-2h13v2H5z"></path>
        </svg>
      ),
    },
    {
      heading: "Sell or Spend",
      textContent:
        "CarbonCoin can then be spent at participating merchants or sold at exchangeforest.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="70"
          height="70"
          fill="white"
        >
          <path d="M6.758 8.758 5.344 7.344a8.048 8.048 0 0 0-1.841 2.859l1.873.701a6.048 6.048 0 0 1 1.382-2.146zM19 12.999a7.935 7.935 0 0 0-2.344-5.655A7.917 7.917 0 0 0 12 5.069V2L7 6l5 4V7.089a5.944 5.944 0 0 1 3.242 1.669A5.956 5.956 0 0 1 17 13v.002c0 .33-.033.655-.086.977-.007.043-.011.088-.019.131a6.053 6.053 0 0 1-1.138 2.536c-.16.209-.331.412-.516.597a5.954 5.954 0 0 1-.728.613 5.906 5.906 0 0 1-2.277 1.015c-.142.03-.285.05-.43.069-.062.009-.122.021-.184.027a6.104 6.104 0 0 1-1.898-.103L9.3 20.819a8.087 8.087 0 0 0 2.534.136c.069-.007.138-.021.207-.03.205-.026.409-.056.61-.098l.053-.009-.001-.005a7.877 7.877 0 0 0 2.136-.795l.001.001.028-.019a7.906 7.906 0 0 0 1.01-.67c.27-.209.532-.43.777-.675.248-.247.47-.513.681-.785.021-.028.049-.053.07-.081l-.006-.004a7.899 7.899 0 0 0 1.093-1.997l.008.003c.029-.078.05-.158.076-.237.037-.11.075-.221.107-.333.04-.14.073-.281.105-.423.022-.099.048-.195.066-.295.032-.171.056-.344.076-.516.01-.076.023-.15.03-.227.023-.249.037-.5.037-.753.002-.002.002-.004.002-.008zM6.197 16.597l-1.6 1.201a8.045 8.045 0 0 0 2.569 2.225l.961-1.754a6.018 6.018 0 0 1-1.93-1.672zM5 13c0-.145.005-.287.015-.429l-1.994-.143a7.977 7.977 0 0 0 .483 3.372l1.873-.701A5.975 5.975 0 0 1 5 13z"></path>
        </svg>
      ),
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col items-center w-full gap-28">
        <div className="flex flex-col justify-center items-center gap-2 bg-[url('/forest-trees2.jpg')] bg-cover bg-gradient-to-r- from-cyan-500 to-blue-500 to-transparent- w-full max-w-5xl- py-24 text-black/80">
          <span className="w-full sm:max-w-sm max-w-xs aspect-square border-4 border-emerald-700 rounded-full grid place-items-center">
            <p
              className={`text-emerald-900 font-bold sm:text-4xl text-2xl ${poppinsExtrabold.className}`}
            >
              CARBONCOIN
            </p>
          </span>
          <h1 className="my-4 text-2xl">A currency</h1>
          <p className="sm:text-5xl text-2xl text-center my-5 font-bold">
            where coins are mined by planting trees
          </p>
          <div className="flex flex-col justify-center items-center gap-2">
            <Chip>BUY CARBONCOIN</Chip>
            <Divider className="my-4" />
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 sm:items-center justify-center">
              <Input type="email" label="Amount" color="success" />
              <Button color="success">BUY</Button>
            </div>
          </div>
        </div>
        <div className="max-w-5xl p-4">
          <h1 className="text-black sm:text-6xl font-bold text-center my-9 text-4xl">
            Bitcoin is great, but it uses more power than Argentina!
          </h1>
          <p className="text-center my-4 sm:text-base text-sm">
            Bitcoin and other currencies depend on computer power to solve
            complex mathematical equations to mine coins. This takes enormous
            amounts of energy, which creates pollution.
          </p>
          <div className="gap-2 grid grid-cols-1 sm:grid-cols-3">
            {[
              {
                text: "Bitcoin consumes enourmous amounts of energy",
                img: "/polution.jpg",
              },
              {
                text: "Computers grind away solving puzzles to mine bitcoin",
                img: "/programming.jpg",
              },
              {
                text: "This creates pollution and carbon emissions",
                img: "/oil-rig.jpg",
              },
            ].map((content) => (
              <CardSecondary key={12} text={content.text} img={content.img} />
            ))}
          </div>
        </div>
        <div className="p-2">
          <h1 className="text-black sm:text-6xl text-2xl font-bold text-center my-9">
            How does CarbonCoin resolve this problem?
          </h1>
          <div className="grid grid-cols-2- sm:grid-cols-4 sm:gap-4">
            {problemsData.map((card, index) => (
              <div
                className="flex flex-col sm:flex-row items-center"
                key={card.heading}
              >
                <div className="flex flex-col items-center">
                  <span className="bg-emerald-500 rounded-full aspect-square grid place-items-center max-w-[150px] w-full">
                    {card.icon}
                  </span>
                  <p className="text-center text-emerald-800 font-bold mt-2 text-sm sm:text-base">
                    {card.heading}
                  </p>
                  <p className="text-center text-xs sm:text-base">
                    {card.textContent}
                  </p>
                </div>
                {index !== problemsData.length - 1 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    className="sm:hidden block"
                  >
                    <path d="M18 12h-5V6h-2v6H6l6 7z"></path>
                  </svg>
                )}
                {index !== problemsData.length - 1 && (
                  <div className="h-full pt-16 hidden sm:block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                    >
                      <path d="m19 12-7-6v5H6v2h6v5z"></path>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="bg-emerald-700 w-full flex flex-col items-center p-4 sm:py-9">
        <h1 className="sm:text-2xl text-gray-50">Stay Up to date</h1>
        <div className="flex gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            className="cursor-pointer"
            fill="white"
          >
            <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path>
            <circle cx="11.994" cy="11.979" r="3.003"></circle>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            className="cursor-pointer"
            fill="white"
          >
            <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            className="cursor-pointer"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></path>
          </svg>
        </div>
      </section>
    </main>
  );
}
