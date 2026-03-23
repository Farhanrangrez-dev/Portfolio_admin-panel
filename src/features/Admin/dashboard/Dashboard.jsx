import React from 'react'

function Dashboard() {
  return (
  <div >
    <div className="animate-fadeIn">
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-black">Dashboard</h1>
            <p className="text-gray-500 mt-1">
              Welcome back! Here's what's happening with your portfolio.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">
              Thursday, February 26, 2026
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <a
            href="/admin/projects"
            className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#facc15]/30"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  Total Projects
                </p>
                <p className="text-4xl font-bold text-black mt-3 group-hover:text-[#facc15] transition-colors">
                  3
                </p>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <i className="ri-folder-3-line text-white text-2xl" />
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <span className="text-sm text-[#facc15] font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                View all <i className="ri-arrow-right-line" />
              </span>
            </div>
          </a>
          <a
            href="/admin/skills"
            className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#facc15]/30"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  Total Skills
                </p>
                <p className="text-4xl font-bold text-black mt-3 group-hover:text-[#facc15] transition-colors">
                  7
                </p>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <i className="ri-star-smile-line text-white text-2xl" />
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <span className="text-sm text-[#facc15] font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                View all <i className="ri-arrow-right-line" />
              </span>
            </div>
          </a>
          <a
            href="/admin/messages"
            className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#facc15]/30"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  New Messages
                </p>
                <p className="text-4xl font-bold text-black mt-3 group-hover:text-[#facc15] transition-colors">
                  3
                </p>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <i className="ri-mail-unread-line text-white text-2xl" />
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <span className="text-sm text-[#facc15] font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                View all <i className="ri-arrow-right-line" />
              </span>
            </div>
          </a>
          <a
            href="/admin/experience"
            className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#facc15]/30"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Experience</p>
                <p className="text-4xl font-bold text-black mt-3 group-hover:text-[#facc15] transition-colors">
                  3
                </p>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <i className="ri-briefcase-4-line text-white text-2xl" />
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <span className="text-sm text-[#facc15] font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                View all <i className="ri-arrow-right-line" />
              </span>
            </div>
          </a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#facc15] to-[#eab308] rounded-xl flex items-center justify-center">
                    <i className="ri-history-line text-black" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-black">
                      Recent Activity
                    </h2>
                    <p className="text-sm text-gray-500">
                      Latest updates to your portfolio
                    </p>
                  </div>
                </div>
                <button className="px-4 py-2 text-[#facc15] hover:bg-[#facc15]/10 rounded-lg font-medium text-sm transition-colors">
                  View All
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div
                  className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-xl transition-all duration-200 group animate-slideIn"
                  style={{ animationDelay: "0ms" }}
                >
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <i className="ri-briefcase-add-line text-xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-black truncate">
                      Added work at Digital Agency
                    </p>
                    <p className="text-sm text-gray-500">
                      Feb 26, 2026, 04:50 PM
                    </p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600" />
                </div>
                <div
                  className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-xl transition-all duration-200 group animate-slideIn"
                  style={{ animationDelay: "50ms" }}
                >
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <i className="ri-briefcase-add-line text-xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-black truncate">
                      Added education at University of Technology
                    </p>
                    <p className="text-sm text-gray-500">
                      Feb 26, 2026, 04:50 PM
                    </p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600" />
                </div>
                <div
                  className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-xl transition-all duration-200 group animate-slideIn"
                  style={{ animationDelay: "100ms" }}
                >
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <i className="ri-folder-add-line text-xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-black truncate">
                      Added project "E-Commerce Platform"
                    </p>
                    <p className="text-sm text-gray-500">
                      Feb 26, 2026, 01:42 PM
                    </p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600" />
                </div>
                <div
                  className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-xl transition-all duration-200 group animate-slideIn"
                  style={{ animationDelay: "150ms" }}
                >
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <i className="ri-folder-add-line text-xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-black truncate">
                      Added project "Portfolio Website"
                    </p>
                    <p className="text-sm text-gray-500">
                      Feb 26, 2026, 01:42 PM
                    </p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600" />
                </div>
                <div
                  className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-xl transition-all duration-200 group animate-slideIn"
                  style={{ animationDelay: "200ms" }}
                >
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <i className="ri-folder-add-line text-xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-black truncate">
                      Added project "Landing Page"
                    </p>
                    <p className="text-sm text-gray-500">
                      Feb 26, 2026, 01:42 PM
                    </p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600" />
                </div>
                <div
                  className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-xl transition-all duration-200 group animate-slideIn"
                  style={{ animationDelay: "250ms" }}
                >
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <i className="ri-mail-add-line text-xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-black truncate">
                      New message from Sarah Johnson
                    </p>
                    <p className="text-sm text-gray-500">
                      Feb 24, 2026, 01:41 PM
                    </p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-green-600" />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#facc15] to-[#eab308] rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-black text-lg mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <a
                  href="/admin/projects"
                  className="flex items-center gap-4 p-4 bg-black/10 hover:bg-black hover:text-white rounded-xl transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/10">
                    <i className="ri-add-line text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold">Add Project</p>
                    <p className="text-xs opacity-70">
                      Create new portfolio item
                    </p>
                  </div>
                </a>
                <a
                  href="/admin/skills"
                  className="flex items-center gap-4 p-4 bg-black/10 hover:bg-black hover:text-white rounded-xl transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/10">
                    <i className="ri-add-line text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold">Add Skill</p>
                    <p className="text-xs opacity-70">Update expertise</p>
                  </div>
                </a>
                <a
                  href="/admin/messages"
                  className="flex items-center gap-4 p-4 bg-black/10 hover:bg-black hover:text-white rounded-xl transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/10">
                    <i className="ri-mail-check-line text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold">Check Messages</p>
                    <p className="text-xs opacity-70">3 new messages</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-black text-lg mb-4">
                System Status
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <i className="ri-database-2-line text-green-600" />
                    </div>
                    <span className="text-gray-600">Database</span>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    Online
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <i className="ri-server-line text-green-600" />
                    </div>
                    <span className="text-gray-600">Server</span>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    Running
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <i className="ri-shield-check-line text-blue-600" />
                    </div>
                    <span className="text-gray-600">Security</span>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                    Protected
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n        @keyframes slideIn {\n          from {\n            opacity: 0;\n            transform: translateX(-20px);\n          }\n          to {\n            opacity: 1;\n            transform: translateX(0);\n          }\n        }\n        .animate-slideIn {\n          animation: slideIn 0.4s ease-out forwards;\n        }\n      "
          }}
        />
      </div>
    </div>
  
</div>

  )
}

export default Dashboard
