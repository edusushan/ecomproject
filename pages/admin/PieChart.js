import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

const PieChart = ({ chartData }) => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-firasans font-bold text-center text-orange-800">
        Total Orders
      </h2>

      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
