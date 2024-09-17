export default function CryptoInfo({
  name = "name",
  price = "0.00",
  symbol = "###",
  percentageChange = 0,
}) {
  return (
    <div className="flex justify-evenly bg-gray-50 my-2 p-2 rounded-sm bg-opacity-90 hover:bg-opacity-100 drop-shadow-sm select-none">
      <p className=" w-1/4 text-left">{symbol}</p>
      <h2 className=" w-1/4 text-left">{name}</h2>
      <p
        className={`${
          percentageChange < 0 ? `text-red-500` : `text-green-500`
        } w-1/4 text-center`}
      >
        {percentageChange}%
      </p>
      <p className=" w-1/4 text-right">
        ${price.toFixed(price > 0.1 ? 2 : 10)}
      </p>
    </div>
  );
}
