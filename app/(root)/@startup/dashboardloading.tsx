export default function DashboardLoading() {
  return (
    <div className="w-[923px] mx-auto space-y-6 mt-8">
      {/* Top Section Loading */}
      <div className="grid grid-cols-3 gap-6">
        {/* Left Stats Loading */}
        <div className="space-y-6">
          <div className="bg-[#212121] h-[calc(50%-12px)] rounded-lg p-4">
            <p className="font-Montserrat font-light text-xs text-white text-center">
              Total Funds
            </p>
            <div className="w-3/5 h-8 bg-[#575757] rounded-md mx-auto mt-3 animate-pulse" />
          </div>
          <div className="bg-[#212121] h-[calc(50%-12px)] rounded-lg p-4">
            <p className="font-Montserrat font-light text-xs text-white text-center">
              Available Balance
            </p>
            <div className="w-3/5 h-8 bg-[#575757] rounded-md mx-auto mt-3 animate-pulse" />
          </div>
        </div>

        {/* Pie Chart Loading */}
        <div className="col-span-2 bg-[#212121] rounded-lg animate-pulse" />
      </div>

      {/* Table Loading */}
      <div className="overflow-x-auto bg-white rounded-lg">
        {/* Table Header Loading */}
        <div className="grid grid-cols-6 bg-white p-[22px]">
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="h-4 bg-[#575757] rounded animate-pulse"
              />
            ))}
        </div>

        {/* Table Rows Loading */}
        {Array(6)
          .fill(null)
          .map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-6 border-t border-gray-200"
            >
              {Array(6)
                .fill(null)
                .map((_, colIndex) => (
                  <div
                    key={colIndex}
                    className={`p-[22px] ${
                      colIndex % 2 === 0 ? "bg-[#EAEAEA]" : "bg-white"
                    }`}
                  >
                    <div className="h-4 bg-[#575757] rounded animate-pulse" />
                  </div>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
}
