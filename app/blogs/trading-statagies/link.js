import Link from "next/link";
import Image from "next/image";
import statagy from "./../../../public/make-money-online.jpg";

export default function LinkTradingStategies() {
  return (
    <div className="linkClass group">
      <Link href="/blogs/trading-statagies" target="_parent">
        <div className="container">
          <div className="">
            <Image
              src={statagy}
              alt="forex"
              width={100}
              height={100}
              className="linkImg"
            />
          </div>
          <div className="secoundContainer">
            <h1 className="linkH1">
              A Beginner&apos;s Guide to Forex Trading Strategies
            </h1>
            <p className=" text-sm">
              There are countless ways to profit off of trading Forex. Trading
              strategies help you organize those techniques into a coherent
              framework that you can follow. This way, you can continually
              monitor and optimize your Forex strategy.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
