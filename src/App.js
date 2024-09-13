import CryptoList from "./Components/CryptoList";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App flex flex-col gap-5">
      <Header />
      <div className="w-full flex justify-center">
        <CryptoList />
      </div>
    </div>
  );
}

export default App;
