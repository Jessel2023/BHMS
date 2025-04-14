import React, { useState } from 'react';
import AdminHeader from './adminheader';
import AdminSidebar from './adminsidebar';
import { Route } from 'react-router-dom';

const AdminDashboard = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="relative min-h-screen flex bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-dark-100 z-10"
      />

      {/* Sidebar - No space between this and content */}
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

        {/* Main Content Area */}
        <main className="pt-20 px-6 max-w-7xl mx-auto w-full">
          <h1 className="text-3xl font-bold text-teal-500 text-center mb-10">Admin Dashboard</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Users Card */}
            <div className="bg-[#111827] border border-green-500 rounded-2xl shadow-md p-6 hover:shadow-green-500/40 transition">
              <h2 className="text-lg font-semibold text-green-300 mb-2">👥 Users</h2>
              <h5 className="text-xl font-bold mb-2">Manage Users</h5>
              <p className="text-gray-300 mb-4">View, add, or remove users from the system.</p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition">
                Go to Users
              </button>
            </div>

            {/* Reports Card */}
            <div className="bg-[#111827] border border-yellow-400 rounded-2xl shadow-md p-6 hover:shadow-yellow-400/40 transition">
              <h2 className="text-lg font-semibold text-yellow-300 mb-2">📊 Reports</h2>
              <h5 className="text-xl font-bold mb-2">View Reports</h5>
              <p className="text-gray-300 mb-4">Access detailed system reports and analytics.</p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded transition">
                View Reports
              </button>
            </div>

            {/* Settings Card */}
            <div className="bg-[#111827] border border-red-500 rounded-2xl shadow-md p-6 hover:shadow-red-500/40 transition">
              <h2 className="text-lg font-semibold text-red-300 mb-2">⚙️ Settings</h2>
              <h5 className="text-xl font-bold mb-2">System Settings</h5>
              <p className="text-gray-300 mb-4">Configure system preferences and settings.</p>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition">
                Go to Settings
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
