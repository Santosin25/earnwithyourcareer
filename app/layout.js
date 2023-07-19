import "./globals.css";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import Loading from "./loading";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Home | EarnWithYourCareer",
  description:
    "We are dedicated to helping you build a successful career while also exploring opportunities for passive income. Our goal is to provide you with tools, resoures, and support you need to thrive in both aspect of your life.",
  keywords: ["Earn With Your Career"],
  author: "Olajubu Oluwatosin",
  language: "en-US",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body>
        <Header />
        <Suspense fallback={<Loading />}>
          {children}
          <Analytics />
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
