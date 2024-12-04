import React from "react";
import { ArrowUpIcon, MoreVertical } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  percentage: string;
}

const StatCard = ({ title, value, percentage }: StatCardProps) => (
  <div className="bg-white p-6 rounded-xl shadow-[0_0_20px_0px_rgba(0,0,0,0.2)]">
    <h3 className="text-gray-600 text-sm font-medium mb-4 font-Montserrat">
      {title}
    </h3>
    <div className="space-y-2">
      <p className="text-2xl font-semibold text-gray-900 font-Montserrat">
        {value}
      </p>
      <div className="flex items-center">
        <ArrowUpIcon className="h-4 w-4 text-green-500 mr-1" />
        <span className="text-sm text-green-500 font-Montserrat">
          {percentage}
        </span>
      </div>
    </div>
  </div>
);

export default StatCard;
