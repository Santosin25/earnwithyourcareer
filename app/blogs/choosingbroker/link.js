import Link from "next/link";
import Image from "next/image";
import brokerchoosing from "./../../../public/african-man-fx.jpg";

export default function LinkChoosingBroker() {
  return (
    <div className="linkClass group">
      <Link href="/blogs/choosingbroker" target="_parent">
        <div className="container">
          <div className="">
            <Image
              src={brokerchoosing}
              alt="brokerchoosing"
              width={100}
              height={100}
              className="linkImg"
            />
          </div>
          <div className="secoundContainer">
            <h1 className="linkH1">How To Choose a Broker</h1>
            <p className=" text-sm">
              This is a good question and you will get a variety of answers if
              you were to ask around in the trading community. Firstly, I would
              strongly suggest that you choose one of the bigger well known
              brokers. Trust me on this!
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
