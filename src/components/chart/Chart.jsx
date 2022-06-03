import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  BarChart,
  YAxis,
  Legend,
  Bar,
} from "recharts";
import { blue, red } from "@mui/material/colors";
import { borderColor } from "@mui/system";




const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 1100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
  
];

const data1 = [
  { name: "Tiaret", users: 100 },
  { name: "Oran", users: 150 },
  { name: "Mosta", users: 230 },
  { name: "SBA", users: 170 },
  { name: "Algiers", users: 90 },
  { name: "Setif", users: 220 },
  { name: "Annaba", users: 100 },
];



const Chart = ({ aspect, title }) => {
  return (
    
    <div className="chart">

      
      <div style={{ textAlign: "center", }}>
      <h1>Users</h1>
      
      <div className="App">
      <BarChart
          width={500}
          height={400}
          data={data1}
          margin={{
            top: 55,
            right: 20,
            left: 80,
            bottom: 50,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="users" fill="#020202" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
      </div>
      
      
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#030303" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#020202" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#000000"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
      
    </div>
  );
};



export default Chart;
