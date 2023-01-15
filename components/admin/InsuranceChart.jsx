import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const InsuranceChart = () => {

  const data = [
    { name: "Home", value: 32400 },
    { name: "Mobility", value: 26000 },
    { name: "Travel", value: 20000 },
  ];

  return (
    <div>
      <BarChart width={600} height={270} data={data}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="value" fill="#19A526" barSize={25} />
      </BarChart>
    </div>
  );
};

export default InsuranceChart;
