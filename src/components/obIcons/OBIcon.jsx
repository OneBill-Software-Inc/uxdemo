import React from 'react'

function OBIcon({ size, className, children, strokeWidth }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size ?? '22'}
      height={size ?? '22'}
      className={className ?? 'stroke-primary'}
      strokeWidth={strokeWidth ?? '1.2'}
      fill="none"
      stroke="currentColor"
    >
      {children}
    </svg>
  )
}
export default OBIcon
