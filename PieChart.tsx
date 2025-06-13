import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const createPieData = (data) => {
  return {
    labels: ["Rearing", "Production", "Transportation"],
    datasets: [
      {
        data: [
          data.values.Rearing,
          data.values.Production,
          data.values.Transportation,
        ],
        backgroundColor: ["#00b050", "#ffc000", "#00b0f0"],
        borderWidth: 1,
      },
    ],
  };
};
const options: ChartOptions<"pie"> = {
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        generateLabels: () => [
          {
            text: "Rearing",
            fillStyle: "#00b050",
            strokeStyle: "#00b050",
            lineWidth: 1,
          },
          {
            text: "Production",
            fillStyle: "#ffc000",
            strokeStyle: "#ffc000",
            lineWidth: 1,
          },
          {
            text: "Transportation",
            fillStyle: "#00b0f0",
            strokeStyle: "#00b0f0",
            lineWidth: 1,
          },
        ],
        // Object.keys(categoryColors).map((category) => ({
        //   text: category,
        //   fillStyle: categoryColors[category],
        //   strokeStyle: categoryColors[category],
        //   lineWidth: 1,
        // })),
      },
    },
  },
};

export function ImpactPieChart({ data }: { data: any }) {
  return (
    <div
      style={{
        width: "400px",
        height: "400px",
        padding: "8px",
        marginTop: "16px",
      }}
    >
      <h2
        style={{
          fontFamily: "Times New Roman",
          margin: 0,
        }}
      >
        {data.title}
      </h2>
      <h4
        style={{
          fontFamily: "Times New Roman",
          marginTop: "6px",
          marginBottom: "12px",
          color: "darkgray",
        }}
      >
        {data.subtitle}
      </h4>

      <Pie data={createPieData(data)} options={options} />
      <p>{data.text}</p>
    </div>
  );
}
