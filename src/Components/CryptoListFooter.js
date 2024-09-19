export default function CryptoListFooter({
  sortList,
  setSortList,
  topResults,
  setTopResults,
  searchQuery,
}) {
  return (
    <div className=" flex flex-col gap-4 justify-center">
      <div className="flex justify-around">
        <button
          className={`border-2 px-5 py-1 rounded-md hover:bg-slate-300 transition-all ${
            searchQuery ? "disabled" : ""
          } ${!searchQuery && topResults === "10" ? "bg-slate-300" : ""}`}
          value="10"
          onClick={(e) => setTopResults(e.target.value)}
        >
          Top 10
        </button>
        <button
          className={`border-2 px-5 py-1 rounded-md hover:bg-slate-300 transition-all  ${
            searchQuery ? "disabled" : ""
          } ${!searchQuery && topResults === "50" ? "bg-slate-300" : ""}`}
          value="50"
          onClick={(e) => setTopResults(e.target.value)}
        >
          Top 50
        </button>
        <button
          className={`border-2 px-5 py-1 rounded-md hover:bg-slate-300 transition-all ${
            searchQuery ? "disabled" : ""
          } ${!searchQuery && topResults === "100" ? "bg-slate-300" : ""}`}
          value="100"
          onClick={(e) => setTopResults(e.target.value)}
        >
          Top 100
        </button>
        <button
          className={`border-2 px-5 py-1 rounded-md hover:bg-slate-300 transition-all ${
            searchQuery ? "disabled" : ""
          } ${!searchQuery && topResults === "500" ? "bg-slate-300" : ""}`}
          value="500"
          onClick={(e) => setTopResults(e.target.value)}
        >
          Top 500
        </button>
      </div>
      <h2 className="text-center">Sort Results By</h2>
      <div className="flex justify-around">
        <button
          value="price"
          className={`border-2 px-5 py-1 rounded-md hover:bg-slate-300 transition-all ${
            searchQuery ? "disabled" : ""
          } ${!searchQuery && sortList === "price" ? `bg-slate-300` : ``}`}
          onClick={(e) => setSortList(e.target.value)}
        >
          Price
        </button>
        <button
          value="supply"
          className={`border-2 px-5 py-1 rounded-md hover:bg-slate-300 transition-all ${
            searchQuery ? "disabled" : ""
          } ${!searchQuery && sortList === "supply" ? `bg-slate-300` : ``}`}
          onClick={(e) => setSortList(e.target.value)}
        >
          Supply
        </button>
        <button
          value="percentage"
          className={`border-2 px-5 py-1 rounded-md hover:bg-slate-300 transition-all ${
            searchQuery ? "disabled" : ""
          } ${!searchQuery && sortList === "percentage" ? `bg-slate-300` : ``}`}
          onClick={(e) => setSortList(e.target.value)}
        >
          % Change
        </button>
        <button
          value="rank"
          className={`border-2 px-5 py-1 rounded-md hover:bg-slate-300 transition-all ${
            searchQuery ? "disabled" : ""
          } ${!searchQuery && sortList === "rank" ? `bg-slate-300` : ``}`}
          onClick={(e) => setSortList(e.target.value)}
        >
          Rank
        </button>
      </div>
    </div>
  );
}
