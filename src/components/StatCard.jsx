import PropTypes from 'prop-types';

const StatCard = ({ title, value, color, change, trend, icon: Icon, subtitle }) => {
  return (
    <div className={`...`}>
      <div className="flex items-center">
        <Icon className={`w-6 h-6 text-${color}-400`} />
        <div className="ml-4">
          <h3 className="text-gray-400 text-sm">{title}</h3>
          <p className="text-white text-2xl font-bold">{value}</p>
          {subtitle && <p className="text-gray-500 text-xs">{subtitle}</p>}
          {change && (
            <p className={`text-sm ${trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
              {change} {trend === 'up' ? '↑' : '↓'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  color: PropTypes.string.isRequired,
  change: PropTypes.string,
  trend: PropTypes.oneOf(['up', 'down']),
  icon: PropTypes.elementType.isRequired,
  subtitle: PropTypes.string,
};

export default StatCard;