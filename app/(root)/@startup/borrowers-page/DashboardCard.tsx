interface DashboardCardProps {
  title: string;
  value: string | number;
  className?: string;
}

const DashboardCard = ({
  title,
  value,
  className = "",
}: DashboardCardProps) => {
  return (
    <div className={`p-4 bg-[#212121] rounded-xl ${className}`}>
      <p className="text-gray-400 text-sm mb-2 font-Montserrat">{title}</p>
      <p className="text-white text-2xl font-semibold font-Montserrat">
        {value}
      </p>
    </div>
  );
};

export default DashboardCard;
