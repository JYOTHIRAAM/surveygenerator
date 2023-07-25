import { useState } from "react";
// import BarChart from "./BarChart";
import Navbar from "./Navbar";
// import LineChart from "./LineChart";
import PieChart from "./PieChart";
import { UserData } from "./Data";
function Analysis() {
    const [userData, setUserData] = useState({
      labels: UserData.map((data) => data.year),
      datasets: [
        {
          label: "Hotels",
          data: UserData.map((data) => data.userGain),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });
  
    return (
      <div>
        <Navbar/><br/><br/><center>
        {/* <div style={{ width: 700 }}>
          <BarChart chartData={userData} />
        </div><br/><br/>
        <div style={{ width: 700 }}>
          <LineChart chartData={userData} />
        </div> */}
        <div style={{ width: 700 }}>
          <PieChart chartData={userData} />
        </div>
        </center>
      </div>
    );
  }
  
  export default Analysis;