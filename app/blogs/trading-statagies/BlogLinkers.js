import LinkForex from "./../forex/link";
import LinkChoosingBroker from "./../choosingbroker/link";
import LinkHowtoTradeForex from "./../howto-trade-forex/link";
import LinkProfessionalCryptoTrader from "./../professional-cryptotrader/link";

export default function BlogLinkerTradingStategies() {
  return (
    <section className="blogLinkerRapper ">
      <LinkProfessionalCryptoTrader />
      <LinkForex />
      <LinkChoosingBroker />
      <LinkHowtoTradeForex />
    </section>
  );
}
