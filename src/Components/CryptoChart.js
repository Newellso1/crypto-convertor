import { useEffect, useState } from "react";
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

  useEffect(
    function () {
      async function getChartData() {
        const res = await fetch(
          `https://min-api.cryptocompare.com/data/histoday?fsym=${selectedCoin}&tsym=USD&limit=30&aggregate=3&e=Cexio`
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
    [selectedCoin]
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
    <div className={`${error ? " hidden" : ""} `}>
      {chartData ? <Line data={chartData} options={options} /> : null}
    </div>
  );
}
