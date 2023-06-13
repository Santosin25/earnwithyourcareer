import Link from "next/link";
import Image from "next/image";
import forex from "./../../../public/forex.jpeg";

export default function LinkCareerForex() {
  return (
    <div className="linkClass group">
      <Link href="/blogs/career-forex" target="_parent">
        <div className="container">
          <div className="">
            <Image
              src={forex}
              alt="graduation"
              width={100}
              height={100}
              className="linkImg"
            />
          </div>
          <div className="secoundContainer">
            <h1 className="linkH1">Career in Forex Trading</h1>
            <p className=" text-sm">
              Are you interested in a career in Forex trading? Learn about the
              potential opportunities, risks, and rewards of this exciting
              field. Get tips on how to get started and what to expect from a
              career in Forex trading.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
