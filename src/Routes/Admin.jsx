import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '../components/MainLayout.jsx'
import AuthLayout from '../components/AuthLayout.jsx'
import { SidebarProvider } from '../contexts/SidebarContext.jsx'

import Dashboard from '../features/Admin/dashboard/Dashboard.jsx'
import TestDasbord from '../features/Admin/dashboard/TestDasbord.jsx'
import Projects from '../features/Admin/Project/Projects.jsx'
import Skills from '../features/Admin/Skills/Skills.jsx'
import Resume from '../features/Admin/Resume/Resume.jsx'
import Messages from '../features/Admin/Messages/Messages.jsx'
import Experience from '../features/Admin/Experience/Experience.jsx'
import Profile from '../features/Admin/Profile/Profile.jsx'
import HeroSection from '../features/Admin/HeroSection/HeroSection.jsx'
import Settings from '../features/Admin/Settings/Settings.jsx'

function Admin() {
  return (
    <SidebarProvider>
      <Routes>
        <Route element={<AuthLayout />} />
        <Route element={<MainLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/testDasbord" element={<TestDasbord />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/hero-section" element={<HeroSection />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </SidebarProvider>
  )
}

export default Admin
