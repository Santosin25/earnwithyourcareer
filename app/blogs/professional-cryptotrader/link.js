import Link from "next/link";
import Image from "next/image";
import crypto from "./../../../public/crypto-trade.jpg";

export default function LinkProfessionalCryptoTrader() {
  return (
    <div className="linkClass group">
      <Link href="/blogs/professional-cryptotrader" target="_parent">
        <div className="container">
          <div className="">
            <Image
              src={crypto}
              alt="crypto"
              width={100}
              height={100}
              className="linkImg"
            />
          </div>
          <div className="secoundContainer">
            <h1 className="linkH1">
              The Ultimate Guide to Becoming a Professional Crypto Trader
            </h1>
            <p className=" text-sm">
              Cryptocurrency trading is becoming increasingly popular as more
              people become aware of the potential for making money in this
              market. With the rise of Bitcoin and other digital currencies,
              many people are looking to get involved in the world of crypto
              trading. However, it can be difficult to know where to start and
              how to become a successful trader. This guide will provide you
              with all the information you need to become a professional crypto
              trader.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
