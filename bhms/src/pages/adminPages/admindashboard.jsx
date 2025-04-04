import React from 'react';
import AdminHeader from './adminheader';
const AdminDashboard = () => {
    return (
        <div className="container mt-5">
            <AdminHeader />
            <h1 className="text-center mb-4">Admin Dashboard</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="card text-white bg-primary mb-3">
                        <div className="card-header">Users</div>
                        <div className="card-body">
                            <h5 className="card-title">Manage Users</h5>
                            <p className="card-text">View, add, or remove users from the system.</p>
                            <button className="btn btn-light">Go to Users</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-white bg-success mb-3">
                        <div className="card-header">Reports</div>
                        <div className="card-body">
                            <h5 className="card-title">View Reports</h5>
                            <p className="card-text">Access detailed system reports and analytics.</p>
                            <button className="btn btn-light">View Reports</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-white bg-danger mb-3">
                        <div className="card-header">Settings</div>
                        <div className="card-body">
                            <h5 className="card-title">System Settings</h5>
                            <p className="card-text">Configure system preferences and settings.</p>
                            <button className="btn btn-light">Go to Settings</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;