import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const rawData = [
  {
    category: "Carbon Footprint",
    label: "Global warming kg CO2 eq",
    value: 0.234141806,
    unit: "kg CO2 eq.",
  },
  {
    category: "Ecosystem",
    label: "Freshwater ecotoxicity kg 1,4-DCB",
    value: 0.00003229861882454,
    unit: "kg 1,4-DCB",
  },
  {
    category: "Ecosystem",
    label: "Marine ecotoxicity kg 1,4-DCB",
    value: 0.00017107471566,
    unit: "kg 1,4-DCB",
  },
  {
    category: "Ecosystem",
    label: "Terrestrial ecotoxicity kg 1,4-DCB",
    value: 0.168168196,
    unit: "kg 1,4-DCB",
  },
  {
    category: "Ecosystem",
    label: "Freshwater eutrophication kg P eq",
    value: 6.591061706e-7,
    unit: "kg P eq.",
  },
  {
    category: "Ecosystem",
    label: "Marine eutrophication kg N eq",
    value: 0.00000345721591778,
    unit: "kg N eq.",
  },
  {
    category: "Ecosystem",
    label: "Terrestrial acidification kg SO2 eq",
    value: 0.00117525254572,
    unit: "kg SO2 eq.",
  },
  {
    category: "Ecosystem",
    label: "Ozone formation, Terrestrial ecosystems kg Nox eq",
    value: 0.00071090823232,
    unit: "kg NOx eq.",
  },
  {
    category: "Human Health",
    label: "lonizing radiation kBq Co-60 eq",
    value: 0.10136346783292,
    unit: "kBg Co-60 eq.",
  },
  {
    category: "Human Health",
    label: "Human carcinogenic toxicity kg 1,4-DCB",
    value: 0.0001308403574254,
    unit: "kg 1,4-DCB",
  },
  {
    category: "Human Health",
    label: "Human non-carcinogenic toxicity kg 1,4-DCB",
    value: 0.01632121956938,
    unit: "kg 1,4-DCB",
  },
  {
    category: "Human Health",
    label: "Fine particulate matter formation kg PM 2.5 eq.",
    value: 0.00034913798408,
    unit: "kg PM 2.5 eq.",
  },
  {
    category: "Human Health",
    label: "Ozone formation, Human Health kg Nox eq",
    value: 0.00070654486542,
    unit: "kg Nox eq.",
  },
  {
    category: "Human Health",
    label: "Stratospheric ozone depletion kg CFC-11 eq",
    value: 1.3252729917e-7,
    unit: "kg CFC-11 eq.",
  },
  {
    category: "Resources",
    label: "Land use m2a crop eq",
    value: 0,
    unit: "m2a crop eq.",
  },
  {
    category: "Resources",
    label: "Fossil resource scarcity kg oil eq",
    value: 0.060345076,
    unit: "kg oil eq.",
  },
  {
    category: "Resources",
    label: "Mineral resource scarcity kg Cu eq",
    value: 0.0000276286750582,
    unit: "kg Cu eq.",
  },
  {
    category: "Resources",
    label: "Water consumption m3",
    value: 0.0005953451931204,
    unit: "m3",
  },
];

const categoryColors: Record<string, string> = {
  "Carbon Footprint": "#ccffcc",
  Ecosystem: "#ccffff",
  "Human Health": "#ffcccc",
  Resources: "#ffffcc",
};

const data = {
  labels: rawData.map((d) => d.label),
  datasets: [
    {
      label: "Impact",
      data: rawData.map((d) => {
        console.log(d.value.toFixed(6));
        return d.value.toFixed(6);
      }),
      backgroundColor: rawData.map((d) => categoryColors[d.category]),
    },
  ],
};

const options: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        generateLabels: () =>
          Object.keys(categoryColors).map((category) => ({
            text: category,
            fillStyle: categoryColors[category],
            strokeStyle: categoryColors[category],
            lineWidth: 1,
          })),
      },
    },
    datalabels: {
      // display: false,

      color: "#000",
      anchor: "end",
      align: "top",
      formatter: (value, context) => {
        return rawData[context.dataIndex].value.toFixed(5);
      },
    },
    title: {
      display: true,
      text: "Environmental Impact per 1t of BSF",
      padding: {
        bottom: 50,
      },
    },
    tooltip: {
      callbacks: {
        label: (context: any) => {
          const d = rawData[context.dataIndex];
          return `${d.value.toFixed(7)} ${d.unit}`;
        },
      },
    },
  },
  scales: {
    x: {
      ticks: {
        maxRotation: 90,
        minRotation: 45,
      },
    },
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: `Impact`,
      },
    },
  },
};

export function EnvImpactChart() {
  return (
    <div style={{ width: "1000px", height: "600px" }}>
      <Bar
        options={options}
        data={data}
        plugins={[ChartDataLabels]}
        height={600}
      />
    </div>
  );
}
