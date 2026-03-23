import React, { useState } from 'react'

function HeroSection() {

  const [activeTab, setActiveTab] = useState("hero");

  return (
  <div className="animate-fadeIn">
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-black">
          Hero Section Management
        </h1>
        <p className="text-gray-500 mt-1">
          Homepage ke hero section aur services ko customize karein
        </p>
      </div>

      {/* TAB BUTTONS */}
      <div className="bg-white rounded-xl p-2 shadow-sm inline-flex gap-2">

        {/* HERO BUTTON */}
        <button
          onClick={() => setActiveTab("hero")}
          className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
            activeTab === "hero"
            ? "bg-gradient-to-r from-[#facc15] to-[#eab308] text-black shadow-md"
            : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          <i className="ri-home-heart-line mr-2" />
          Hero Content
        </button>

        {/* SERVICES BUTTON */}
        <button
          onClick={() => setActiveTab("services")}
          className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
            activeTab === "services"
            ? "bg-gradient-to-r from-[#facc15] to-[#eab308] text-black shadow-md"
            : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          <i className="ri-service-line mr-2" />
          Services (What I Do)
        </button>

      </div>


      {/* HERO SECTION UI */}
      {activeTab === "hero" && (
<div className="space-y-6">
 
  <form className="space-y-6">
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-[#facc15] to-[#eab308] rounded-lg flex items-center justify-center">
          <i className="ri-text text-black text-xl" />
        </div>
        <h2 className="text-xl font-bold text-black">Text Content</h2>
      </div>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Greeting Text <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <i className="ri-hand-heart-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:border-transparent transition-all"
              placeholder="e.g., HI THERE"
              required=""
              type="text"
              defaultValue="HI THERE"
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Yeh text hero section ke top par dikhega
          </p>
        </div>
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Your Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <i className="ri-user-star-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:border-transparent transition-all"
              placeholder="e.g., I'M FARHAN"
              required=""
              type="text"
              defaultValue="I'M FARHAN"
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Apna naam greeting ke baad dikhega
          </p>
        </div>
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Professional Title <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <i className="ri-briefcase-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:border-transparent transition-all"
              placeholder="e.g., Full Stack Developer"
              required=""
              type="text"
              defaultValue="Full Stack Developer"
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Aapki professional title ya designation
          </p>
        </div>
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={5}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:border-transparent resize-none transition-all"
            placeholder="Apne baare mein kuch likhein..."
            required=""
            defaultValue={
              "I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user Thousands of clients have procured exceptional results while working with me."
            }
          />
          <p className="text-xs text-gray-500 mt-2">
            Yeh description hero section mein dikhega
          </p>
        </div>
      </div>
    </div>
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
          <i className="ri-palette-line text-white text-xl" />
        </div>
        <h2 className="text-xl font-bold text-black">Color Customization</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Background Color
          </label>
          <div className="flex items-center gap-3">
            <input
              className="w-16 h-12 rounded-lg border-2 border-gray-200 cursor-pointer"
              type="color"
              defaultValue="#ffffff"
            />
            <input
              className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:border-transparent"
              placeholder="#ffffff"
              type="text"
              defaultValue="#ffffff"
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Hero section ka background color
          </p>
        </div>
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Text Color
          </label>
          <div className="flex items-center gap-3">
            <input
              className="w-16 h-12 rounded-lg border-2 border-gray-200 cursor-pointer"
              type="color"
              defaultValue="#000000"
            />
            <input
              className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:border-transparent"
              placeholder="#000000"
              type="text"
              defaultValue="#000000"
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Text ka color select karein
          </p>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-[#facc15] to-[#eab308] rounded-lg flex items-center justify-center">
          <i className="ri-eye-line text-black text-xl" />
        </div>
        <h2 className="text-xl font-bold text-black">Live Preview</h2>
      </div>
      <div
        className="rounded-xl p-8 md:p-12 min-h-[400px] flex flex-col items-center justify-center text-center transition-all"
        style={{ backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 0, 0)" }}
      >
        <p
          className="text-sm md:text-base font-medium mb-2"
          style={{ color: "rgb(250, 204, 21)" }}
        >
          HI THERE
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">I'M FARHAN</h1>
        <h2
          className="text-2xl md:text-4xl font-semibold mb-6"
          style={{ color: "rgb(250, 204, 21)" }}
        >
          Full Stack Developer
        </h2>
        <p className="text-base md:text-lg max-w-3xl leading-relaxed opacity-80">
          I'm a designer &amp; developer with a passion for web design. I enjoy
          developing simple, clean and slick websites that provide real value to
          the end user Thousands of clients have procured exceptional results
          while working with me.
        </p>
      </div>
    </div>
    <div className="flex items-center justify-end gap-4">
      <button
        type="button"
        className="px-6 py-3 border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors whitespace-nowrap"
      >
        <i className="ri-refresh-line mr-2" />
        Reset to Default
      </button>
      <button
        type="submit"
        className="px-8 py-3 bg-gradient-to-r from-[#facc15] to-[#eab308] text-black rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 whitespace-nowrap"
      >
        <i className="ri-save-line" />
        <span>Save Changes</span>
      </button>
    </div>
  </form>
</div>

      )}



      {/* SERVICES UI */}
      {activeTab === "services" && (
<div className="space-y-6">
  <form className="space-y-6">
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#facc15] to-[#eab308] rounded-lg flex items-center justify-center">
            <i className="ri-service-line text-black text-xl" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-black">
              Services Management
            </h2>
            <p className="text-sm text-gray-500">
              "What I Do?" section ke services manage karein
            </p>
          </div>
        </div>
        <button
          type="button"
          className="px-4 py-2 bg-gradient-to-r from-[#facc15] to-[#eab308] text-black rounded-lg font-medium hover:shadow-lg transition-all flex items-center gap-2 whitespace-nowrap"
        >
          <i className="ri-add-line" />
          Add Service
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          className="border-2 border-gray-200 rounded-xl p-6 hover:border-[#facc15] transition-all group"
          style={{ backgroundColor: "rgb(255, 255, 255)" }}
        >
          <div className="flex items-start justify-between mb-4">
            <div
              className="w-14 h-14 rounded-lg flex items-center justify-center"
              style={{
                backgroundColor: "rgb(250, 204, 21)",
                color: "rgb(0, 0, 0)"
              }}
            >
              <i className="ri-computer-line text-2xl" />
            </div>
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                type="button"
                className="w-8 h-8 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center"
              >
                <i className="ri-edit-line text-sm" />
              </button>
              <button
                type="button"
                className="w-8 h-8 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center"
              >
                <i className="ri-delete-bin-line text-sm" />
              </button>
            </div>
          </div>
          <h3
            className="text-xl font-bold mb-3"
            style={{ color: "rgb(17, 17, 17)" }}
          >
            Web Design
          </h3>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "rgb(107, 114, 128)" }}
          >
            Web designing is the process of planning, conceptualizing, and
            implementing the plan for designing a website in a way that is
            functional and offers a good user experience
          </p>
        </div>
        <div
          className="border-2 border-gray-200 rounded-xl p-6 hover:border-[#facc15] transition-all group"
          style={{ backgroundColor: "rgb(250, 204, 21)" }}
        >
          <div className="flex items-start justify-between mb-4">
            <div
              className="w-14 h-14 rounded-lg flex items-center justify-center"
              style={{
                backgroundColor: "rgb(0, 0, 0)",
                color: "rgb(250, 204, 21)"
              }}
            >
              <i className="ri-tools-line text-2xl" />
            </div>
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                type="button"
                className="w-8 h-8 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center"
              >
                <i className="ri-edit-line text-sm" />
              </button>
              <button
                type="button"
                className="w-8 h-8 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center"
              >
                <i className="ri-delete-bin-line text-sm" />
              </button>
            </div>
          </div>
          <h3
            className="text-xl font-bold mb-3"
            style={{ color: "rgb(0, 0, 0)" }}
          >
            Development
          </h3>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "rgb(0, 0, 0)" }}
          >
            Development refers to the process of growth, progress, or
            advancement, particularly in the context of social, economic,
            technological, or personal spheres.
          </p>
        </div>
        <div
          className="border-2 border-gray-200 rounded-xl p-6 hover:border-[#facc15] transition-all group"
          style={{ backgroundColor: "rgb(255, 255, 255)" }}
        >
          <div className="flex items-start justify-between mb-4">
            <div
              className="w-14 h-14 rounded-lg flex items-center justify-center"
              style={{
                backgroundColor: "rgb(250, 204, 21)",
                color: "rgb(0, 0, 0)"
              }}
            >
              <i className="ri-camera-line text-2xl" />
            </div>
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                type="button"
                className="w-8 h-8 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center"
              >
                <i className="ri-edit-line text-sm" />
              </button>
              <button
                type="button"
                className="w-8 h-8 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center"
              >
                <i className="ri-delete-bin-line text-sm" />
              </button>
            </div>
          </div>
          <h3
            className="text-xl font-bold mb-3"
            style={{ color: "rgb(17, 17, 17)" }}
          >
            Photography
          </h3>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "rgb(107, 114, 128)" }}
          >
            Photography is the art, science, and practice of capturing and
            creating images using light. It involves using a camera or other
            light-sensitive devices to record visual information
          </p>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-[#facc15] to-[#eab308] rounded-lg flex items-center justify-center">
          <i className="ri-eye-line text-black text-xl" />
        </div>
        <h2 className="text-xl font-bold text-black">Services Preview</h2>
      </div>
      <div className="bg-white rounded-xl p-8 md:p-12">
        <div className="text-center mb-12">
          <span className="inline-block px-6 py-2 bg-[#facc15] text-black font-semibold rounded-full mb-6">
            What I Do?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            How I can help your next project
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className="rounded-xl p-8 text-center transition-all hover:shadow-lg"
            style={{ backgroundColor: "rgb(255, 255, 255)" }}
          >
            <div
              className="w-16 h-16 mx-auto mb-6 rounded-lg flex items-center justify-center"
              style={{
                backgroundColor: "rgb(250, 204, 21)",
                color: "rgb(0, 0, 0)"
              }}
            >
              <i className="ri-computer-line text-3xl" />
            </div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "rgb(17, 17, 17)" }}
            >
              Web Design
            </h3>
            <p
              className="leading-relaxed"
              style={{ color: "rgb(107, 114, 128)" }}
            >
              Web designing is the process of planning, conceptualizing, and
              implementing the plan for designing a website in a way that is
              functional and offers a good user experience
            </p>
          </div>
          <div
            className="rounded-xl p-8 text-center transition-all hover:shadow-lg"
            style={{ backgroundColor: "rgb(250, 204, 21)" }}
          >
            <div
              className="w-16 h-16 mx-auto mb-6 rounded-lg flex items-center justify-center"
              style={{
                backgroundColor: "rgb(0, 0, 0)",
                color: "rgb(250, 204, 21)"
              }}
            >
              <i className="ri-tools-line text-3xl" />
            </div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "rgb(0, 0, 0)" }}
            >
              Development
            </h3>
            <p className="leading-relaxed" style={{ color: "rgb(0, 0, 0)" }}>
              Development refers to the process of growth, progress, or
              advancement, particularly in the context of social, economic,
              technological, or personal spheres.
            </p>
          </div>
          <div
            className="rounded-xl p-8 text-center transition-all hover:shadow-lg"
            style={{ backgroundColor: "rgb(255, 255, 255)" }}
          >
            <div
              className="w-16 h-16 mx-auto mb-6 rounded-lg flex items-center justify-center"
              style={{
                backgroundColor: "rgb(250, 204, 21)",
                color: "rgb(0, 0, 0)"
              }}
            >
              <i className="ri-camera-line text-3xl" />
            </div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "rgb(17, 17, 17)" }}
            >
              Photography
            </h3>
            <p
              className="leading-relaxed"
              style={{ color: "rgb(107, 114, 128)" }}
            >
              Photography is the art, science, and practice of capturing and
              creating images using light. It involves using a camera or other
              light-sensitive devices to record visual information
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-end gap-4">
      <button
        type="button"
        className="px-6 py-3 border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors whitespace-nowrap"
      >
        <i className="ri-refresh-line mr-2" />
        Reset to Default
      </button>
      <button
        type="submit"
        className="px-8 py-3 bg-gradient-to-r from-[#facc15] to-[#eab308] text-black rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 whitespace-nowrap"
      >
        <i className="ri-save-line" />
        <span>Save Changes</span>
      </button>
    </div>
  </form>
</div>

      )}


    </div>
    </div>
  )
}

export default HeroSection