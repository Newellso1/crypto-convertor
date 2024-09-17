import { useState } from "react";
import CryptoList from "./Components/CryptoList";
import Header from "./Components/Header";
import SelectedInfo from "./Components/SelectedInfo";

function App() {
  const [selectedCoin, setSelectedCoin] = useState("BTC");

  return (
    <div className="App flex flex-col gap-5 bg-gradient-to-tr from-slate-900 to-slate-700 min-h-dvh">
      <Header />
      <div className="w-full flex justify-center">
        <CryptoList setSelectedCoin={setSelectedCoin} />
      </div>
      <div className="w-full flex justify-center">
        <SelectedInfo selectedCoin={selectedCoin} />
      </div>
    </div>
  );
}

export default App;
