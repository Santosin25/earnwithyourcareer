import LinkCareerForex from "./../career-forex/link";
import LinkCareerWebDevelopment from "./../career-web-developer/link";
import LinkWayToMakeMoneyWebDev from "./../way-to-make-money-web-developer/link";
import LinkUnlockPotentailEdtechPassiveIncome from "./../unlock-potential-edtech-passive-income/link";

export default function BlogLinkerEdt() {
  return (
    <section className="blogLinkerRapper">
      <LinkCareerForex />
      <LinkUnlockPotentailEdtechPassiveIncome />
      <LinkCareerWebDevelopment />
      <LinkWayToMakeMoneyWebDev />
    </section>
  );
}
