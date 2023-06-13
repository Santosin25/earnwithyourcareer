import Link from "next/link";
import Image from "next/image";
import forexMeta from "./../../../public/meta-forex.jpg";

export default function LinkHowtoTradeForex() {
  return (
    <div className="linkClass group">
      <Link href="/blogs/howto-trade-forex" target="_parent">
        <div className="container">
          <div className="">
            <Image
              src={forexMeta}
              alt="forexMeta"
              width={100}
              height={100}
              className="linkImg"
            />
          </div>
          <div className="secoundContainer">
            <h1 className="linkH1">How To Actually Trade Forex</h1>
            <p className=" text-sm">
              This is a good question and you will get a variety of answers if
              you were to ask around in the trading community. Firstly, I would
              strongly suggest that you choose one of the bigger well known
              brokers. Trust me on this!.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
