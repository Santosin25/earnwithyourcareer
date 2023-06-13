import LinkForex from "./../forex/link";
import LinkChoosingBroker from "./../choosingbroker/link";
import LinkTradingStategies from "./../trading-statagies/link";
import LinkHowtoTradeForex from "./../howto-trade-forex/link";
import LinkCareerForex from "./../career-forex/link";

export default function BlogLinkerHowtoTradeFx() {
  return (
    <section className="blogLinkerRapper">
      <LinkCareerForex />
      <LinkForex />
      <LinkChoosingBroker />
      <LinkTradingStategies />
    </section>
  );
}
