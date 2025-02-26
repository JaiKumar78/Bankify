"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts } : DoughnutChartProps) => {
    const data = {
        datasets: [
            {
              label: "Balance",
              data: [7500, 3500, 4532.79],
              backgroundColor: ['#023e8a', '#ade8f4', '#00b4d8']
            }
          ],
          labels:["SBI", "IOB", "ICICI"]
    }

  return (
    <Doughnut 
    data={data} 
    options={{
        cutout: '50%',
        plugins: {
            legend: {
                display: false
            }
        }
    }}
    />
  )
}

export default DoughnutChart