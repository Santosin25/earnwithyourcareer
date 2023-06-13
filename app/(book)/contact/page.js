import Mycontact from "./MyContact";
const siteName = "EarnWithYourCareer";

export const metadata = {
  title: "Contact | EarnWithYourCareer",
  description:
    "We are here to help you with any questions or concerns you may have about our services. Please fill out the form below and we will get back to you as soon as possible.",
};

export default function Contact() {
  return (
    <div>
      <main className="mainElement bg-gray-800  text-gray-50">
        <section className="sectionElement">
          <article className="articleElement">
            <div className="allDivElement">
              <h1 className="font-extrabold text-center py-10 pb-3 xl:text-4xl text-3xl text-gray-100">
                Contract Page
              </h1>
              <h6 className="text-center">
                Welcome to the {siteName} Contact Page!
              </h6>
              <p className="text-center max-w-lg mx-auto">
                We are here to help you with any questions or concerns you may
                have about our services. Please fill out the form below and we
                will get back to you as soon as possible.
              </p>
            </div>
            <div>
              <Mycontact />
            </div>
            <p className="pb-10 text-center">
              Thank you for contacting us! We look forward to hearing from you.
            </p>
          </article>
        </section>
      </main>
    </div>
  );
}
