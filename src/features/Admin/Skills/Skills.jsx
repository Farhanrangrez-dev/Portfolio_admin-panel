import { useState, useEffect, useCallback } from 'react'
import { toast } from 'react-toastify'
import { useAuth } from '../../../contexts/useAuth'

const API_URL = '/api'

const categoryIcons = {
  Frontend: 'ri-layout-line',
  Backend: 'ri-server-line',
  Database: 'ri-database-2-line',
  Design: 'ri-palette-line',
  Tools: 'ri-tools-line',
  Other: 'ri-more-line',
}

const emptyForm = {
  name: '',
  category: 'Frontend',
  proficiency: 50,
}

function Skills() {
  const { user } = useAuth()
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState(emptyForm)
  const [submitting, setSubmitting] = useState(false)

  const getHeaders = useCallback(() => ({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${user?.token}`,
  }), [user?.token])

  const fetchSkills = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/skills`, { headers: getHeaders() })
      const data = await res.json()
      if (res.ok) setSkills(data)
    } catch {
      toast.error('Failed to load skills')
    } finally {
      setLoading(false)
    }
  }, [getHeaders])

  useEffect(() => {
    fetchSkills()
  }, [fetchSkills])

  const handleChange = (e) => {
    const value = e.target.name === 'proficiency' ? Number(e.target.value) : e.target.value
    setFormData({ ...formData, [e.target.name]: value })
  }

  const openAddModal = () => {
    setEditingId(null)
    setFormData(emptyForm)
    setIsOpen(true)
  }

  const openEditModal = (skill) => {
    setEditingId(skill._id)
    setFormData({
      name: skill.name,
      category: skill.category,
      proficiency: skill.proficiency,
    })
    setIsOpen(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      if (editingId) {
        const res = await fetch(`${API_URL}/skills/${editingId}`, {
          method: 'PUT',
          headers: getHeaders(),
          body: JSON.stringify(formData),
        })
        const data = await res.json()
        if (!res.ok) throw new Error(data.message)
        setSkills(skills.map((s) => (s._id === editingId ? data : s)))
        toast.success('Skill updated!')
      } else {
        const res = await fetch(`${API_URL}/skills`, {
          method: 'POST',
          headers: getHeaders(),
          body: JSON.stringify(formData),
        })
        const data = await res.json()
        if (!res.ok) throw new Error(data.message)
        setSkills([...skills, data])
        toast.success('Skill added!')
      }
      setIsOpen(false)
    } catch (error) {
      toast.error(error.message || 'Something went wrong')
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this skill?')) return

    try {
      const res = await fetch(`${API_URL}/skills/${id}`, {
        method: 'DELETE',
        headers: getHeaders(),
      })
      if (!res.ok) throw new Error('Failed to delete')
      setSkills(skills.filter((s) => s._id !== id))
      toast.success('Skill deleted!')
    } catch (error) {
      toast.error(error.message)
    }
  }

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = []
    acc[skill.category].push(skill)
    return acc
  }, {})

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-4 border-[#facc15] border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div>
      <div className="space-y-6 pb-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-black">Skills</h1>
            <p className="text-gray-500 mt-1">
              Manage your technical skills and expertise
            </p>
          </div>
          <button
            onClick={openAddModal}
            className="bg-[#facc15] text-black px-5 py-2.5 rounded-lg font-semibold hover:bg-[#eab308] transition-colors flex items-center gap-2 w-fit"
          >
            <i className="ri-add-line" />
            <span>Add Skill</span>
          </button>
        </div>

        {/* Skills grouped by category */}
        {Object.keys(groupedSkills).length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm">
            <i className="ri-code-s-slash-line text-5xl text-gray-300"></i>
            <p className="text-gray-400 mt-3 text-lg">No skills yet</p>
            <p className="text-gray-400 text-sm">Click "Add Skill" to get started</p>
          </div>
        ) : (
          <div className="space-y-8">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
              <div key={category} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#facc15] rounded-lg flex items-center justify-center">
                    <i className={`${categoryIcons[category] || 'ri-stack-line'} text-black`} />
                  </div>
                  <h2 className="text-xl font-bold text-black">{category}</h2>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                    {categorySkills.length}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {categorySkills.map((skill) => (
                    <div
                      key={skill._id}
                      className="p-4 border border-gray-100 rounded-xl hover:border-[#facc15]/30 hover:shadow-sm transition-all group"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-black">{skill.name}</h3>
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => openEditModal(skill)}
                            className="p-1.5 text-gray-400 hover:text-[#facc15] transition-colors"
                          >
                            <i className="ri-edit-line" />
                          </button>
                          <button
                            onClick={() => handleDelete(skill._id)}
                            className="p-1.5 text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <i className="ri-delete-bin-line" />
                          </button>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#facc15] rounded-full transition-all duration-500"
                            style={{ width: `${skill.proficiency}%` }}
                          />
                        </div>
                        <span className="absolute right-0 -top-6 text-sm font-medium text-gray-600">
                          {skill.proficiency}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add skill dashed button */}
        <button
          onClick={openAddModal}
          className="w-full p-8 border-2 border-dashed border-gray-300 rounded-xl hover:border-[#facc15] hover:bg-[#facc15]/5 transition-all group"
        >
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#facc15] transition-colors">
              <i className="ri-add-line text-2xl text-gray-400 group-hover:text-black" />
            </div>
            <span className="font-medium text-gray-500 group-hover:text-black">
              Add New Skill
            </span>
          </div>
        </button>
      </div>

      {/* ================= MODAL ================= */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-black">
                  {editingId ? 'Edit Skill' : 'Add New Skill'}
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <i className="ri-close-line text-2xl"></i>
                </button>
              </div>
            </div>

            <form className="p-6 space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Skill Name *
                </label>
                <input
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:border-transparent"
                  placeholder="e.g., React.js"
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Category *
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:border-transparent"
                  required
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                  <option value="Database">Database</option>
                  <option value="Design">Design</option>
                  <option value="Tools & Others">Tools & Others</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Proficiency ({formData.proficiency}%)
                </label>
                <input
                  min="0"
                  max="100"
                  value={formData.proficiency}
                  onChange={handleChange}
                  name="proficiency"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#facc15]"
                  type="range"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-3 border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-3 bg-[#facc15] text-black rounded-lg font-semibold hover:bg-[#eab308] transition-colors disabled:opacity-50 flex items-center gap-2"
                >
                  {submitting ? (
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <span>{editingId ? 'Update Skill' : 'Add Skill'}</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Skills
