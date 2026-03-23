import React from 'react'

function Profile() {
  return (
    
  <div className="animate-fadeIn">
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-black">Profile Management</h1>
        <p className="text-gray-500 mt-1">
          Manage your personal information and profile picture
        </p>
      </div>
      <form className="space-y-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-[#facc15] to-[#eab308] rounded-lg flex items-center justify-center">
              <i className="ri-image-line text-black text-xl" />
            </div>
            <h2 className="text-xl font-bold text-black">Profile Picture</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden border-4 border-[#facc15] shadow-lg">
                <i className="ri-user-line text-5xl text-gray-400" />
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="border-2 border-dashed rounded-xl p-8 text-center transition-all border-gray-300 hover:border-[#facc15] hover:bg-gray-50">
                <i className="ri-upload-cloud-2-line text-5xl text-gray-400 mb-3" />
                <p className="text-gray-700 font-medium mb-2">
                  Drag &amp; drop your image here
                </p>
                <p className="text-sm text-gray-500 mb-4">or</p>
                <label className="inline-flex items-center gap-2 px-6 py-3 bg-[#facc15] text-black rounded-lg font-medium hover:bg-[#eab308] transition-colors cursor-pointer">
                  <i className="ri-folder-image-line" />
                  <span>Browse Files</span>
                  <input accept="image/*" className="hidden" type="file" />
                </label>
                <p className="text-xs text-gray-500 mt-4">
                  Recommended: Square image, 400x400px or larger
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
              <i className="ri-user-settings-line text-white text-xl" />
            </div>
            <h2 className="text-xl font-bold text-black">
              Personal Information
            </h2>
          </div>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <i className="ri-user-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                  required=""
                  type="text"
                  defaultValue="Farhan Rangrez"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <i className="ri-phone-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  className="w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all border-gray-200 focus:ring-[#facc15] focus:border-transparent"
                  placeholder="+91 9876543210"
                  required=""
                  type="tel"
                  defaultValue="+91 7441199369"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Include country code (e.g., +91 for India)
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-[#facc15] to-[#eab308] rounded-lg flex items-center justify-center">
              <i className="ri-eye-line text-black text-xl" />
            </div>
            <h2 className="text-xl font-bold text-black">Preview</h2>
          </div>
          <div className="bg-white rounded-lg p-6 flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden border-2 border-[#facc15]">
              <i className="ri-user-line text-3xl text-gray-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">Farhan Rangrez</h3>
              <p className="text-gray-600 flex items-center gap-2 mt-1">
                <i className="ri-phone-line" />
                +91 7441199369
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-4">
          <button
            type="button"
            className="px-6 py-3 border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors whitespace-nowrap"
          >
            <i className="ri-refresh-line mr-2" />
            Reset
          </button>
          <button
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-[#facc15] to-[#eab308] text-black rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 whitespace-nowrap"
          >
            <i className="ri-save-line" />
            <span>Save Profile</span>
          </button>
        </div>
      </form>
    </div>
 
    </div>
  )
}

export default Profile
