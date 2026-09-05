import { useState } from 'react'
import profile from '../assets/profile.jpg'

export default function ProfileImg({ alt = '' }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className="photo-placeholder"
        style={{ display: 'flex', width: '100%', height: '100%' }}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
        </svg>
      </div>
    )
  }

  return (
    <img src={profile} alt={alt} onError={() => setFailed(true)} />
  )
}