import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import { toast } from 'react-toastify'
import { useAuth } from '../../../contexts/useAuth'

const API_URL = 'https://portfolio-backend-n6et.onrender.com/api'

function Messages() {
  const [messages, setMessages] = useState([])
  const { user } = useAuth() 
  const [loading, setLoading] = useState(true)
  const [selectedMessage, setSelectedMessage] = useState(null)

   const getHeaders = useCallback(() => ({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${user?.token}`,
  }), [user?.token])

  const fetchMessages = useCallback(async () => {
      try {
        const res = await fetch(`${API_URL}/messages`, { headers: getHeaders() })
        const data = await res.json()
        if (res.ok) setMessages(data)
      } catch {
        toast.error('Failed to load messages')
      } finally {
        setLoading(false)
      }
    }, [getHeaders])
  
    useEffect(() => {
      fetchMessages()
    }, [fetchMessages])
  

   const handleDelete = async (id) => {
  try {
    const res = await fetch(`${API_URL}/messages/${id}`, {
      method: 'DELETE',
      headers: getHeaders(),
    })

    if (!res.ok) throw new Error('Failed to delete')

    setMessages(messages.filter((m) => m._id !== id))
    toast.success('Message deleted!')
  } catch (error) {
    toast.error(error.message)
  }
}
  return (
 
  <div className="animate-fadeIn">
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-black">Messages</h1>
          <p className="text-gray-500 mt-1">No new messages</p>
        </div>
        <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
          <button className="px-4 py-2 rounded-md font-medium transition-colors bg-white shadow-sm text-black">
            All
          </button>
          <button className="px-4 py-2 rounded-md font-medium transition-colors text-gray-500 hover:text-black">
            Unread{" "}
          </button>
        </div>
      </div>


      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-4">
 
      {loading ? (
  <p className="text-center text-gray-500">Loading...</p>
) : messages.length === 0 ? (
  <div className="text-center py-12 bg-white rounded-xl">
    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <i className="ri-mail-line text-2xl text-gray-400" />
    </div>
    <p className="text-gray-500">No messages</p>
  </div>
) : (
  messages.map((msg) => (
    <div
      key={msg._id}
          onClick={() => setSelectedMessage(msg)}
    className={`group p-4 rounded-xl bg-white hover:bg-gray-50 transition-all border border-gray-100 hover:shadow-sm cursor-pointer${
      selectedMessage?._id === msg._id
        ? "bg-yellow-50 border-yellow-400"
        : "bg-white hover:bg-gray-50 border-gray-100"
    }`}
    >
      {/* Top Section */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-black">
            {msg.senderName || "No Name"}
          </h3>
          <span className="text-xs text-gray-400">
            {new Date(msg.createdAt).toLocaleDateString()}
          </span>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          {/* <button className="p-2 rounded-md hover:bg-gray-100 text-gray-400 hover:text-[#facc15]">
            <i className="ri-edit-line text-sm" />
          </button> */}

          <button onClick={() => handleDelete(msg._id)}  className="p-2 rounded-md hover:bg-gray-100 text-gray-400 hover:text-red-500">
            <i className="ri-delete-bin-line text-sm" />
          </button>
        </div>
      </div>

      {/* Message */}
     
        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
    {msg.message}
  </p>
    </div>
  ))
 
)}

        </div>



   <div className="lg:col-span-2">
  <div className="bg-white rounded-xl p-6 h-full">
    {!selectedMessage ? (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <i className="ri-mail-open-line text-3xl text-gray-400" />
        </div>
        <h3 className="text-xl font-bold text-black mb-2">
          Select a message
        </h3>
        <p className="text-gray-500">
          Click on a message from the list to view its contents
        </p>
      </div>
    ) : (
      <div>
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4">
          <div>
            <h2 className="text-xl font-semibold text-black">
              {selectedMessage.senderName}
            </h2>
            <p className="text-sm text-gray-400">
              {new Date(selectedMessage.createdAt).toLocaleString()}
            </p>
          </div>


          <button
            onClick={() => handleDelete(selectedMessage._id)}
            className="p-2 rounded-md hover:bg-gray-100 text-gray-400 hover:text-red-500"
          >
            <i className="ri-delete-bin-line text-lg" />
          </button>
        </div>
<p>  {selectedMessage.senderEmail}</p>
        {/* Full Message */}
          <div className="mt-6 text-gray-700 leading-relaxed">
          {selectedMessage.subject}
        </div>
        <div className="mt-6 text-gray-700 leading-relaxed">
          {selectedMessage.message}
        </div>
      </div>
    )}
  </div>
</div>
      </div>
    </div>


    </div>
  )
}

export default Messages
