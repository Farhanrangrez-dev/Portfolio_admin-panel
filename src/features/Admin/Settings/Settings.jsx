import React from 'react'

function Settings() {
  return (
    <div>
  <div className="animate-fadeIn">
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-black">Settings</h1>
        <p className="text-gray-500 mt-1">
          Manage your contact information and social links
        </p>
      </div>
      <form className="space-y-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#facc15] rounded-lg flex items-center justify-center">
              <i className="ri-contacts-line text-black" />
            </div>
            <h2 className="text-xl font-bold text-black">
              Contact Information
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Phone Number
              </label>
              <div className="relative">
                <i className="ri-phone-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:border-transparent"
                  placeholder="+91 9876543210"
                  type="tel"
                  defaultValue="+91 7441199369"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Email Address
              </label>
              <div className="relative">
                <i className="ri-mail-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:border-transparent"
                  placeholder="your@email.com"
                  type="email"
                  defaultValue="contact@farhanrangrez.com"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
              <i className="ri-share-line text-white" />
            </div>
            <h2 className="text-xl font-bold text-black">Social Links</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                <i className="ri-linkedin-box-line text-blue-600 text-xl" />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-black mb-1">
                  LinkedIn
                </label>
                <input
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:border-transparent"
                  placeholder="https://linkedin.com/in/username"
                  type="url"
                  defaultValue="https://linkedin.com/in/farhanrangrez"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                <i className="ri-github-line text-gray-800 text-xl" />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-black mb-1">
                  GitHub
                </label>
                <input
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:border-transparent"
                  placeholder="https://github.com/username"
                  type="url"
                  defaultValue="https://github.com/farhanrangrez"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center shrink-0">
                <i className="ri-twitter-x-line text-sky-500 text-xl" />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-black mb-1">
                  Twitter / X
                </label>
                <input
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:border-transparent"
                  placeholder="https://twitter.com/username"
                  type="url"
                  defaultValue=""
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center shrink-0">
                <i className="ri-instagram-line text-pink-600 text-xl" />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-black mb-1">
                  Instagram
                </label>
                <input
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:border-transparent"
                  placeholder="https://instagram.com/username"
                  type="url"
                  defaultValue=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <i className="ri-shield-user-line text-purple-600" />
            </div>
            <h2 className="text-xl font-bold text-black">Account Security</h2>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h3 className="font-medium text-black">Change Password</h3>
              <p className="text-sm text-gray-500">
                Update your admin account password
              </p>
            </div>
            <button
              type="button"
              className="px-4 py-2 border border-gray-200 rounded-lg font-medium hover:bg-white transition-colors"
            >
              Change
            </button>
          </div>
        </div>
        <div className="flex items-center justify-end gap-4">
          <button
            type="button"
            className="px-6 py-3 border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Reset
          </button>
          <button
            type="submit"
            className="px-8 py-3 bg-[#facc15] text-black rounded-lg font-semibold hover:bg-[#eab308] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <i className="ri-save-line" />
            <span>Save Settings</span>
          </button>
        </div>
      </form>
    </div>
  </div>

    </div>
  )
}

export default Settings
