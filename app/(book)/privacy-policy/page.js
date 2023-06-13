export const metadata = {
  title: "Privacy Policy | EarnWithYourCareer",
  description:
    "This Privacy Policy describes how EarnWithYourCareer collects, uses, and shares information about you when you use our website and services. We are committed to protecting your privacy and providing a safe and secure user experience",
};

const siteName = "EarnWithYourCareer";

const PrivacyPolicy = () => {
  return (
    <div>
      <main className="mainElement">
        <section className="sectionElement">
          <article className="articleElement">
            <div className="allDivElement">
              <h1 className="firstBlueHeading1">Privacy Policy</h1>
              <p>
                This Privacy Policy describes how {siteName} collects, uses, and
                shares information about you when you use our website and
                services. We are committed to protecting your privacy and
                providing a safe and secure user experience.
              </p>
            </div>
            <div className="allDivElement">
              <h2 className="secoudBlueHeading2">Information We Collect</h2>
              <p>
                We collect information about you when you use our website or
                services. This includes:
              </p>
              <ul className="unOrderList">
                <li className="listElement">
                  Personal information such as your name, email address, phone
                  number, and other contact information
                </li>
                <li className="listElement">
                  Demographic information such as your age, gender, education
                  level
                </li>
                <li className="listElement">
                  Information about your career goals and interests
                </li>
                <li className="listElement">
                  Information about your job search activities
                </li>
                <li className="listElement">
                  Information about the jobs you have applied for or been
                  offered
                </li>
                <li className="listElement">
                  Information about the companies you have worked for or are
                  interested in working for
                </li>
                <li className="listElement">
                  Any other information that you provide to us through our
                  website or services.
                </li>
              </ul>
            </div>
            <div className="allDivElement">
              <h2 className="secoudBlueHeading2">
                How We Use Your Information
              </h2>
              <p>
                We use the information we collect to provide our services to
                you. This includes:
              </p>
              <ul className="unOrderList">
                <li className="listElement">
                  Providing personalized job recommendations based on your
                  career goals and interests
                </li>
                <li className="listElement">
                  Providing personalized job search advice based on your job
                  search activities
                </li>
                <li className="listElement">
                  Providing personalized company recommendations based on the
                  jobs you have applied for or been offered
                </li>
              </ul>
            </div>
            <div className="allDivElement">
              <h2 className="secoudBlueHeading2">
                How We Share Your Information
              </h2>
              <p>
                We may share your personal information with third parties in
                order to provide our services to you. This includes:
              </p>
              <ul className="unOrderList">
                <li className="listElement">
                  Sharing with employers who are looking for candidates with
                  skills that match yours
                </li>
                <li className="listElement">
                  Sharing with recruiters who are looking for candidates with
                  skills that match yours
                </li>
              </ul>
            </div>
            <div className="allDivElement pb-10">
              <h2 className="secoudBlueHeading2">
                Security of Your Information
              </h2>
              <p>
                We take reasonable measures to protect the security of your
                personal information. However, no security system is
                impenetrable and we cannot guarantee the security of our systems
                100%. We also cannot guarantee that the personal information we
                collect will never be disclosed in a manner inconsistent with
                this Privacy Policy (for example, as a result of unauthorized
                acts by third parties).
              </p>
              <br />
              <h2 className="secoudBlueHeading2">
                Changes to Our Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time in order to
                reflect changes in our practices or applicable laws. If we make
                any material changes we will notify you by email (sent to the
                e-mail address specified in your account) or by means of a
                notice on this Site prior to the change becoming effective. We
                encourage you to periodically review this page for the latest
                information on our privacy practices.
              </p>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
