import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  CalculatorIcon,
  BuildingOffice2Icon,
  UserIcon,
  UsersIcon,
  CreditCardIcon,
} from '@heroicons/react/24/outline';
import AdminHeader from './adminheader';

const navItems = [
  { name: 'Dashboard', href: '/admindashboard', icon: HomeIcon },
  { name: 'Calculator', href: '/calculatorA', icon: CalculatorIcon },
  { name: 'List of Rooms', href: '/roomlist', icon: BuildingOffice2Icon },
  { name: 'Profile', href: '/adminprofile', icon: UserIcon },
  { name: 'Boarders information', href: '/boarders', icon: UsersIcon },
  { name: 'Bills', href: '/bills', icon: CreditCardIcon },
];

const AdminSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Top Mobile Navbar with Hamburger */}
      <AdminHeader />
      <div className="lg:hidden fixed top-0 left-0 right-0 shadow-md z-50 px-4 py-3 flex items-center justify-between">
        <button onClick={() => setSidebarOpen(true)}>
          <Bars3Icon className="w-7 h-7 text-gray-800" />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">Admin Panel</h1>
        <div className="w-7" /> {/* Just to balance layout */}
      </div>

      {/* Mobile Sidebar Drawer */}
      <Dialog open={sidebarOpen} onClose={() => setSidebarOpen(false)} className="relative z-50 lg:hidden">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-md p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button onClick={() => setSidebarOpen(false)}>
              <XMarkIcon className="w-6 h-6 text-gray-500" />
            </button>
          </div>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-700 hover:bg-green-100 hover:text-green-700 font-medium transition"
                onClick={() => setSidebarOpen(false)}
                style={{ textDecoration: 'none' }}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </Dialog>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-64 lg:flex-col border-r border-transparent shadow-md backdrop-blur z-40">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4 text-white">Welcome</h2>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center space-x-3 px-4 py-2 rounded-lg text-white hover:bg-green-500 hover:text-white font-medium transition duration-300"
                style={{ textDecoration: 'none' }}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
