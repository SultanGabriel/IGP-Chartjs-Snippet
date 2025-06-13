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
import { EnvImpactChart } from "./BarChart";
import { ImpactPieChart } from "./PieChart";

const carbonFootprintData = {
  title: "Carbon Footprint",
  subtitle: "Global Warming Potential",
  text: "Total of 0.24 kg CO2 emission per 100g of protein from BSF-Cycle product.",
  unit: "%",
  values: {
    Rearing: 22.81,
    Production: 68.44,
    Transportation: 8.75,
  },
};
const ecosystemData = {
  title: "Ecosystem",
  subtitle: "Terrestrial ecotoxicity",
  text: "Total of 0.17 kg 1,4-DCB eq terrestrial ecotoxicity per 100g of protein from BSF-Cycle product, indicating impact on ecosystem.",
  unit: "%",
  values: {
    Rearing: 24.5,
    Production: 73.49,
    Transportation: 2.01,
  },
};

const resources = {
  title: "Resources",
  subtitle: "Fossil resource scarcity",
  text: "Total of 0.06 kg oil eq. fossil resource scarcity per 100g of protein from BSF-Cycle product, indicating impact on resouces.",
  unit: "%",
  values: {
    Rearing: 22.69,
    Production: 68.08,
    Transportation: 9.23,
  },
};

const humanHealth = {
  title: "Human Health",
  subtitle: "lonizing radiation",
  text: "Total of 0.1 kg Co-60 eq. ionizing radiation per 100g of protein from BSF-Cycle product, indicating impact on human health.",
  unit: "%",
  values: {
    Rearing: 24.97,
    Production: 74.89,
    Transportation: 0.14,
  },
};

export function App() {
  return (
    <div>
      <EnvImpactChart />
      <div style={{ display: "flex" }}>
        <ImpactPieChart data={carbonFootprintData} />
        <ImpactPieChart data={humanHealth} />
        <ImpactPieChart data={ecosystemData} />
        <ImpactPieChart data={resources} />
      </div>
    </div>
  );
}
