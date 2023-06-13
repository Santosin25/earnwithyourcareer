import LinkForex from "./../forex/link";
import LinkTradingStategies from "./../trading-statagies/link";
import LinkHowtoTradeForex from "./../howto-trade-forex/link";
import LinkCareerForex from "./../career-forex/link";

export default function BlogLinkerChoiceBorker() {
  return (
    <section className="blogLinkerRapper">
      <LinkCareerForex />
      <LinkForex />
      <LinkTradingStategies />
      <LinkHowtoTradeForex />
    </section>
  );
}
