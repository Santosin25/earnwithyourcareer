import LinkForex from "./../forex/link";
import LinkChoosingBroker from "./../choosingbroker/link";
import LinkTradingStategies from "./../trading-statagies/link";
import LinkHowtoTradeForex from "./../howto-trade-forex/link";

export default function BlogLinkerCareerForex() {
  return (
    <section className="blogLinkerRapper">
      <LinkForex />
      <LinkChoosingBroker />
      <LinkTradingStategies />
      <LinkHowtoTradeForex />
    </section>
  );
}
