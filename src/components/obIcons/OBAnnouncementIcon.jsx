import React from 'react'
import Icon from './OBIcon'

export default function OBAnnouncementIcon({ fill, stroke, ...rest }) {
  return (
    <Icon className={stroke ?? 'stroke-primary'} {...rest}>
      <g opacity="0.2" className={fill ?? 'fill-primary'}>
        <path d="M19 13.5a3.5 3.5 0 1 0 0-7v7ZM10.5 5.5H7a4.5 4.5 0 0 0 0 9h3.5v-9Z" />
      </g>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 14 1.6 6.3v.3A2 2 0 0 0 8.4 22h.4a2 2 0 0 0 1.8-1.8V5.5m8.5 8a3.5 3.5 0 1 0 0-7m-8.3-1H7a4.5 4.5 0 0 0 0 9h3.8c1.7 0 3.9 1 5.5 1.9 1 .5 1.5.8 1.8.7.3 0 .5-.2.7-.4.2-.3.2-.8.2-1.8V5c0-1 0-1.5-.2-1.8a1 1 0 0 0-.7-.4c-.3 0-.8.2-1.8.7-1.6 1-3.8 1.9-5.6 1.9Z"
      />
    </Icon>
  )
}
