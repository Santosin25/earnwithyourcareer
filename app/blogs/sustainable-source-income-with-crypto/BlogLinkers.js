import LinkProfessionalCryptoTrader from "./../professional-cryptotrader/link";
import LinkChoosingBroker from "./../choosingbroker/link";
import LinkTradingStategies from "./../trading-statagies/link";
import LinkHowtoTradeForex from "./../howto-trade-forex/link";

export default function BlogLinkerSustainableSourceWithCrypto() {
  return (
    <section className="blogLinkerRapper">
      <LinkProfessionalCryptoTrader />
      <LinkChoosingBroker />
      <LinkTradingStategies />
      <LinkHowtoTradeForex />
    </section>
  );
}
