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
    <div className={`p-4 bg-[#212121] rounded-[8px] ${className}`}>
      <p className="text-white text-xs mb-[12px] font-Montserrat leading-[14px]">
        {title}
      </p>
      <p className="text-white text-xl font-[700] font-Montserrat leading-[22px] mt-3">
        {value}
      </p>
    </div>
  );
};

export default DashboardCard;
