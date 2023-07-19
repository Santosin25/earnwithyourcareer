import Link from "next/link";
import Image from "next/image";
import graduation from "./../../../public/graduation.jpeg";

export default function LinkCareerEdutech() {
  return (
    <div className="linkClass group">
      <Link href="/blogs/career-edutech" target="_parent">
        <div className="container">
          <div className="imageDiv">
            <Image
              src={graduation}
              alt="graduation"
              width={100}
              height={100}
              className="linkImg"
            />
          </div>
          <div className="secoundContainer">
            <h1 className="linkH1">
              Unlock Your Potential: Exploring the Exciting World of a Career in
              Educational Technology
            </h1>
            <p className=" text-sm">
              This blog post explores the exciting career opportunities in
              educational technology. Learn about the skills and qualifications
              needed to become an educational technologist, the job outlook for
              this field, and how to get started in this growing industry.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
