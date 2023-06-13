import LinkForex from "./../forex/link";
import LinkChoosingBroker from "./../choosingbroker/link";
import LinkHowtoTradeForex from "./../howto-trade-forex/link";
import LinkSustainableSourceWithCrypto from "./../sustainable-source-income-with-crypto/link";

export default function BlogLinkerProfessionalCryptoTrader() {
  return (
    <section className="blogLinkerRapper">
      <LinkSustainableSourceWithCrypto />
      <LinkForex />
      <LinkChoosingBroker />
      <LinkHowtoTradeForex />
    </section>
  );
}
