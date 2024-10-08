import { useEffect, useState } from "react";
import CryptoInfo from "./CryptoInfo";
import CryptoListFooter from "./CryptoListFooter";
import SearchBar from "./ListSearch";
import SelectedInfo from "./SelectedInfo";

export default function CryptoList({ setSelectedCoin, selectedCoin }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [cryptoList, setCryptoList] = useState([]);
  const [sortList, setSortList] = useState("rank");
  const [topResults, setTopResults] = useState("10");

  useEffect(function () {
    async function getData() {
      const res = await fetch(`https://api.coinpaprika.com/v1/tickers`);
      const data = await res.json();
      setCryptoList(data);
    }
    getData();
  }, []);

  const filteredList = cryptoList.filter((coin) =>
    coin.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedList = [...cryptoList].sort((a, b) => {
    if (sortList === "price") {
      return b.quotes.USD.price - a.quotes.USD.price;
    } else if (sortList === "supply") {
      return b.total_supply - a.total_supply;
    } else if (sortList === "percentage") {
      return b.quotes.USD.percent_change_24h - a.quotes.USD.percent_change_24h;
    } else if (sortList === "rank") {
      return a.rank - b.rank;
    }
    return 0;
  });

  const topList = sortedList.slice(0, topResults);

  return (
    <div className="crypto-list rounded-md bg-slate-300 bg-opacity-70 p-4">
      <div className=" p-2 max-h-96 w-[600px] overflow-y-scroll">
        <SearchBar setSearchQuery={setSearchQuery} />
        {searchQuery ? (
          <ul className="scroll-hide">
            {filteredList.map((coin) => (
              <li key={coin.id} onClick={(e) => setSelectedCoin(coin.symbol)}>
                <CryptoInfo
                  name={coin.name}
                  price={Number(coin.quotes.USD.price)}
                  symbol={coin.symbol}
                  percentageChange={coin.quotes.USD.percent_change_24h}
                />
              </li>
            ))}
          </ul>
        ) : (
          <ul className="scroll-hide">
            {topList.map((coin) => (
              <li key={coin.id} onClick={(e) => setSelectedCoin(coin.symbol)}>
                <CryptoInfo
                  name={coin.name}
                  price={Number(coin.quotes.USD.price)}
                  symbol={coin.symbol}
                  percentageChange={coin.quotes.USD.percent_change_24h}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="pt-4">
        <CryptoListFooter
          sortList={sortList}
          setSortList={setSortList}
          topResults={topResults}
          setTopResults={setTopResults}
          searchQuery={searchQuery}
        />
      </div>
      <div className="pt-4">
        <SelectedInfo selectedCoin={selectedCoin} />
      </div>
    </div>
  );
}
