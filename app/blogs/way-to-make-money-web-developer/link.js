import Link from "next/link";
import Image from "next/image";
import quote from "./../../../public/live-quote.jpg";

export default function LinkWayToMakeMoneyWebDev() {
  return (
    <div className="linkClass group">
      <Link href="/blogs/way-to-make-money-web-developer" target="_parent">
        <div className="container">
          <div className="">
            <Image
              src={quote}
              alt="quote"
              width={100}
              height={100}
              className="linkImg"
            />
          </div>
          <div className="secoundContainer">
            <h1 className="linkH1">
              30 Creative Ways to Make Money from Home as a Web Developer
            </h1>
            <p className="text-sm">
              This article provides 30 creative ways for web developers to make
              money from home, such as creating websites, developing apps, and
              offering freelance services. It also covers topics like monetizing
              a blog, selling digital products, and more.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
