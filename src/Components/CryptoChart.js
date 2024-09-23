import { useEffect, useMemo, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function CryptoChart({ selectedCoin }) {
  const [chartData, setChartData] = useState(null);
  const [error, setError] = useState(false);
  const [timeFrame, setTimeFrame] = useState(0);

  const timeFrames = useMemo(
    () => [
      `histoday?fsym=${selectedCoin}&tsym=USD&limit=10&allData=true`,
      `histoday?fsym=${selectedCoin}&tsym=USD&limit=24`,
      `histohour?fsym=${selectedCoin}&tsym=USD&limit=10`,
    ],
    selectedCoin
  );

  console.log(timeFrames);

  useEffect(
    function () {
      async function getChartData() {
        const res = await fetch(
          `https://min-api.cryptocompare.com/data/${timeFrames[timeFrame]}`
        );
        const historicalData = await res.json();
        if (!historicalData.Data || historicalData.Response === "Error") {
          setError(true);
          return;
        }

        const timeStamps = historicalData.Data.map((item) =>
          new Date(item.time * 1000).toLocaleDateString()
        );

        const prices = historicalData.Data.map((item) => item.close);
        setChartData({
          labels: timeStamps,
          datasets: [
            {
              label: `${selectedCoin} Price`,
              data: prices,
              borderColor: "rgb(51 65 85)",
              fill: false,
              pointRadius: 0,
            },
          ],
        });
      }
      getChartData();
    },
    [selectedCoin, timeFrame, timeFrames]
  );

  const options = {
    scales: {
      x: {
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className="flex flex-col items-center">
      <div className={`${error ? " hidden" : ""} `}>
        {chartData ? <Line data={chartData} options={options} /> : null}
      </div>
      <div
        className={`flex justify-evenly text-sm w-full ${
          error || !chartData ? " hidden" : ""
        } `}
      >
        <button
          value={0}
          onClick={(e) => setTimeFrame(Number(e.target.value))}
          className={`transition-all w-1/3 ${
            timeFrame === 0 ? `bg-slate-200` : ``
          }`}
        >
          All
        </button>
        <button
          value={1}
          onClick={(e) => setTimeFrame(Number(e.target.value))}
          className={`transition-all w-1/3 ${
            timeFrame === 1 ? `bg-slate-200` : ``
          }`}
        >
          30 Days
        </button>
        <button
          value={2}
          onClick={(e) => setTimeFrame(Number(e.target.value))}
          className={`transition-all w-1/3 ${
            timeFrame === 2 ? `bg-slate-200` : ``
          }`}
        >
          24 hours
        </button>
      </div>
    </div>
  );
}
