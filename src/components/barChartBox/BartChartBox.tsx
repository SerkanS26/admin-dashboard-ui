import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./barChartBox.scss";

type Props = {
  title: string;
  chartData: object[];
  dataKey: string;
  color: string;
};

const BartChartBox = ({ title, chartData, dataKey, color }: Props) => {
  return (
    <div className="barChartBox">
      <h1>{title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={chartData}>
            <Tooltip
              labelStyle={{ display: "none" }}
              contentStyle={{
                backgroundColor: "#2a3447",
                borderRadius: "5px",
              }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={dataKey} fill={color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BartChartBox;
