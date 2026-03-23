import React from 'react'
import { useSidebar } from '../../contexts/SidebarContext'
import { useLocation, useNavigate,NavLink } from 'react-router-dom'
import { useAuth } from '../../contexts/useAuth'

function Sidebar() {
   const { user, logout } = useAuth()
   const navigate = useNavigate()
  const { isOpen, closeSidebar } = useSidebar()


  const menuItems = [
    { to: '/admin/dashboard', icon: 'ri-dashboard-line', label: 'Dashboard' },
    { to: '/admin/projects', icon: 'ri-folder-line', label: 'Projects' },
    { to: '/admin/skills', icon: 'ri-star-line', label: 'Skills' },
    { to: '/admin/resume', icon: 'ri-file-text-line', label: 'Resume' },
    { to: '/admin/messages', icon: 'ri-mail-line', label: 'Messages' },
    { to: '/admin/experience', icon: 'ri-briefcase-line', label: 'Experience' },
    { to: '/admin/profile', icon: 'ri-user-settings-line', label: 'Profile' },
    { to: '/admin/hero-section', icon: 'ri-layout-top-line', label: 'Hero Section' },
    { to: '/admin/settings', icon: 'ri-settings-3-line', label: 'Settings' },
    { to: '/signup', icon: 'ri-arrow-right-line', label: 'signup' }
  ]

  const handleLinkClick = () => {
    closeSidebar()
  }


   const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}
      
      {/* Sidebar */}
     <aside className={`fixed left-0 top-0 h-full w-72 bg-gradient-to-b from-[#facc15] to-[#eab308] z-50 transition-all duration-300 ease-out shadow-2xl flex flex-col ${
  isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
}`}>
        <div className="h-20 flex items-center justify-between px-6 border-b border-black/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
              <i className="ri-dashboard-3-line text-[#facc15] text-xl" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-black">Admin Panel</h1>
              <p className="text-xs text-black/60">Portfolio Manager</p>
            </div>
          </div>
          {/* Mobile Close Button */}
          <button 
            onClick={closeSidebar}
            className="lg:hidden p-2 hover:bg-black/10 rounded-xl transition-colors"
          >
            <i className="ri-close-line text-xl text-black" />
          </button>
        </div>
        
        <nav className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-5rem)]" style={{
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(0,0,0,0.3) transparent'
        }}>
          <style jsx>{`
            nav::-webkit-scrollbar {
              width: 6px;
            }
            nav::-webkit-scrollbar-track {
              background: transparent;
            }
            nav::-webkit-scrollbar-thumb {
              background-color: rgba(0,0,0,0.3);
              border-radius: 3px;
            }
            nav::-webkit-scrollbar-thumb:hover {
              background-color: rgba(0,0,0,0.5);
            }
          `}</style>
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={handleLinkClick}
              className={({ isActive }) => 
                `flex items-center gap-4 px-5 py-3.5 rounded-xl transition-all duration-200 group ${
                  isActive 
                    ? 'bg-black text-white shadow-lg shadow-black/20' 
                    : 'text-black/80 hover:bg-black/10 hover:text-black'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                    isActive ? 'bg-[#facc15] text-black' : 'bg-black/10 group-hover:bg-black/20'
                  }`}>
                    <i className={`${item.icon} text-lg`} />
                  </div>
                  <span className="font-medium">{item.label}</span>
                  {isActive && <i className="ri-arrow-right-s-line ml-auto" />}
                </>
              )}
              
            </NavLink>
            
          ))}
          <button   onClick={handleLogout} className="w-full flex items-center gap-3 px-5 py-3.5 bg-red-600 text-white rounded-xl hover:bg-red-500 transition-all duration-200 font-medium shadow-lg shadow-red-500/30 hover:shadow-red-500/40">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <i className="ri-logout-box-r-line text-lg" />
            </div>
            <span>Logout</span>
          </button> 
        </nav>
        
       
      </aside>
    </>
  )
}

export default Sidebar
