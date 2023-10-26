import { CardPrimary, CardSecondary } from "@/components/Card";
import { Input, Button, Chip, Divider, Image } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center w-full max-w-5xl gap-28">
        <div className="flex flex-col justify-center items-center gap-2">
          <span className="flex w-full max-w-sm aspect-square border-4 border-emerald-700 rounded-full" />
          <h1 className="my-4 text-2xl">A currency</h1>
          <p className="text-5xl text-center my-5 font-bold">
            where coins are mined by planting trees
          </p>
          <div className="flex flex-col justify-center items-center gap-2">
            <Chip>BUY FORESTCOIN</Chip>
            <Divider className="my-4" />
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 items-center ">
              <Input type="email" label="Amount" color="success" />
              <Button color="success">BUY</Button>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-black text-6xl font-bold text-center my-9">
            Bitcoin is great, but it uses more power than Argentina!
          </h1>
          <p className="text-center my-4">
            Bitcoin and other currencies depend on computer power to solve
            complex mathematical equations to mine coins. This takes enormous
            amounts of energy, which creates pollution.
          </p>
          <div className="gap-2 grid grid-cols-2 sm:grid-cols-3">
            {[
              { text: "Bitcoin consumes enourmous amounts of energy" },
              { text: "Computers grind away solving puzzles to mine bitcoin" },
              { text: "This creates pollution and carbon emissions" },
            ].map((content) => (
              <CardSecondary key={12} text={content.text} />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-black text-6xl font-bold text-center my-9">
            How does Forestcoin resolve this problem?
          </h1>
          <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
            {[1, 2, 3, 4].map(() => (
              <Image
                alt="Woman listing to music"
                className="object-cover rounded-full aspect-square"
                height={400}
                src="/hero-card-complete.jpeg"
                width={400}
                key={1}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
