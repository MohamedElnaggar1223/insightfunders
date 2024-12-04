import { MoreVertical } from "lucide-react";

const users = [
  {
    name: "Jordan Stevenson",
    role: "iOS Developer",
    joinDate: "Sun 24 Nov 2024",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    bgColor: "bg-indigo-100",
  },
  {
    name: "Nathan Wagner",
    role: "UI/UX Designer",
    joinDate: "Sun 24 Nov 2024",
    imageUrl: "https://randomuser.me/api/portraits/men/2.jpg",
    bgColor: "bg-cyan-100",
  },
  {
    name: "Bentlee Emblin",
    role: "React developer",
    joinDate: "Sun 24 Nov 2024",
    imageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
    bgColor: "bg-cyan-100",
  },
  {
    name: "Bertha Biner",
    role: "Product Manager",
    joinDate: "Sun 24 Nov 2024",
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    bgColor: "bg-green-100",
  },
  {
    name: "Beverlie Krabbe",
    role: "VueJs developer",
    joinDate: "Sun 24 Nov 2024",
    imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
    bgColor: "bg-gray-100",
  },
];

const RecentUsersCard = ({ title }: { title: string }) => (
  <div className="bg-white p-6 rounded-2xl shadow-[0_0_20px_-2px_rgba(0,0,0,0.2)]">
    <div className="flex justify-between py-2 w-full align-middle">
      <h3 className="text-[15px] font-medium text-gray-900 font-Montserrat">
        {title}
      </h3>
      <button className="text-gray-400 hover:text-gray-600 font-Montserrat">
        <MoreVertical className="h-5 w-5" />
      </button>
    </div>
    <div className="flex justify-between py-4 w-full">
      <span className="text-sm text-gray-500 font-Montserrat">NAME</span>
      <span className="text-sm text-gray-500 font-Montserrat">JOINED</span>
    </div>

    <div className="space-y-6">
      {users.map((user, index) => (
        <div key={index} className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-full overflow-hidden ${user.bgColor}`}
            >
              <img
                src={user.imageUrl}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-[15px] text-gray-900 font-medium font-Montserrat">
                {user.name}
              </p>
              <p className="text-sm text-gray-400 font-Montserrat">
                {user.role}
              </p>
            </div>
          </div>
          <span className="text-sm text-gray-500 font-Montserrat">
            {user.joinDate}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default RecentUsersCard;
