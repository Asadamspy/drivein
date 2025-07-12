const StatCard = ({ title, value, color }) => {
  return (
    <div className={`p-5 rounded-xl shadow-md ${color}`}>
      <p className="text-sm font-medium">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default StatCard;

