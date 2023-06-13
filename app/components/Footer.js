import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="static bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
      <div className=" w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div>
          <ul className="text-gray-100 pt-4 flex flex-row items-center justify-center text-lg font-bold gap-3">
            <li>
              <Link
                className="hover:text-indigo-600"
                href="https://web.facebook.com/profile.php?id=100083802420253"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFacebook />
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-indigo-600"
                href="https://linkedin.com/company/lifehelper/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin />
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-indigo-600"
                href="https://youtube.com/playlist?list=PLw17loBT6C2vS0bTUH4-x-0OMKxH47ZaY"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsYoutube />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex pt-8 lg:pt-0 lg:gap-0 text-gray-50 font-medium flex-row items-center gap-5 justify-center text-left">
          <Link
            className="hover:text-indigo-600"
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy
          </Link>
          <Link
            className="hover:text-indigo-600"
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </Link>
          <Link
            className="hover:text-indigo-600"
            href="/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            About
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center w-full h-16">
            <span className="block mx-auto text-xs xs:text-sm text-center font-sm text-gray-50 md:text-md xl:text-lg">
              Copyright &copy;2023 EarnWithYourCareer All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
