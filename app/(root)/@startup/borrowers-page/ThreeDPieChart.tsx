import React from "react";
import { PieChart, Pie, Cell } from "recharts";

interface ChartData {
  name: string;
  value: number;
}

interface CustomizedLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  value: number;
  index: number;
}

const ThreeDPieChart: React.FC = () => {
  // Chart Data
  const data: ChartData[] = [
    { name: "Available Balance", value: 77 },
    { name: "Funds Used", value: 23 },
  ];

  // Colors for gradients
  const colors = {
    purple: {
      main: {
        start: "#8B66FF",
        end: "#6344FF",
      },
      side: {
        start: "#6344FF",
        end: "#4B2CD9",
      },
    },
    orange: {
      main: {
        start: "#FFA666",
        end: "#FF8534",
      },
      side: {
        start: "#FF8534",
        end: "#E66A1C",
      },
    },
  };

  // Chart dimensions
  const chartConfig = {
    width: 280,
    height: 200,
    centerX: 140,
    centerY: 100,
    outerRadius: 85,
  };

  // Custom label renderer
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    value,
  }: CustomizedLabelProps) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        className="font-semibold text-base"
        style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
      >
        {`${value}%`}
      </text>
    );
  };

  return (
    <div
      className="relative"
      style={{
        transform: "perspective(1200px) rotateX(45deg) scale(1.1)",
        transformStyle: "preserve-3d",
        filter: "drop-shadow(0 30px 20px rgb(0 0 0 / 0.5))",
      }}
    >
      <PieChart width={chartConfig.width} height={chartConfig.height}>
        <defs>
          {/* Main Gradients */}
          <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={colors.purple.main.start} />
            <stop offset="100%" stopColor={colors.purple.main.end} />
          </linearGradient>
          <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={colors.orange.main.start} />
            <stop offset="100%" stopColor={colors.orange.main.end} />
          </linearGradient>

          {/* Side Gradients */}
          <linearGradient id="purpleSide" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={colors.purple.side.start} />
            <stop offset="100%" stopColor={colors.purple.side.end} />
          </linearGradient>
          <linearGradient id="orangeSide" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={colors.orange.side.start} />
            <stop offset="100%" stopColor={colors.orange.side.end} />
          </linearGradient>

          {/* Shadow Filter */}
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
            <feOffset dx="0" dy="6" />
            <feComposite
              in2="SourceAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
            />
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" />
          </filter>
        </defs>

        {/* Shadow Layer */}
        <Pie
          data={data}
          cx={chartConfig.centerX}
          cy={chartConfig.centerY + 15}
          innerRadius={0}
          outerRadius={chartConfig.outerRadius}
          paddingAngle={0}
          startAngle={90}
          endAngle={450}
          dataKey="value"
          stroke="none"
          filter="url(#shadow)"
        >
          {data.map((_, index) => (
            <Cell key={`shadow-${index}`} fill="#000" opacity={0.2} />
          ))}
        </Pie>

        {/* Side Layer */}
        <Pie
          data={data}
          cx={chartConfig.centerX}
          cy={chartConfig.centerY + 8}
          innerRadius={0}
          outerRadius={chartConfig.outerRadius}
          paddingAngle={0}
          startAngle={90}
          endAngle={450}
          dataKey="value"
          stroke="none"
        >
          {data.map((_, index) => (
            <Cell
              key={`side-${index}`}
              fill={index === 0 ? "url(#purpleSide)" : "url(#orangeSide)"}
            />
          ))}
        </Pie>

        {/* Top Layer with Labels */}
        <Pie
          data={data}
          cx={chartConfig.centerX}
          cy={chartConfig.centerY}
          innerRadius={0}
          outerRadius={chartConfig.outerRadius}
          paddingAngle={0}
          startAngle={90}
          endAngle={450}
          dataKey="value"
          stroke="none"
          label={renderCustomizedLabel}
          labelLine={false}
        >
          {data.map((_, index) => (
            <Cell
              key={`main-${index}`}
              fill={
                index === 0 ? "url(#purpleGradient)" : "url(#orangeGradient)"
              }
            />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default ThreeDPieChart;
