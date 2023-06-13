import LinkChoosingBroker from "./../choosingbroker/link";
import LinkTradingStategies from "./../trading-statagies/link";
import LinkHowtoTradeForex from "./../howto-trade-forex/link";
import LinkCareerForex from "./../career-forex/link";

export default function BlogLinkerForex() {
  return (
    <section className="blogLinkerRapper">
      <LinkCareerForex />
      <LinkChoosingBroker />
      <LinkTradingStategies />
      <LinkHowtoTradeForex />
    </section>
  );
}
