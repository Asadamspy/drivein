import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  DollarSign,
  Users,
  TrendingUp,
  BarChart3,
  Sun,
  Moon,
  Zap,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Info,
  Activity,
  Brain,
  Cpu,
  Target,
  Database,
  Clock,
  Globe,
  Shield,
  Rocket,
  Package,
  Star,
  Download,
  Home ,
   Bell,
} from 'lucide-react';

import {
  ResponsiveContainer,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  ComposedChart,
  Line
} from 'recharts';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('6M');
  const [animateCards, setAnimateCards] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimateCards(true);
      setIsLoading(false);
    }, 500);
  }, []);

  const revenueData = [
    { month: 'Jan', revenue: 65000, users: 1200, orders: 340, growth: 12 },
    { month: 'Feb', revenue: 72000, users: 1350, orders: 380, growth: 15 },
    { month: 'Mar', revenue: 68000, users: 1280, orders: 360, growth: 8 },
    { month: 'Apr', revenue: 84000, users: 1580, orders: 420, growth: 18 },
    { month: 'May', revenue: 91000, users: 1720, orders: 480, growth: 22 },
    { month: 'Jun', revenue: 105000, users: 1950, orders: 540, growth: 28 },
  ];

  const performanceData = [
    { name: 'Desktop', value: 45, fill: '#8B5CF6', users: 2340 },
    { name: 'Mobile', value: 35, fill: '#06B6D4', users: 1820 },
    { name: 'Tablet', value: 20, fill: '#10B981', users: 1040 },
  ];

  const topProducts = [
    { name: 'AI Dashboard Pro', sales: 1234, revenue: 24680, trend: 15, color: '#8B5CF6', category: 'SaaS' },
    { name: 'Analytics Engine', sales: 987, revenue: 19740, trend: 8, color: '#06B6D4', category: 'Tools' },
    { name: 'API Gateway', sales: 756, revenue: 15120, trend: 22, color: '#10B981', category: 'Infrastructure' },
    { name: 'Cloud Storage', sales: 543, revenue: 10860, trend: 5, color: '#F59E0B', category: 'Storage' },
  ];


