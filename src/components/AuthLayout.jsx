import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div style={{ display: 'grid', gridTemplateRows: '64px 1fr', minHeight: '100vh' }}>
      <header style={{ display: 'flex', alignItems: 'center', padding: '0 16px', borderBottom: '1px solid #e5e7eb' }}>
        <Link to="/login" style={{ fontWeight: 700, textDecoration: 'none', color: '#0a66ff' }}>Travnet.io</Link>
      </header>
      <div style={{ display: 'grid', placeItems: 'center', padding: 16 }}>
        <Outlet />
      </div>
    </div>
  )
}








