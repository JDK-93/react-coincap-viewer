import React from "react";
import { useHistory } from "react-router-dom";

import numeral from "numeral";

const TableRow = ({ data = [] }) => {
  let history = useHistory();

  const handleClick = (coinId) => {
    history.push(`/${coinId}`);
  };
  return (
    <div
      className=" w-full flex flex-row hover:bg-yellow-50 cursor-pointer border-b border-yellow-300 px-2 items-center"
      onClick={() => handleClick(data.id)}
    >
      <div className="w-4/12 flex flex-row justify-start items-center py-2">
        <img
          className="w-6 h-6 "
          src={`https://static.coincap.io/assets/icons/${data.symbol.toLowerCase()}@2x.png`}
          alt="a.name"
        />
        <div className="pl-3 flex flex-col">
          <div className="w-max text-base font-thin text-yellow-600">
            {data.name}
          </div>
          <div className="text-xs font-thin text-left text-yellow-500">
            {data.symbol}
          </div>
        </div>
      </div>

      <div className="w-3/12 lg:1/12 text-center text-base font-thin py-2 text-gray-700">
        {numeral(data.priceUsd).format("($0.00)")}
      </div>
      <div className="w-3/12 p-2 hidden lg:inline-block text-center text-base font-thin py-2 text-gray-700">
        {numeral(data.marketCapUsd).format("($0.00a)")}
      </div>
      <div
        className={`w-3/12 lg:w-2/12 text-center text-base font-light py-2 text-gray-700 ${
          data.changePercent24Hr < 0 ? "text-red-500" : "text-green-500"
        } `}
      >
        {Intl.NumberFormat("en-US").format(parseFloat(data.changePercent24Hr).toFixed(2))} %
      </div>
      <div className="hidden lg:inline-block w-2/12 text-center text-base font-thin py-2 text-gray-700  ">
        {numeral(data.vwap24Hr).format("($0.00a)")}
      </div>
      <div className="w-3/12 lg:w-2/12 text-center text-base font-thin py-2 text-gray-700">
        {numeral(data.volumeUsd24Hr).format("($0.00a)")}
      </div>
    </div>
  );
};
export default TableRow;
