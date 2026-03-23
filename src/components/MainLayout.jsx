import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../features/Layouts/Sidebar'
import Nevbar from '../features/Layouts/Nevbar'

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="lg:ml-72 flex flex-col min-h-screen">
        <Nevbar />
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

