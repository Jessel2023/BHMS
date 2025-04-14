import React, { useState } from 'react';
import AdminHeader from './adminheader';
import AdminSidebar from './adminsidebar';
import { useNavigate } from 'react-router-dom';
import { Users, BarChart3, Settings, Home, FileText, ClipboardList, Sliders } from 'lucide-react';

const AdminDashboard = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const navigate = useNavigate();

  const DashboardCard = ({ title, subtitle, description, icon: Icon, borderColor, buttonColor, navigateTo }) => (
    <div className={` border ${borderColor} rounded-2xl shadow-md p-6 hover:shadow-lg transition`}>
      <div className={`flex items-center gap-2 text-lg font-semibold ${borderColor.replace('border', 'text')} mb-2`}>
        <Icon className="w-5 h-5" />
        {title}
      </div>
      <h5 className="text-xl font-bold mb-2">{subtitle}</h5>
      <p className="text-gray-300 mb-4">{description}</p>
      <button
        onClick={() => navigate(navigateTo)}
        className={`${buttonColor} px-4 py-2 rounded transition text-white`}
      >
        Go to {title}
      </button>
    </div>
  );

  return (
    <div className="relative min-h-screen flex bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Sidebar */}
      <div className="fixed h-full w-64 z-20">
        <AdminSidebar
          showSidebar={showSidebar}
          handleSidebarToggle={() => setShowSidebar(!showSidebar)}
        />
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <div className="fixed top-0 left-64 right-0 z-30">
          <AdminHeader onMenuClick={() => setShowSidebar(true)} />
        </div>

        {/* Dashboard Cards */}
        <main className="pt-20 px-6 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <DashboardCard
              title="Users"
              subtitle="Manage Users"
              description="View, add, or remove users from the system."
              icon={Users}
              borderColor="border-green-500"
              buttonColor="bg-green-600 hover:bg-green-700"
              navigateTo="/admin/users"
            />

            <DashboardCard
              title="Calculator"
              subtitle="Billing Calculator"
              description="Quickly calculate tenant power usage."
              icon={BarChart3}
              borderColor="border-yellow-400"
              buttonColor="bg-yellow-400 hover:bg-yellow-500 text-black"
              navigateTo="/admin/calc"
            />

            <DashboardCard
              title="Boarders"
              subtitle="Boarder's Info"
              description="Manage and update boarder records."
              icon={ClipboardList}
              borderColor="border-blue-500"
              buttonColor="bg-blue-600 hover:bg-blue-700"
              navigateTo="/admin/boarders"
            />

            <DashboardCard
              title="Rooms"
              subtitle="Room Management"
              description="Add, edit, or delete rooms."
              icon={Home}
              borderColor="border-purple-500"
              buttonColor="bg-purple-600 hover:bg-purple-700"
              navigateTo="/admin/rooms"
            />

            <DashboardCard
              title="Bills"
              subtitle="Manage Bills"
              description="Generate and update tenant billing."
              icon={FileText}
              borderColor="border-pink-500"
              buttonColor="bg-pink-600 hover:bg-pink-700"
              navigateTo="/admin/bills"
            />

            <DashboardCard
              title="Settings"
              subtitle="System Settings"
              description="Configure system preferences."
              icon={Sliders}
              borderColor="border-red-500"
              buttonColor="bg-red-600 hover:bg-red-700"
              navigateTo="/admin/settings"
            />
          </div>
        </main>
      </div>
    </div>

  );
};

export default AdminDashboard;
