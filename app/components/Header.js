import Link from "next/link";

const Header = () => {
  return (
    <nav className="z-10 w-full   items-center justify-between font-mono text-sm ">
      <div className="fixed left-0 top-0  flex w-full justify-center border-b border-white bg-snow-white  pb-6 pt-8 backdrop-blur-2xl  dark:from-inherit lg:static lg:w-auto lg:border lg:p-4">
        <Link href="/" target="_parent" rel="noopener noreferrer">
          <code className="font-mono lg:font-xl font-bold max-w-5xl">
            EarnWithYourCareer.blog
          </code>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
