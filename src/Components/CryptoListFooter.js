export default function CryptoListFooter({ sortList, setSortList }) {
  return (
    <div className=" flex flex-col gap-2 p-2 justify-center">
      <div className="flex justify-around">
        <button
          className={`border-2 px-5 rounded-md hover:bg-slate-300 transition-all`}
          value="10"
        >
          Top 10
        </button>
        <button
          className={`border-2 px-5 rounded-md hover:bg-slate-300 transition-all`}
          value="50"
        >
          Top 50
        </button>
        <button
          className={`border-2 px-5 rounded-md hover:bg-slate-300 transition-all`}
          value="100"
        >
          Top 100
        </button>
        <button
          className={`border-2 px-5 rounded-md hover:bg-slate-300 transition-all`}
          value="1000"
        >
          Top 1000
        </button>
      </div>
      <h2 className="text-center">Sort Results By</h2>
      <div className="flex justify-around">
        <button
          value="price"
          className={`border-2 px-5 rounded-md hover:bg-slate-300 transition-all ${
            sortList === "price" ? `bg-slate-300` : ``
          }`}
          onClick={(e) => setSortList(e.target.value)}
        >
          Price
        </button>
        <button
          value="supply"
          className={`border-2 px-5 rounded-md hover:bg-slate-300 transition-all ${
            sortList === "supply" ? `bg-slate-300` : ``
          }`}
          onClick={(e) => setSortList(e.target.value)}
        >
          Supply
        </button>
        <button
          value="percentage"
          className={`border-2 px-5 rounded-md hover:bg-slate-300 transition-all ${
            sortList === "percentage" ? `bg-slate-300` : ``
          }`}
          onClick={(e) => setSortList(e.target.value)}
        >
          % Change
        </button>
        <button
          value="rank"
          className={`border-2 px-5 rounded-md hover:bg-slate-300 transition-all ${
            sortList === "rank" ? `bg-slate-300` : ``
          }`}
          onClick={(e) => setSortList(e.target.value)}
        >
          Rank
        </button>
      </div>
    </div>
  );
}
