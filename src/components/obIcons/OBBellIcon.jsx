import React from 'react'
import Icon from './OBIcon'

export default function OBBellIcon({ fill, stroke, ...rest }) {
  return (
    <Icon className={stroke ?? 'stroke-primary'} {...rest}>
      <path
        opacity="0.2"
        className={fill ?? 'fill-primary'}
        d="M18 8.5a6 6 0 1 0-12 0c0 3-.8 5.2-1.7 6.6l-1 2c0 .1 0 .2.2.3l1.9.1h13.2l2-.1.1-.4-1-1.9c-1-1.4-1.7-3.5-1.7-6.6Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.4 21.5a4 4 0 0 0 5.2 0m3.4-13a6 6 0 1 0-12 0c0 3-.8 5.2-1.7 6.6l-1 2c0 .1 0 .2.2.3l1.9.1h13.2l2-.1.1-.4-1-1.9c-1-1.4-1.7-3.5-1.7-6.6Z"
      />
    </Icon>
  )
}
