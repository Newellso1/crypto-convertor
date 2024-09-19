import CryptoInfo from "./CryptoInfo";

export default function ResultsList({ list, setSelectedCoin }) {
  <ul className="scroll-hide">
    {list.map((coin) => (
      <li key={coin.id} onClick={(e) => setSelectedCoin(coin.symbol)}>
        <CryptoInfo
          name={coin.name}
          price={Number(coin.quotes.USD.price)}
          symbol={coin.symbol}
          percentageChange={coin.quotes.USD.percent_change_24h}
        />
      </li>
    ))}
  </ul>;
}
