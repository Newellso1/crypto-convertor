import { useEffect, useState } from "react";

export default function SelectedInfo({ selectedCoin }) {
  const [showInfo, setShowInfo] = useState({});

  useEffect(
    function () {
      async function getInfo() {
        const res = await fetch(
          `https://data-api.cryptocompare.com/asset/v1/metadata?asset=${selectedCoin}&asset_lookup_priority=SYMBOL&quote_asset=USD&api_key=b694871bb38a824399f940e2b8c81b7846f627cc7202730477a73027a9ff55b5`
        );
        const data = await res.json();
        setShowInfo(data);
      }
      getInfo();
    },
    [selectedCoin]
  );

  return (
    <div className="bg-slate-300 bg-opacity-70 rounded-md text-center w-[600px] flex flex-col items-center">
      <h2>{showInfo.Data.NAME}</h2>
      <img
        src={showInfo.Data.LOGO_URL}
        alt={`Logo for ${showInfo.Data.NAME}`}
        className="w-20"
      />
      <p>
        {showInfo.Data.ASSET_DESCRIPTION_SNIPPET
          ? showInfo.Data.ASSET_DESCRIPTION_SNIPPET
          : `Unfortunately there is no description available for the ${showInfo.Data.NAME} coin `}
      </p>
    </div>
  );
}
