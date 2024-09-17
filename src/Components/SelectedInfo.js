import { useEffect, useState } from "react";
import Loading from "./Loading";

export default function SelectedInfo({ selectedCoin }) {
  const [showInfo, setShowInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function getInfo() {
        setIsLoading(true);
        const res = await fetch(
          `https://data-api.cryptocompare.com/asset/v1/metadata?asset=${selectedCoin}&asset_lookup_priority=SYMBOL&quote_asset=USD&api_key=b694871bb38a824399f940e2b8c81b7846f627cc7202730477a73027a9ff55b5`
        );
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);

        const data = await res.json();
        setShowInfo(data);
      }
      getInfo();
    },
    [selectedCoin]
  );

  if (!showInfo || !setShowInfo) {
    return <div>Information is Loading</div>;
  }
  return (
    <div className="crypto-list bg-slate-300 bg-opacity-70 rounded-md text-center w-[600px] flex flex-col items-center gap-2 p-4 transition-all">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {" "}
          <h2 className="header text-3xl">{showInfo.Data.NAME}</h2>
          <img
            src={showInfo.Data.LOGO_URL}
            alt={`Logo for ${showInfo.Data.NAME}`}
            className="w-20 rounded-lg"
          />
          <p>
            {showInfo.Data.ASSET_DESCRIPTION_SNIPPET
              ? showInfo.Data.ASSET_DESCRIPTION_SNIPPET
              : `Unfortunately there is no description available for the ${showInfo.Data.NAME} coin `}
          </p>{" "}
        </>
      )}
    </div>
  );
}
