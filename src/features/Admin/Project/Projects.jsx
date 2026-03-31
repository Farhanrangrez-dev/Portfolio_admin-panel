import { useState, useEffect, useCallback } from 'react'
import { toast } from 'react-toastify'
import { useAuth } from '../../../contexts/useAuth'

const API_URL = 'https://portfolio-backend-n6et.onrender.com/api'

const categoryStyles = {
  React: 'bg-blue-100 text-blue-700',
  HTML: 'bg-orange-100 text-orange-700',
  Fullstack: 'bg-purple-100 text-purple-700',
}

const emptyForm = {
  title: '',
  description: '',
  image: '',
  category: 'React',
  startDate: '',
  endDate: '',
  liveUrl: '',
  githubUrl: '',
  technologies: [],
}

function Projects() {
  const { user } = useAuth()
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState(emptyForm)
  const [submitting, setSubmitting] = useState(false)

  const getHeaders = useCallback(() => ({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${user?.token}`,
  }), [user?.token])

  const fetchProjects = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/projects`, { headers: getHeaders() })
      const data = await res.json()
      if (res.ok) setProjects(data)
    } catch {
      toast.error('Failed to load projects')
    } finally {
      setLoading(false)
    }
  }, [getHeaders])

  useEffect(() => {
    fetchProjects()
  }, [fetchProjects])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const openAddModal = () => {
    setEditingId(null)
    setFormData(emptyForm)
    setIsOpen(true)
  }

  const openEditModal = (project) => {
    setEditingId(project._id)
    setFormData({
      title: project.title,
      description: project.description,
      image: project.image || '',
      category: project.category,
      startDate: project.startDate ? project.startDate.slice(0, 10) : '',
      endDate: project.endDate ? project.endDate.slice(0, 10) : '',
      liveUrl: project.liveUrl || '',
      githubUrl: project.githubUrl || '',
      technologies: project.technologies || []
    })
    setIsOpen(true)
  }

