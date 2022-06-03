import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

import {
  PieChart,
  Pie,
  Tooltip,
 
} from "recharts";
import { red } from "@mui/material/colors";



const Featured = () => {


  const data = [
    { name: "Tiaret", users: 100 },
    { name: "Oran", users: 150 },
    { name: "Mostaganem", users: 230 },
    { name: "SBA", users: 170 },
    { name: "Algiers", users: 90 },
    { name: "Setif", users: 220 },
    { name: "Annaba", users: 100 },
  ];


  return (
    <div className="featured">
      <div style={{ textAlign: "center", color:'black' }}>
      <h1>Users</h1>
      <div className="App">
        <PieChart width={400} height={400} color={red}>
          <Pie
            dataKey="users"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#020202"
            
            label
          />
          <Tooltip />
        </PieChart>
        </div>
        </div>




      <div className="top">
        <h1 className="title">Total Income</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart" >
          <CircularProgressbar value={50} text={"50%"} strokeWidth={4}  />
        </div>
        <p className="title">sales for today</p>
        <p className="amount">$220</p>

        <hr />
        <hr />
        <hr />
        
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">$200</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$100</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$100</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
