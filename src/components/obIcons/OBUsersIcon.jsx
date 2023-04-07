import React from 'react'
import Icon from './OBIcon'

export default function OBUsersIcon({ fill, stroke, ...rest }) {
  return (
    <Icon className={stroke ?? 'stroke-primary'} {...rest}>
      <g opacity="0.2" className={fill ?? 'fill-primary'}>
        <path d="M10 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM10 15a8.4 8.4 0 0 0-7 4c-.3.5-.5.7-.4 1 0 .3.1.6.4.8.2.2.6.2 1.3.2h11.4c.7 0 1 0 1.3-.2.3-.2.4-.5.4-.7 0-.4-.1-.6-.5-1.2A8.4 8.4 0 0 0 10 15Z"/>
      </g>
      <path  strokeLinecap="round" strokeLinejoin="round" d="M18.5 15.8a9.1 9.1 0 0 1 4 4c0 .5-.3 1-.7 1.1l-.8.1m-4.5-9.5a4.5 4.5 0 0 0 0-8m-2 4a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM3.1 18.9C4.7 16.5 7 15 10 15c2.8 0 5.3 1.5 7 4 .3.5.5.7.4 1 0 .3-.1.6-.4.8-.2.2-.6.2-1.3.2H4.3c-.7 0-1 0-1.3-.2-.3-.2-.4-.5-.4-.7 0-.4.1-.6.5-1.2Z"/>
    </Icon>
  )
}