const handleSubmit = async (e) => {
  e.preventDefault()
  setSubmitting(true)

  try {

    // ✅ check: image file hai ya nahi
   const isFile = formData.image && typeof formData.image !== "string"

    let body
    let headers

    if (isFile) {
      // ✅ FormData only when image present
      const form = new FormData()

      Object.keys(formData).forEach((key) => {
        if (key === "image") {
          form.append("image", formData.image) // file
        } else if (key === "technologies") {
          form.append("technologies", JSON.stringify(formData.technologies))
        } else {
          form.append(key, formData[key])
        }
      })
      body = form
      headers = {
        Authorization: `Bearer ${user?.token}` // ❌ no content-type
      }

    } else {
      // ✅ Normal JSON (no change)
    body = JSON.stringify({
  ...formData,
  technologies: formData.technologies
})
      headers = getHeaders()
    }

    let res

    if (editingId) {
      res = await fetch(`${API_URL}/projects/${editingId}`, {
        method: 'PUT',
        headers,
        body,
      })
    } else {
      res = await fetch(`${API_URL}/projects`, {
        method: 'POST',
        headers,
        body,
      })
    }
  
    
let result;

try {
  result = await res.json();
} catch (err) {
  throw new Error("Invalid server response");
}

if (!res.ok) throw new Error(result.message)

// ✅ yaha fix hai
const projectData = result?.data || result;

if (!projectData) {
  toast.error("Invalid server response");
  return;
}

if (editingId) {
  setProjects(prev =>
  prev
    .map((p) => (p._id === editingId ? projectData : p))
    .filter(Boolean)
)
  toast.success('Project updated!')
} else {
  setProjects(prev => [projectData, ...prev])
  toast.success('Project added!')
}

    setIsOpen(false)

  } catch (error) {
    toast.error(error.message || 'Something went wrong')
  } finally {
    setSubmitting(false)
  }
}

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return

    try {
      const res = await fetch(`${API_URL}/projects/${id}`, {
        method: 'DELETE',
        headers: getHeaders(),
      })
      if (!res.ok) throw new Error('Failed to delete')
      setProjects(projects.filter((p) => p._id !== id))
      toast.success('Project deleted!')
    } catch (error) {
      toast.error(error.message)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-4 border-[#facc15] border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }
 
  return (
    <div>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-black">Projects</h1>
            <p className="text-gray-500 mt-1">Manage your portfolio projects</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={openAddModal}
              className="bg-[#facc15] text-black px-5 py-2.5 rounded-lg font-semibold hover:bg-[#eab308] transition-colors flex items-center gap-2"
            >
              <i className="ri-add-line" />
              <span>Add Project</span>
            </button>
          </div>
        </div>

        {/* Project Cards */}
        {projects.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm">
            <i className="ri-folder-open-line text-5xl text-gray-300"></i>
            <p className="text-gray-400 mt-3 text-lg">No projects yet</p>
            <p className="text-gray-400 text-sm">Click "Add Project" to get started</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
           {projects?.filter(Boolean).map((project) => (
              <div
                key={project._id}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
                  {project.image ? (
                    <img
                      alt={project.title}
                      className="w-full h-full object-cover"
                   src={project?.image || ""}
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <i className="ri-image-line text-4xl text-gray-300"></i>
                    </div>
                  )}
                  <span
                    className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${categoryStyles[project.category] || 'bg-gray-100 text-gray-700'}`}
                  >
                    {project.category}
                  </span>
                </div>
                <div className="p-5 flex-1">
                  <h3 className="font-bold text-black text-lg mb-2">{project.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-3">
                    {project.description}
                  </p>
                  {(project.startDate || project.endDate) && (
                    <div className="flex items-center gap-1 text-xs text-gray-400 mb-3">
                      <i className="ri-calendar-line"></i>
                      <span>
                        {project.startDate && new Date(project.startDate).toLocaleDateString()}
                        {project.startDate && project.endDate && ' – '}
                        {project.endDate && new Date(project.endDate).toLocaleDateString()}
                      </span>
                    </div>
                  )}

                  {project.technologies?.map((tech, index) => (
                    <button
                      key={index}
                      className="px-4 py-1 rounded-full text-sm border transition bg-gray-100 text-gray-700 border-gray-200 mr-2 mb-2"
                    >
                      {tech}
                    </button>
                  ))}
                  
                  <div className="flex items-center gap-4 mb-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#facc15] transition-colors"
                        title="Live Demo"
                      >
                        <i className="ri-external-link-line text-xl" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-black transition-colors"
                        title="GitHub"
                      >
                        <i className="ri-github-line text-xl" />
                      </a>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => openEditModal(project)}
                      className="flex-1 bg-[#facc15] text-black py-2 rounded-lg font-medium hover:bg-[#eab308] transition-colors flex items-center justify-center gap-2"
                    >
                      <i className="ri-edit-line" />
                      <span>Edit</span>
                    </button>
                    <button
                      onClick={() => handleDelete(project._id)}
                      className="px-4 py-2 border border-red-200 text-red-500 rounded-lg hover:bg-red-50 transition-colors"
                    >
                      <i className="ri-delete-bin-line" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ================= MODAL ================= */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-black">
                  {editingId ? 'Edit Project' : 'Add New Project'}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-black mb-2">
                    Project Title *
                  </label>
                  <input
                   className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:border-transparent"
                    placeholder="Enter project title"
                    required
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>

                {/* <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-black mb-2">
                    Project Image URL
                  </label>
                  <input
                   
                    placeholder="https://example.com/image.jpg"
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                  />
                </div> */}
     <div className="md:col-span-2">
  <label className="block text-sm font-medium text-black mb-2">
    Project Image Upload
  </label>

  <input
    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:border-transparent"
    type="file"
    accept="image/*"
    onChange={(e) => {
      const file = e.target.files[0];
      if (file) {
        setFormData({ ...formData, image: file }); // ✅ correct
      }
    }}
  />
</div>


                

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-black mb-2">
                    Description *
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:border-transparent resize-none"
                    placeholder="Describe your project..."
                    required
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  ></textarea>
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
                    <option value="Html/Css">Html/Css</option>
                    <option value="Javascript"> Javascript</option>
                    <option value="React">Reactjs</option>
                    <option value="Fullstack">Fullstack</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Start Date
                  </label>
                  <input
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:border-transparent"
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    End Date
                  </label>
                  <input
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:border-transparent"
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Live URL
                  </label>
                  <input
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:border-transparent"
                    placeholder="https://example.com"
                    type="url"
                    name="liveUrl"
                    value={formData.liveUrl}
                    onChange={handleChange}
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-black mb-2">
                    GitHub URL
                  </label>
                  <input
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:border-transparent"
                    placeholder="https://github.com/username/repo"
                    type="url"
                    name="githubUrl"
                    value={formData.githubUrl}
                    onChange={handleChange}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-black mb-2">
                    Technologies Used *
                  </label>

                  <div className="flex flex-wrap gap-2">
                    {[
                      // Programming Languages
                      "JavaScript",
                      "Python",
                      "Java",
                      "Go",
                      "Rust",
                      "PHP",
                      "Ruby",
                      "Kotlin",
                      "Swift",

                      // Frontend
                      "HTML",
                      "CSS",
                      "React",
                      "Next.js",
                      "Vue.js",
                      "Angular",
                      "Svelte",
                      "Redux",
                      "React Native",
                      "Tailwind",
                      "Bootstrap",
                      "Material UI",
                      "Sass",

                      // Backend
                      "Node.js",
                      "Express",
                      "NestJS",
                      "Django",
                      "Flask",
                      "Laravel",
                      "Spring Boot",

                      // Databases
                      "MongoDB",
                      "MySQL",
                      "PostgreSQL",
                      "SQLite",
                      "Redis",
                      "Firebase",
                      "Supabase",

                      // DevOps / Cloud
                      // "Docker",
                      // "Kubernetes",
                      // "AWS",
                      // "Azure",
                      // "Google Cloud",
                      // "Vercel",
                      // "Netlify",
                      // "Nginx",

                      // APIs & Auth
                      // "REST API",
                      // "GraphQL",
                      // "JWT",
                      // "OAuth",

                      // Realtime
                      // "Socket.io",
                      // "WebRTC",

                      // AI / ML
                      // "TensorFlow",
                      // "PyTorch",
                      // "OpenAI API",
                      // "LangChain",

                      // Tools
                      // "Git",
                      // "GitHub",
                      // "GitLab",
                      // "CI/CD",
                      // "Webpack",
                      // "Vite",
                      // "Babel",

                      // Payments / Services
                      // "Stripe",
                      // "Razorpay",
                      // "Cloudinary",

                      // Other
                      // "Three.js",
                      // "Electron"
                    ].map((tech) => (
                      <button
                        type="button"
                        key={tech}
                        onClick={() => {
                          if (formData.technologies.includes(tech)) {
                            setFormData({
                              ...formData,
                              technologies: formData.technologies.filter((t) => t !== tech),
                            });
                          } else {
                            setFormData({
                              ...formData,
                              technologies: [...formData.technologies, tech],
                            });
                          }
                        }}
                        className={`px-4 py-1 rounded-full text-sm border transition ${formData.technologies.includes(tech)
                          ? "bg-[#facc15] text-black border-[#facc15]"
                          : "bg-gray-100 text-gray-700 border-gray-200"
                          }`}
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
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
                    <span>{editingId ? 'Update Project' : 'Add Project'}</span>
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

export default Projects
