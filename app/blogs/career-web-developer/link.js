import Link from "next/link";
import Image from "next/image";
import computer from "./../../../public/computer.jpeg";

export default function LinkCareerWebDevelopment() {
  return (
    <div className="linkClass group">
      <Link href="/blogs/career-web-developer" target="_parent">
        <div className="container">
          <div className="">
            <Image
              src={computer}
              alt="computer"
              width={100}
              height={100}
              className="linkImg"
            />
          </div>
          <div className="secoundContainer">
            <h1 className="linkH1">
              How to Launch Your Career as a Web Developer
            </h1>
            <p className=" text-sm">
              Web development is the process of creating websites and web
              applications. It involves a variety of tasks such as coding,
              designing, content creation, and server configuration. Web
              developers use a variety of programming languages and frameworks
              to create websites and web applications that are accessible to
              users on the internet.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
