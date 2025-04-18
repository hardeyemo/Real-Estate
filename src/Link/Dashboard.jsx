import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react'; // Import Menu and Close icons

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [showAddModal, setShowAddModal] = useState(false);

    const handleSearch = (e) => setSearchTerm(e.target.value);

    const filteredProperties = []; // Replace with actual filtering logic

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Mobile Navbar */}
            <div className="md:hidden flex justify-between items-center bg-[#0EA5E9] text-white p-4">
                <h1 className="text-xl font-bold">Dashboard</h1>
                <button onClick={() => setSidebarOpen(!sidebarOpen)}>
                    {sidebarOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                </button>
            </div>

            {/* Sidebar */}
            <aside
                className={`bg-[#0EA5E9] text-white w-64 p-4 absolute md:static h-full z-50 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
                    }`}
            >
                <h1 className="text-2xl font-bold mb-6 hidden md:block">Dashboard</h1>
                <ul className="space-y-4">
                    <li>
                        <Link to="/" className="block py-2 px-4 hover:bg-[#ebeced] hover:text-black rounded">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/dashboard/overview"
                            className="block py-2 px-4 hover:bg-[#ebeced] hover:text-black rounded"
                        >
                            Overview
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/dashboard/properties"
                            className="block py-2 px-4 hover:bg-[#ebeced] hover:text-black rounded"
                        >
                            Properties
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/dashboard/reservations"
                            className="block py-2 px-4 hover:bg-[#ebeced] hover:text-black rounded"
                        >
                            Reservations
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/dashboard/reports"
                            className="block py-2 px-4 hover:bg-[#ebeced] hover:text-black rounded"
                        >
                            Reports
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/dashboard/settings"
                            className="block py-2 px-4 hover:bg-[#ebeced] hover:text-black rounded"
                        >
                            Settings
                        </Link>
                    </li>
                </ul>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-4 md:p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-3xl font-semibold">Dashboard Overview</h2>
                    <button
                        onClick={() => setShowAddModal(true)}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Add New Property
                    </button>
                </div>

                {/* Grid for Dashboard Overview */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Total Properties</h3>
                        <p className="text-2xl">120</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Upcoming Reservations</h3>
                        <p className="text-2xl">15</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Total Revenue</h3>
                        <p className="text-2xl">$45,000</p>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Search properties..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="border p-2 rounded w-full"
                    />
                </div>

                {/* Grid for Properties */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredProperties.map((property) => (
                        <div key={property.id} className="bg-white p-4 rounded-lg shadow-md">
                            <img
                                src={property.picture}
                                alt={property.head}
                                className="w-full h-40 object-cover rounded-t-lg mb-4"
                            />
                            <h4 className="text-lg font-semibold mb-2">{property.head}</h4>
                            <p className="text-sm text-gray-500">{property.location}</p>
                            <p className="text-sm text-gray-500">{property.amount}</p>
                            <div className="mt-2 flex justify-between">
                                <button className="bg-green-500 text-white px-2 py-1 rounded">
                                    Edit
                                </button>
                                <button className="bg-red-500 text-white px-2 py-1 rounded">
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Recent Activities */}
                <div className="mt-8">
                    <h3 className="text-2xl font-semibold mb-4">Recent Activities</h3>
                    <ul className="space-y-4">
                        <li className="bg-white p-4 rounded-lg shadow-md">
                            <p className="font-semibold">New Property Added</p>
                            <p>Added to your listings.</p>
                            <p className="text-sm text-gray-500">Just now</p>
                        </li>
                        <li className="bg-white p-4 rounded-lg shadow-md">
                            <p className="font-semibold">Reservation Confirmed</p>
                            <p>Reservation confirmed for June 12.</p>
                            <p className="text-sm text-gray-500">2 hours ago</p>
                        </li>
                    </ul>
                </div>
                {showAddModal && <Modal onClose={() => setShowAddModal(false)} />}
            </main>
        </div>
    );
};

export default Dashboard;
