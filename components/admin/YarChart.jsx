import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Chart = () => {

  const data = [
    { name: "Jan", tr: 0,     te: 8009 },
    { name: "Feb", tr: 12000, te: 11000 },
    { name: "Mar", tr: 21000, te: 37400 },
    { name: "Apr", tr: 11000, te: 31000 },
    { name: "May", tr: 34000, te: 25000 },
    { name: "Jun", tr: 39000, te: 30000 },
    { name: "Jly", tr: 31000, te: 20000 },
    { name: "Aug", tr: 11000, te: 30000 },
    { name: "Sep", tr: 39000, te: 12000 },
    { name: "Oct", tr: 37400, te: 25000 },
    { name: "Nov", tr: 21000, te: 37000 },
    { name: "Dec", tr: 30000, te: 10000 },
  ];
  return (
    <div>
      <LineChart
        width={1008}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="tr" strokeWidth={3} stroke="#19A526" />
        <Line type="monotone" dataKey="te" strokeWidth={3} stroke="#FF8500" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Chart;
