import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Rend/Nav';
import img1 from "../assets/Rectangle 81.png";
import img2 from "../assets/Rectangle 87.png";
import img3 from "../assets/Rectangle 83.png";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale } from 'chart.js';
import Modal from '../components/Modal';

const Dashboard = () => {
    ChartJS.register(LineElement, CategoryScale, LinearScale);

    const [searchTerm, setSearchTerm] = useState('');
    const [showAddModal, setShowAddModal] = useState(false);

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Monthly Revenue',
                data: [3000, 4000, 5000, 6000, 7000, 8000, 9000],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const properties = [
        { id: 1, picture: img1, head: "Landmark Living", location: "Banana Island, Ikoyi, Lagos", amount: "NGN 450k/Y" },
        { id: 3, picture: img3, head: "Coastal Comfort", location: "Lekki, Lagos", amount: "NGN 500k/Y" },
        { id: 3, picture: img3, head: "Coastal Comfort", location: "Lekki, Lagos", amount: "NGN 500k/Y" },

        { id: 1, picture: img1, head: "Landmark Living", location: "Banana Island, Ikoyi, Lagos", amount: "NGN 450k/Y" },
        { id: 1, picture: img1, head: "Landmark Living", location: "Banana Island, Ikoyi, Lagos", amount: "NGN 450k/Y" },
        { id: 2, picture: img2, head: "Urban Oasis", location: "Victoria Island, Lagos", amount: "NGN 700k/Y" },
        { id: 2, picture: img2, head: "Urban Oasis", location: "Victoria Island, Lagos", amount: "NGN 700k/Y" },
        { id: 3, picture: img3, head: "Coastal Comfort", location: "Lekki, Lagos", amount: "NGN 500k/Y" },
        { id: 3, picture: img3, head: "Coastal Comfort", location: "Lekki, Lagos", amount: "NGN 500k/Y" },
        { id: 3, picture: img3, head: "Coastal Comfort", location: "Lekki, Lagos", amount: "NGN 500k/Y" },
        { id: 3, picture: img3, head: "Coastal Comfort", location: "Lekki, Lagos", amount: "NGN 500k/Y" },

        { id: 2, picture: img2, head: "Urban Oasis", location: "Victoria Island, Lagos", amount: "NGN 700k/Y" },
        { id: 3, picture: img3, head: "Coastal Comfort", location: "Lekki, Lagos", amount: "NGN 500k/Y" },
        { id: 3, picture: img3, head: "Coastal Comfort", location: "Lekki, Lagos", amount: "NGN 500k/Y" },
        { id: 3, picture: img3, head: "Coastal Comfort", location: "Lekki, Lagos", amount: "NGN 500k/Y" },
        { id: 3, picture: img3, head: "Coastal Comfort", location: "Lekki, Lagos", amount: "NGN 500k/Y" },
        { id: 2, picture: img2, head: "Urban Oasis", location: "Victoria Island, Lagos", amount: "NGN 700k/Y" },
        { id: 2, picture: img2, head: "Urban Oasis", location: "Victoria Island, Lagos", amount: "NGN 700k/Y" },

        // Other properties
    ];

    // Fixed filtering logic by using property.head instead of property.name
    const filteredProperties = properties.filter((property) =>
        property.head.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Navbar />
            <div className="flex">
                <aside className="w-64 bg-[#0EA5E9] text-white h-screen">
                    <div className="p-4">
                        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
                        <ul className="space-y-4">
                            <li>
                                <Link to="/dashboard/overview" className="block py-2 px-4 hover:bg-[#ebeced] hover:text-black rounded">Overview</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/properties" className="block py-2 px-4 hover:bg-[#ebeced] hover:text-black rounded">Properties</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/reservations" className="block py-2 px-4 hover:bg-[#ebeced] hover:text-black rounded">Reservations</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/reports" className="block py-2 px-4 hover:bg-[#ebeced] hover:text-black rounded">Reports</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/settings" className="block py-2 px-4 hover:bg-[#ebeced] hover:text-black rounded">Settings</Link>
                            </li>
                        </ul>
                    </div>
                </aside>
                <main className="flex-1 p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-3xl font-semibold">Dashboard Overview</h2>
                        <button onClick={() => setShowAddModal(true)} className="bg-blue-500 text-white px-4 py-2 rounded">Add New Property</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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
                    <div className="mb-6">
                        <input
                            type="text"
                            placeholder="Search properties..."
                            value={searchTerm}
                            onChange={handleSearch}
                            className="border p-2 rounded w-full"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProperties.map((property) => (
                            <div key={property.id} className="bg-white p-4 rounded-lg shadow-md">
                                <img src={property.picture} alt={property.head} className="w-full h-40 object-cover rounded-t-lg mb-4" />
                                <h4 className="text-lg font-semibold mb-2">{property.head}</h4>
                                <p className="text-sm text-gray-500">{property.location}</p>
                                <p className="text-sm text-gray-500">{property.amount}</p>
                                <div className="mt-2 flex justify-between">
                                    <button className="bg-green-500 text-white px-2 py-1 rounded">Edit</button>
                                    <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8">
                        <h3 className="text-2xl font-semibold mb-4">Recent Activities</h3>
                        <ul className="space-y-4">
                            <li className="bg-white p-4 rounded-lg shadow-md">
                                <p className="font-semibold">New Property Added</p>
                                <p>Property "Sunny Villa" was added to your listings.</p>
                                <p className="text-sm text-gray-500">Just now</p>
                            </li>
                            <li className="bg-white p-4 rounded-lg shadow-md">
                                <p className="font-semibold">Reservation Confirmed</p>
                                <p>Reservation for "Mountain Lodge" confirmed for June 12.</p>
                                <p className="text-sm text-gray-500">2 hours ago</p>
                            </li>
                        </ul>
                    </div>
                    {showAddModal && <Modal onClose={() => setShowAddModal(false)} />}
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
