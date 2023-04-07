import React from 'react'

export default function Layout({ children, pageLeftNav, className }) {
  return (
    <div
      className={`${
        className ?? ''
      } flex gap-4 -mt-4 p-8 w-full h-full relative`}
    >
      {pageLeftNav && <div className="left-nav-card">{pageLeftNav}</div>}
      {children}
    </div>
  )
}
