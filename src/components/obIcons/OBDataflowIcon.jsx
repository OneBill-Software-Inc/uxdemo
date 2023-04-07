import React from 'react'
import Icon from './OBIcon'

export default function OBDataflowIcon({ fill, stroke, ...rest }) {
  return (
    <Icon className={stroke ?? 'stroke-primary'} {...rest}>
      <g opacity="0.2" className={fill ?? 'fill-primary'}>
        <path d="M10 10.3v-.5l.3-.2.5-.1h3.9l.2.3.1.5v3.9l-.3.2-.5.1h-3.9l-.2-.3-.1-.5v-3.4ZM17.5 17.8v-.5l.3-.2.5-.1h3.9l.2.3.1.5v3.9l-.3.2-.5.1h-3.9l-.2-.3-.1-.5v-3.4ZM2.5 2.8v-.5l.3-.2.5-.1h3.9l.2.3.1.5v3.9l-.3.2-.5.1H2.8l-.2-.3-.1-.5V2.8Z" />
      </g>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.5 4.5h7.3c1.1 0 1.7 0 2.1.2.4.2.7.5.9.9.2.4.2 1 .2 2.1V9c0 1 0 1.4-.2 1.8a2 2 0 0 1-1 1c-.4.2-.9.2-1.8.2m-5.5 7.5H6.2c-1.1 0-1.7 0-2.1-.2a2 2 0 0 1-.9-.9c-.2-.4-.2-1-.2-2.1V15c0-1 0-1.4.2-1.8a2 2 0 0 1 1-1c.4-.2.9-.2 1.8-.2m4.8 2.5h3.9l.2-.3.1-.5V9.8l-.3-.2-.5-.1h-3.9l-.2.3-.1.5v3.9l.3.2.5.1Zm7.5 7.5h3.9l.2-.3.1-.5v-3.9l-.3-.2-.5-.1h-3.9l-.2.3-.1.5v3.9l.3.2.5.1ZM3.3 7h3.9l.2-.3.1-.5V2.3L7.1 2 6.7 2H2.8l-.2.3-.1.5v3.9l.3.2.5.1Z"
      />
    </Icon>
  )
}
