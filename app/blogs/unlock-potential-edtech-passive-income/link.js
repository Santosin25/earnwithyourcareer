import Link from "next/link";
import Image from "next/image";
import career from "./../../../public/career.jpg";

export default function LinkUnlockPotentailEdtechPassiveIncome() {
  return (
    <div className="linkClass group">
      <Link
        href="/blogs/unlock-potentail-edtech-passive-income"
        target="_parent"
      >
        <div className="container">
          <div className="">
            <Image
              src={career}
              alt="career"
              width={100}
              height={100}
              className="linkImg"
            />
          </div>
          <div className="secoundContainer">
            <h1 className="linkH1">
              Unlock the Potential of Educational Technology to Generate Passive
              Income!
            </h1>
            <p className=" text-sm">
              Unlock the potential of educational technology to generate passive
              income! Learn how to use online courses, webinars, and other
              digital tools to create a steady stream of income without having
              to work for it. Discover the best strategies for creating and
              marketing your own educational products.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
