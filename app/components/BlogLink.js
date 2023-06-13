import LinkCareerEdutech from "./../blogs/career-edutech/link";
import LinkCareerForex from "./../blogs/career-forex/link";
import LinkCareerWebDevelopment from "./../blogs/career-web-developer/link";
import LinkWayToMakeMoneyWebDev from "./../blogs/way-to-make-money-web-developer/link";

export default function BlogLink() {
  return (
    <section className="blogLinkerRapper">
      <LinkCareerForex />
      <LinkCareerEdutech />
      <LinkCareerWebDevelopment />
      <LinkWayToMakeMoneyWebDev />
    </section>
  );
}
