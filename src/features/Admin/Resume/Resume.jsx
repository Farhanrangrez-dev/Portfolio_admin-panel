import React, { useState, useCallback, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useAuth } from '../../../contexts/useAuth'

const API_URL = 'https://portfoliobackend-production-5fd0.up.railway.app/api'

function Resume() {
  const { user } = useAuth()
  const [resume, setResume] = useState(null)

  const [selectedFile, setSelectedFile] = useState(null)
  const [loading, setLoading] = useState(false)

  const getHeaders = useCallback(() => ({
    Authorization: `Bearer ${user?.token}`,
  }), [user?.token])

  // ✅ File select handler
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    if (file.type !== 'application/pdf') {
      toast.error('Only PDF allowed ❌')
      return
    }

    setSelectedFile(file)

    // 🔥 Direct upload after select
    uploadFile(file)
  }

  // ✅ API CALL
  const uploadFile = async (file) => {
    const formData = new FormData()
    formData.append('resume', file)

    try {
      setLoading(true)

      const res = await fetch(`${API_URL}/resume`, {
        method: 'POST',
        headers: getHeaders(), // ❌ no Content-Type here
        body: formData,
      })

      const data = await res.json()

      if (!res.ok) throw new Error(data.message)

      toast.success('Resume uploaded successfully ✅')
      console.log(data)
      fetchResume()
    } catch (error) {
      toast.error(error.message || 'Upload failed ❌')
    } finally {
      setLoading(false)
    }
  }



   const fetchResume = useCallback(async () => {
      try {
        const res = await fetch(`${API_URL}/resume`, { headers: getHeaders() })
        const data = await res.json()
        if (res.ok) setResume(data)
      } catch {
        toast.error('Failed to load Resume')
      } finally {
        setLoading(false)
      }
    }, [getHeaders])
  
    useEffect(() => {
      fetchResume()
    }, [fetchResume])



const handleDownload = async () => {
  if (!resume || !resume.filepath) {
    toast.error('No resume found ❌')
    return
  }

  try {
    // ✅ LIVE BACKEND URL USE KARO
    const fileUrl = `https://portfoliobackend-production-5fd0.up.railway.app${resume.filepath}`

    const res = await fetch(fileUrl)

    if (!res.ok) throw new Error('File not found')

    const blob = await res.blob()

    const url = window.URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = url
    link.download = resume.filename || 'resume.pdf' // ✅ force download

    document.body.appendChild(link)
    link.click()
    link.remove()

    window.URL.revokeObjectURL(url)

  } catch (error) {
    toast.error('Download failed ❌')
  }
}

 const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this skill?')) return

    try {
      const res = await fetch(`${API_URL}/resume/`, {
        method: 'DELETE',
        headers: getHeaders(),
      })
      if (!res.ok) throw new Error('Failed to delete')
      setResume(Resume.filter((s) => s._id !== id))
      toast.success('Skill deleted!')
    } catch (error) {
      toast.error(error.message)
    }
  }

  
  return (
    <div>

      <div className="space-y-6 pb-5">
        <div>
          <h1 className="text-3xl font-bold text-black">Resume Management</h1>
          <p className="text-gray-500 mt-1">Upload and manage your resume/CV</p>
        </div>

        <div className="border-2 border-dashed rounded-2xl p-12 text-center transition-all border-gray-300 hover:border-[#facc15]">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-upload-cloud-2-line text-3xl text-gray-400" />
          </div>

          <h3 className="text-xl font-semibold text-black mb-2">
            Drop your resume here
          </h3>

          <p className="text-gray-500 mb-6">or click to browse files</p>
          <p className="text-sm text-gray-400 mb-6">PDF files only, max 10MB</p>

          {/* ✅ ONLY CHANGE HERE (logic added) */}
          <label className="inline-flex items-center gap-2 px-6 py-3 bg-[#facc15] text-black rounded-lg font-semibold hover:bg-[#eab308] transition-colors cursor-pointer">
            <i className="ri-folder-open-line" />
            <span>{loading ? 'Uploading...' : 'Choose File'}</span>
            <input
              accept=".pdf"
              className="hidden"
              type="file"
              onChange={handleFileChange}
            />
          </label>
        </div>




{/*  */}
         <div className="bg-white rounded-xl p-8 shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-24 h-24 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
            <i className="ri-file-pdf-line text-5xl text-red-500" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-black mb-2">
              {resume?.filename || 'No file'}
            </h3>
            <div className="flex items-center gap-4 text-gray-500">
              <span className="flex items-center gap-2">
                <i className="ri-hard-drive-2-line" />
                379.5 KB
              </span>
              <span className="flex items-center gap-2">
                <i className="ri-calendar-line" />
                {resume?.createdAt && new Date(resume.createdAt).toLocaleDateString('en-IN')}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
  <button
  onClick={handleDownload}
  className="flex-1 md:flex-none px-5 py-2.5 bg-[#facc15] text-black rounded-lg font-medium hover:bg-[#eab308] transition-colors flex items-center justify-center gap-2"
>
  <i className="ri-download-line" />
  <span>Download</span>
</button>
            <label className="flex-1 md:flex-none px-5 py-2.5 border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 cursor-pointer">
              <i className="ri-restart-line" />
              <span>Replace</span>
              <input accept=".pdf" className="hidden" type="file" />
            </label>
            <button   onClick={() => handleDelete(resume)} className="px-4 py-2.5 border border-red-200 text-red-500 rounded-lg hover:bg-red-50 transition-colors">
              <i className="ri-delete-bin-line" />
            </button>
          </div>
        </div>
      </div>

{/*  */}
      <div className="bg-blue-50 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
            <i className="ri-information-line text-blue-600 text-xl" />
          </div>
          <div>
            <h3 className="font-semibold text-black mb-2">Resume Guidelines</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <i className="ri-check-line text-green-500" />
                Upload your resume in PDF format for best compatibility
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-check-line text-green-500" />
                Keep file size under 10MB for optimal performance
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-check-line text-green-500" />
                Ensure your resume is up-to-date with latest experience
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-check-line text-green-500" />
                Include relevant keywords for better visibility
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Resume
















// <main className="flex-1 p-6">
//   <div className="animate-fadeIn">
//     <div className="space-y-6">
//       <div>
//         <h1 className="text-3xl font-bold text-black">Resume Management</h1>
//         <p className="text-gray-500 mt-1">Upload and manage your resume/CV</p>
//       </div>
   
//       <div className="bg-blue-50 rounded-xl p-6">
//         <div className="flex items-start gap-4">
//           <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
//             <i className="ri-information-line text-blue-600 text-xl" />
//           </div>
//           <div>
//             <h3 className="font-semibold text-black mb-2">Resume Guidelines</h3>
//             <ul className="space-y-2 text-gray-600">
//               <li className="flex items-center gap-2">
//                 <i className="ri-check-line text-green-500" />
//                 Upload your resume in PDF format for best compatibility
//               </li>
//               <li className="flex items-center gap-2">
//                 <i className="ri-check-line text-green-500" />
//                 Keep file size under 10MB for optimal performance
//               </li>
//               <li className="flex items-center gap-2">
//                 <i className="ri-check-line text-green-500" />
//                 Ensure your resume is up-to-date with latest experience
//               </li>
//               <li className="flex items-center gap-2">
//                 <i className="ri-check-line text-green-500" />
//                 Include relevant keywords for better visibility
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </main>
