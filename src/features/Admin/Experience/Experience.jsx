import React from 'react'

function Experience() {
  return (
  <div className="animate-fadeIn">
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-black">
            Experience &amp; Education
          </h1>
          <p className="text-gray-500 mt-1">
            Manage your work experience and education history
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1 w-fit">
        <button className="px-6 py-2.5 rounded-md font-medium transition-colors flex items-center gap-2 bg-white shadow-sm text-black">
          <i className="ri-briefcase-line" />
          Work Experience
        </button>
        <button className="px-6 py-2.5 rounded-md font-medium transition-colors flex items-center gap-2 text-gray-500 hover:text-black">
          <i className="ri-graduation-cap-line" />
          Education
        </button>
      </div>
      <div className="space-y-4">
        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-blue-100">
                <i className="ri-briefcase-line text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-black text-lg">
                  Senior Frontend Developer
                </h3>
                <p className="text-[#facc15] font-medium">
                  Tech Solutions Inc.
                </p>
                <p className="text-gray-400 text-sm mt-1">Jan 2022 - Present</p>
                <p className="text-gray-600 mt-3 leading-relaxed">
                  Leading frontend development team, implementing React
                  applications, optimizing performance, and mentoring junior
                  developers.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-2 text-gray-400 hover:text-[#facc15] transition-colors">
                <i className="ri-edit-line text-lg" />
              </button>
              <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                <i className="ri-delete-bin-line text-lg" />
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-blue-100">
                <i className="ri-briefcase-line text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-black text-lg">Web Developer</h3>
                <p className="text-[#facc15] font-medium">Digital Agency</p>
                <p className="text-gray-400 text-sm mt-1">
                  Jun 2020 - Dec 2021
                </p>
                <p className="text-gray-600 mt-3 leading-relaxed">
                  Developed responsive websites for various clients using React,
                  Node.js, and modern CSS frameworks.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-2 text-gray-400 hover:text-[#facc15] transition-colors">
                <i className="ri-edit-line text-lg" />
              </button>
              <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                <i className="ri-delete-bin-line text-lg" />
              </button>
            </div>
          </div>
        </div>
        <button className="w-full p-6 border-2 border-dashed border-gray-300 rounded-xl hover:border-[#facc15] hover:bg-[#facc15]/5 transition-all group">
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#facc15] transition-colors">
              <i className="ri-add-line text-xl text-gray-400 group-hover:text-black" />
            </div>
            <span className="font-medium text-gray-500 group-hover:text-black">
              Add Work Experience
            </span>
          </div>
        </button>
      </div>
    </div>
    </div>
  )
}

export default Experience
