import Link from "next/link";
import Image from "next/image";
import forex from "./../../../public/forex.jpeg";

export default function LinkForex() {
  return (
    <div className="linkClass group">
      <Link href="/blogs/forex" target="_parent">
        <div className="container">
          <div className="">
            <Image
              src={forex}
              alt="forex"
              width={100}
              height={100}
              className="linkImg"
            />
          </div>
          <div className="secoundContainer">
            <h1 className="linkH1">What Is Forex - A Beginner Guild To FX</h1>
            <p className=" text-sm">
              Forex Market or FX is the process of exchanging one currency into
              another for commercial purpose. It&apos;s also the market for
              exchanging global currency. For example 1 Dollar to a Euro.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
