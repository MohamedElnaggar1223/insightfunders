import RecentUsersCard from "./RecentUsersCard";
import StatCard from "./StatCard";

export default function DashboardStats() {
  return (
    <div className="p-8 bg-gray-50 min-h-[calc(100vh-68px)] mt-[68px]">
      <div className="max-w-7xl mx-auto">
        {/* Stats Cards */}
        <div className="grid grid-cols-5 gap-6 mb-6">
          <StatCard title="Total Lenders" value="4,234" percentage="22.3%" />
          <StatCard title="Total Borrowers" value="4,234" percentage="22.3%" />
          <StatCard title="Total referred" value="4,234" percentage="22.3%" />
          <StatCard
            title="Deals in Progress"
            value="4,234"
            percentage="22.3%"
          />
          <StatCard title="Deals Completed" value="4,234" percentage="22.3%" />
        </div>

        {/* Recent Users Section */}
        <div className="grid grid-cols-2 gap-6">
          <RecentUsersCard title="Recently joined Lenders" />
          <RecentUsersCard title="Recently joined Lenders" />
        </div>
      </div>
    </div>
  );
}
