import { useEffect, useState } from "react";
import Loading from "./Loading";
import CryptoChart from "./CryptoChart";
import { RedditLogo, DiscordLogo, Desktop } from "@phosphor-icons/react";

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
          <div className="flex w-full justify-between items-center px-4">
            <div>
              <h2 className="header text-3xl">{showInfo.Data.NAME}</h2>
            </div>
            <div className="flex gap-2">
              <a
                href={showInfo.Data.WEBSITE_URL}
                target="blank"
                className={`${showInfo.Data.WEBSITE_URL ? "" : "disabled"}`}
              >
                <Desktop
                  size={30}
                  className="hover:text-blue-500 transition-all"
                />
              </a>
              <a
                href={
                  showInfo.Data.DISCORD_SERVERS
                    ? showInfo.Data.DISCORD_SERVERS[0].URL
                    : ""
                }
                target="blank"
                className={`${showInfo.Data.DISCORD_SERVERS ? "" : "disabled"}`}
              >
                <DiscordLogo
                  size={30}
                  className="hover:text-indigo-700 transition-all"
                />
              </a>
              <a
                href={
                  showInfo.Data.SUBREDDITS
                    ? showInfo.Data.SUBREDDITS[0].URL
                    : ""
                }
                target="blank"
                className={`${showInfo.Data.SUBREDDITS ? "" : "disabled"}`}
              >
                <RedditLogo
                  size={30}
                  className="hover:text-orange-600 transition-all"
                />
              </a>
            </div>
          </div>
          <div className="flex gap-4 items-center ">
            <img
              src={showInfo.Data.LOGO_URL}
              alt={`Logo for ${showInfo.Data.NAME}`}
              className=" size-32 rounded-lg aspect-auto"
            />
            <CryptoChart selectedCoin={selectedCoin} />
          </div>
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
