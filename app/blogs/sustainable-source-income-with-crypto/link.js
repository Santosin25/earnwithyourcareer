import Link from "next/link";
import Image from "next/image";
import crypto from "./../../../public/how_u_make_d_money.jpg";

export default function LinkSustainableSourceWithCrypto() {
  return (
    <div className="linkClass group">
      <Link
        href="/blogs/sustainable-source-income-with-crypto"
        target="_parent"
      >
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
              How to Create a Sustainable Source of Income with Crypto Trading
            </h1>
            <p className=" text-sm">
              Crypto trading is the process of buying and selling
              cryptocurrencies on an online exchange platform. It involves
              speculating on the price movements of digital currencies such as
              Bitcoin, Ethereum, Litecoin, and others. Crypto traders use
              technical analysis and charting tools to identify potential entry
              and exit points for their trades. They also use risk management
              strategies to limit their losses in volatile markets.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
