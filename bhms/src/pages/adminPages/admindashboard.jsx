import React from 'react';
import AdminHeader from './adminheader';
import AdminSidebar from './adminsidebar';
import { useNavigate } from 'react-router-dom';
import {
  BarChart3,
  Settings,
  Home,
  FileText,
  ClipboardList,
  Sliders,
} from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const Card = ({
    title,
    subtitle,
    description,
    icon: Icon,
    onClick,
    borderColor,
    textColor,
    showButton = false,
    buttonText = 'View Details',
    largeIcon = false,
    className = '',
    buttonBorderColor, // Added buttonBorderColor prop
  }) => (
    <div
      className={`p-4 rounded-2xl shadow-md hover:shadow-lg transition bg-white/10 backdrop-blur-md 
                  border ${borderColor} ${className} flex flex-col justify-between`}
    >
      <div className="flex flex-col items-center text-center">
        {largeIcon && (
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 ${textColor} bg-white/20`}>
            {Icon && <Icon className="w-7 h-7" />}
          </div>
        )}
        <div className={`font-semibold text-sm mb-1 ${textColor}`}>{title}</div>
        {subtitle && <h3 className="text-3xl font-bold text-white">{subtitle}</h3>}
        {description && <p className="text-sm text-gray-300 mt-1">{description}</p>}
      </div>
      {showButton && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={onClick}
            className={`text-sm px-4 py-1 rounded-full font-medium border ${buttonBorderColor} 
                        hover:bg-white/20 transition`}
          >
            {buttonText}
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-64 bg-black/40 fixed h-full backdrop-blur">
        <AdminSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <div className="h-16 bg-[#ED2629] text-white flex items-center px-6 fixed w-full left-64 top-0 z-10">
          <AdminHeader />
        </div>

        {/* Content */}
        <div className="pt-20 px-6 pb-10 max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card
                title="TOTAL NUMBER OF ROOMS"
                subtitle="25"
                icon={BarChart3}
                borderColor="border-purple-400"
                textColor="text-purple-400"
                showButton
                largeIcon
                onClick={() => navigate('/admin/rooms')}
                buttonBorderColor="border-purple-400" // Button border color
              />
              <Card
                title="TOTAL NUMBER OF BOARDERS"
                subtitle="120"
                icon={BarChart3}
                borderColor="border-blue-400"
                textColor="text-blue-400"
                showButton
                largeIcon
                onClick={() => navigate('/admin/boarders')}
                buttonBorderColor="border-blue-400" // Button border color
              />
            </div>
            <div className="flex flex-col gap-6">
              <Card
                title="Settings"
                description="System settings"
                icon={Settings}
                onClick={() => navigate('/admin/settings')}
                borderColor="border-red-500"
                textColor="text-red-500"
                showButton
                buttonBorderColor="border-red-500" // Button border color
              />
              <Card
                title="Calculator"
                description="Billing calculator"
                icon={BarChart3}
                onClick={() => navigate('/admin/calc')}
                borderColor="border-yellow-400"
                textColor="text-yellow-400"
                showButton
                buttonBorderColor="border-yellow-400" // Button border color
              />
            </div>
          </div>

          {/* Bottom Cards (Equal Size Boxes) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card
              title="Boarders"
              subtitle="Manage Info"
              icon={ClipboardList}
              onClick={() => navigate('/admin/boarders')}
              borderColor="border-blue-500"
              textColor="text-blue-500"
              showButton
              buttonBorderColor="border-blue-500" // Button border color
            />
            <Card
              title="Rooms"
              subtitle="Room Details"
              icon={Home}
              onClick={() => navigate('/admin/rooms')}
              borderColor="border-purple-500"
              textColor="text-purple-500"
              showButton
              buttonBorderColor="border-purple-500" // Button border color
            />
            <Card
              title="Bills"
              subtitle="View Bills"
              icon={FileText}
              onClick={() => navigate('/admin/bills')}
              borderColor="border-pink-500"
              textColor="text-pink-500"
              showButton
              buttonBorderColor="border-pink-500" // Button border color
            />
            <Card
              title="System Logs"
              subtitle="Logs & Reports"
              icon={Sliders}
              onClick={() => navigate('/admin/logs')}
              borderColor="border-green-500"
              textColor="text-green-500"
              showButton
              buttonBorderColor="border-green-500" // Button border color
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
