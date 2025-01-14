import React from 'react';
import { Navigate } from 'react-router-dom';

export default function Dashboard() {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <div className="mt-4">
            <p>Welcome to Clash.Meta GUI</p>
            {/* Add your dashboard content here */}
          </div>
        </div>
      </div>
    </div>
  );
}