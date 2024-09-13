import { useEffect, useState } from "react";
import CryptoInfo from "./CryptoInfo";
import CryptoListFooter from "./CryptoListFooter";

export default function CryptoList() {
  const [cryptoList, setCryptoList] = useState([]);
  const [sortList, setSortList] = useState("rank");

  useEffect(function () {
    async function getData() {
      const res = await fetch(`https://api.coinpaprika.com/v1/tickers`);
      const data = await res.json();
      setCryptoList(data);
    }
    getData();
  }, []);

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

  const first50 = sortedList.slice(0, 50);

  return (
    <div className="border-2">
      <div className=" p-2 max-h-96 w-[600px] overflow-y-scroll">
        <h1 className="text-center">CryptoList</h1>
        <ul>
          {first50.map((coin) => (
            <li key={coin.id}>
              <CryptoInfo
                name={coin.name}
                price={coin.quotes.USD.price}
                symbol={coin.symbol}
                percentageChange={coin.quotes.USD.percent_change_24h}
              />
            </li>
          ))}
        </ul>
      </div>
      <CryptoListFooter sortList={sortList} setSortList={setSortList} />
    </div>
  );
}
