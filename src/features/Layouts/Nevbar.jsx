import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSidebar } from '../../contexts/SidebarContext'
import { useAuth } from '../../contexts/useAuth'

function Nevbar() {
  const { toggleSidebar } = useSidebar()
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = React.useState('Dashboard')
  const location = useLocation()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  useEffect(() => {
    // Get current page name from URL
    const path = location.pathname
    const pageName = path.split('/').pop() || 'dashboard'
    setCurrentPage(pageName.charAt(0).toUpperCase() + pageName.slice(1).replace('-', ' '))
  }, [location])

  return (
    <header className="sticky top-0 z-30 px-4 sm:px-6 py-3 sm:py-4 transition-all duration-300 bg-white/80 backdrop-blur-md shadow-sm lg:ml-72">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleSidebar}
            className="lg:hidden p-2 sm:p-2.5 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <i className="ri-menu-4-line text-xl sm:text-xl"></i>
          </button>
          
          {/* Breadcrumb Navigation */}
          <nav className="hidden sm:flex items-center gap-2 text-sm">
            <span className="text-gray-400">Admin</span>
            <i className="ri-arrow-right-s-line text-gray-400"></i>
            <span className="font-medium text-black capitalize">{currentPage}</span>
          </nav>
          
          {/* Mobile Page Title */}
          <div className="lg:hidden">
            <h2 className="font-semibold text-black text-sm sm:text-base capitalize">{currentPage}</h2>
          </div>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Notification Button */}
          <button className="relative p-2 sm:p-2.5 hover:bg-gray-100 rounded-xl transition-colors">
            <i className="ri-notification-3-line text-xl sm:text-xl text-gray-600"></i>
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          {/* User Profile Section */}
          <div className="flex items-center gap-2 sm:gap-3 pl-2 sm:pl-4 border-l border-gray-200">
            {/* User Info - Hidden on very small screens */}
            <div className="text-right hidden sm:block">
              <p className="font-medium text-black text-sm">{user?.fullName || 'Admin User'}</p>
              <p className="text-xs text-gray-500">Super Admin</p>
            </div>

            {/* User Avatar */}
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#facc15] to-[#eab308] flex items-center justify-center border-2 border-black shadow-lg">
              <i className="ri-user-line text-black text-sm sm:text-lg"></i>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="p-2 sm:p-2.5 hover:bg-red-50 rounded-xl transition-colors"
              title="Logout"
            >
              <i className="ri-logout-box-r-line text-xl text-gray-600 hover:text-red-500"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Nevbar
