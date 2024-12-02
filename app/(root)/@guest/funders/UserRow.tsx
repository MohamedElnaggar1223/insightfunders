interface UserRowProps {
  name: string;
  role: string;
  joinDate: string;
  imageUrl: string;
}

const UserRow = ({ name, role, joinDate, imageUrl }: UserRowProps) => (
  <div className="flex items-center justify-between py-4">
    <div className="flex items-center gap-3">
      <img src={imageUrl} alt={name} className="w-8 h-8 rounded-full" />
      <div>
        <p className="text-gray-900 font-medium font-Montserrat">{name}</p>
        <p className="text-sm text-gray-500 font-Montserrat">{role}</p>
      </div>
    </div>
    <span className="text-sm text-gray-500 font-Montserrat">{joinDate}</span>
  </div>
);

export default UserRow;
