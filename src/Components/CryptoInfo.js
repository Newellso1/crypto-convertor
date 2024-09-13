export default function CryptoInfo({
  name = "name",
  price = "0.00",
  symbol = "###",
  percentageChange = "%",
}) {
  return (
    <div className="flex justify-evenly gap-8 bg-gray-50 my-2">
      <p className="">{symbol}</p>
      <h2 className="">{name}</h2>
      <p
        className={`${
          percentageChange < 0 ? `text-red-500` : `text-green-500`
        }`}
      >
        {percentageChange}%
      </p>
      <p className="">${price.toFixed(10)}</p>
    </div>
  );
}