const StatCard = ({
  title,
  value,
  change,
  trend,
  icon: Icon,
  color,
  delay,
  subtitle,
  animateCards
}) => {
  return (
    <div className={`...`}>
      {/* Your JSX - make sure to use all props here */}
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
  change: PropTypes.string,
  trend: PropTypes.oneOf(['up', 'down']),
  icon: PropTypes.elementType.isRequired,
  color: PropTypes.string.isRequired,
  delay: PropTypes.number,
  subtitle: PropTypes.string,
  animateCards: PropTypes.bool,
};

const QuickActionButton = ({ title, icon: Icon, color, onClick, description }) => (
  <button
    onClick={onClick}
    className={`group relative overflow-hidden bg-gradient-to-br from-${color}-600 to-${color}-700 hover:from-${color}-500 hover:to-${color}-600 text-white p-6 rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-${color}-500/30 transform hover:-translate-y-1`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
    <div className="relative z-10">
      <Icon className="w-8 h-8 mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
      <div className="text-sm font-bold tracking-wide mb-1">{title}</div>
      <div className="text-xs opacity-80">{description}</div>
    </div>
  </button>
);
QuickActionButton.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  description: PropTypes.string,
};

const ActivityItem = ({ activity }) => (
  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-800/20 to-gray-700/10 rounded-2xl hover:from-gray-800/40 hover:to-gray-700/20 transition-all duration-300 border border-gray-700/20 hover:border-gray-600/30 group">
    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${
      activity.status === 'success' ? 'from-emerald-500 to-emerald-600' :
      activity.status === 'warning' ? 'from-amber-500 to-amber-600' :
      activity.status === 'error' ? 'from-red-500 to-red-600' : 'from-blue-500 to-blue-600'
    } flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
      {activity.status === 'success' && <CheckCircle className="w-6 h-6 text-white" />}
      {activity.status === 'warning' && <AlertTriangle className="w-6 h-6 text-white" />}
      {activity.status === 'error' && <XCircle className="w-6 h-6 text-white" />}
      {activity.status === 'info' && <Info className="w-6 h-6 text-white" />}
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-white text-sm font-semibold truncate group-hover:text-gray-100">{activity.user}</p>
      <p className="text-gray-400 text-xs truncate group-hover:text-gray-300">{activity.action}</p>
      <p className="text-gray-500 text-xs">{activity.time}</p>
    </div>
    <div className="text-right">
      <p className={`text-sm font-bold ${activity.amount.startsWith('-') ? 'text-red-400' : 'text-emerald-400'}`}>
        {activity.amount}
      </p>
    </div>
  </div>
);

ActivityItem.propTypes = {
  activity: PropTypes.shape({
    status: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
    user: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
  }).isRequired,
};


  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mb-4"></div>
          <p className="text-gray-400">Loading Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-gray-900/80 backdrop-blur-2xl border border-gray-700/50 rounded-2xl px-6 py-3">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-sm">Ω</span>
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Nexus
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-800/50 rounded-xl transition-colors">
              <Home className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-800/50 rounded-xl transition-colors">
              <BarChart3 className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-800/50 rounded-xl transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
            </button>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 hover:bg-gray-800/50 rounded-xl transition-colors"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-4">
            Command Center
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real-time insights and analytics for your digital empire
          </p>
        </div>

        {/* Enhanced Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <StatCard 
            title="Total Revenue" 
            value="$2.4M" 
            change="32.5%" 
            trend="up" 
            icon={DollarSign} 
            color="purple"
            delay={100}
            subtitle="vs last quarter"
          />
          <StatCard 
            title="Global Users" 
            value="847K" 
            change="18.2%" 
            trend="up" 
            icon={Users} 
            color="blue"
            delay={200}
            subtitle="across 127 countries"
          />
          <StatCard 
            title="Conversion Rate" 
            value="8.24%" 
            change="2.1%" 
            trend="down" 
            icon={TrendingUp} 
            color="cyan"
            delay={300}
            subtitle="industry leading"
          />
          <StatCard 
            title="AI Efficiency" 
            value="94.7%" 
            change="15.3%" 
            trend="up" 
            icon={Zap} 
            color="emerald"
            delay={400}
            subtitle="automation score"
          />
        </div>

        {/* Main Analytics Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-12">
          {/* Advanced Revenue Chart */}
          <div className="xl:col-span-2 bg-gradient-to-br from-gray-950/80 via-gray-900/60 to-gray-800/40 rounded-3xl p-8 border border-gray-700/30 backdrop-blur-xl">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                  Revenue Dynamics
                </h2>
                <p className="text-gray-400">Multi-dimensional performance analysis</p>
              </div>
              <div className="flex items-center space-x-2 mt-4 sm:mt-0">
                {['3M', '6M', '1Y', 'All'].map((period) => (
                  <button 
                    key={period}
                    onClick={() => setActiveTab(period)}
                    className={`px-4 py-2 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                      activeTab === period 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25' 
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="h-80 relative">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={revenueData}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.05}/>
                    </linearGradient>
                    <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#06B6D4" stopOpacity={0.05}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis yAxisId="left" stroke="#9CA3AF" />
                  <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(17, 24, 39, 0.95)', 
                      border: '1px solid #374151', 
                      borderRadius: '16px',
                      backdropFilter: 'blur(20px)',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }}
                  />
                  <Area 
                    yAxisId="left"
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#8B5CF6" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorRevenue)" 
                  />
                  <Line 
                    yAxisId="right"
                    type="monotone" 
                    dataKey="users" 
                    stroke="#06B6D4" 
                    strokeWidth={3}
                    dot={{ fill: '#06B6D4', strokeWidth: 2, r: 6 }}
                  />
                  <Bar 
                    yAxisId="left"
                    dataKey="orders" 
                    fill="#10B981" 
                    opacity={0.6}
                    radius={[4, 4, 0, 0]}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Enhanced Activity Stream */}
          <div className="bg-gradient-to-br from-gray-950/80 via-gray-900/60 to-gray-800/40 rounded-3xl p-6 border border-gray-700/30 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-emerald-400" />
                Live Stream
              </h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-400 font-medium">Real-time</span>
              </div>
            </div>
            
            <div className="space-y-3 max-h-80 overflow-y-auto custom-scrollbar">
              {[
                { user: "Sarah Chen", action: "completed AI analysis", amount: "$2,499", time: "1m ago", status: "success" },
                { user: "Marcus Rodriguez", action: "deployed ML model", amount: "Free", time: "3m ago", status: "info" },
                { user: "Emma Thompson", action: "upgraded to Enterprise", amount: "$999", time: "7m ago", status: "warning" },
                { user: "Alex Kim", action: "API limit exceeded", amount: "-$149", time: "12m ago", status: "error" },
                { user: "Lisa Wang", action: "data export completed", amount: "$299", time: "18m ago", status: "success" },
                { user: "Tom Brown", action: "requested data deletion", amount: "-$79", time: "25m ago", status: "warning" }
              ].map((activity, idx) => (
                <ActivityItem key={idx} activity={activity} idx={idx} />
              ))}
            </div>
          </div>
        </div>

        {/* Advanced Analytics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* AI Performance Metrics */}
          <div className="lg:col-span-2 bg-gradient-to-br from-gray-950/80 via-gray-900/60 to-gray-800/40 rounded-3xl p-6 border border-gray-700/30 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Brain className="w-6 h-6 text-purple-400" />
                AI Performance Matrix
              </h3>
              <Cpu className="w-6 h-6 text-gray-400" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Neural Processing", value: "98.7%", progress: 98.7, color: "purple", icon: Zap },
                { label: "Model Accuracy", value: "94.3%", progress: 94.3, color: "blue", icon: Target },
                { label: "Data Pipeline", value: "99.1%", progress: 99.1, color: "emerald", icon: Database },
                { label: "Response Time", value: "12ms", progress: 88, color: "cyan", icon: Clock }
              ].map((metric, idx) => (
                <div key={idx} className="space-y-4 p-4 bg-gray-800/20 rounded-2xl border border-gray-700/20">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <metric.icon className={`w-4 h-4 text-${metric.color}-400`} />
                      <span className="text-gray-300 text-sm font-medium">{metric.label}</span>
                    </div>
                    <span className="text-white font-bold text-sm">{metric.value}</span>
                  </div>
                  <div className="w-full bg-gray-700/30 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r from-${metric.color}-500 to-${metric.color}-400 transition-all duration-1000 ease-out rounded-full`}
                      style={{ width: `${metric.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Traffic Distribution */}
          <div className="bg-gradient-to-br from-gray-950/80 via-gray-900/60 to-gray-800/40 rounded-3xl p-6 border border-gray-700/30 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-400" />
              Traffic Sources
            </h3>
            <div className="h-48 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={performanceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={70}
                    paddingAngle={8}
                    dataKey="value"
                  >
                    {performanceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(17, 24, 39, 0.95)', 
                      border: '1px solid #374151', 
                      borderRadius: '12px' 
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2">
              {performanceData.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 bg-gray-800/20 rounded-xl">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.fill }}></div>
                    <span className="text-sm text-gray-300">{item.name}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-white">{item.value}%</p>
                    <p className="text-xs text-gray-400">{item.users} users</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions Hub */}
          <div className="bg-gradient-to-br from-gray-950/80 via-gray-900/60 to-gray-800/40 rounded-3xl p-6 border border-gray-700/30 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Rocket className="w-5 h-5 text-orange-400" />
              Mission Control
            </h3>
            <div className="grid grid-cols-1 gap-3">
              <QuickActionButton 
                title="Deploy AI" 
                icon={Brain} 
                color="purple" 
                description="Launch new model"
              />
              <QuickActionButton 
                title="Analytics" 
                icon={BarChart3} 
                color="blue" 
                description="Deep insights"
              />
              <QuickActionButton 
                title="Security" 
                icon={Shield} 
                color="emerald" 
                description="System scan"
              />
              <QuickActionButton 
                title="Export" 
                icon={Download} 
                color="cyan" 
                description="Data export"
              />
            </div>
          </div>
        </div>

        {/* Product Performance Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-gray-950/80 via-gray-900/60 to-gray-800/40 rounded-3xl p-6 border border-gray-700/30 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Package className="w-6 h-6 text-amber-400" />
              Product Performance
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topProducts} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(17, 24, 39, 0.95)', 
                      border: '1px solid #374151', 
                      borderRadius: '12px' 
                    }}
                  />
                  <Bar dataKey="sales" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#06B6D4" stopOpacity={0.8}/>
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-950/80 via-gray-900/60 to-gray-800/40 rounded-3xl p-6 border border-gray-700/30 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              Top Performers
            </h3>
            <div className="space-y-4">
              {topProducts.map((product, idx) => (
                <div key={idx} className="group flex items-center justify-between p-4 bg-gradient-to-r from-gray-800/20 to-gray-700/10 rounded-2xl border border-gray-700/20 hover:border-gray-600/30 hover:from-gray-800/40 hover:to-gray-700/20 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform duration-300`} style={{ background: `linear-gradient(135deg, ${product.color}, ${product.color}dd)` }}>
                      {idx + 1}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm group-hover:text-gray-100">{product.name}</p>
                      <p className="text-gray-400 text-xs">{product.category} • {product.sales} sales</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">${product.revenue.toLocaleString()}</p>
                    <p className="text-emerald-400 text-xs flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      +{product.trend}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
{/* 
      <style jsx>{`
        @keyframes slide-in-bottom {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-in-bottom {
          animation: slide-in-bottom 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(55, 65, 81, 0.2);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #8B5CF6, #06B6D4);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #7C3AED, #0891B2);
        }
      `}</style> */}
    </div>
  );
};

export default Dashboard;