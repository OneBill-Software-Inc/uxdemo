import React from 'react'
import Icon from './OBIcon'

export default function OBMonitor({ fill, stroke, ...rest }) {
  return (
    <Icon className={stroke ?? 'stroke-primary'} {...rest}>
      <path
        opacity="0.2"
        className={fill ?? 'fill-primary'}
        d="M12.5 7.2c0-1.1 0-1.7.2-2.1.2-.4.5-.7.9-.9.4-.2 1-.2 2.1-.2h3.6c1.1 0 1.7 0 2.1.2.4.2.7.5.9.9.2.4.2 1 .2 2.1v9.6c0 1.1 0 1.7-.2 2.1a2 2 0 0 1-.9.9c-.4.2-1 .2-2.1.2h-3.6c-1.1 0-1.7 0-2.1-.2a2 2 0 0 1-.9-.9c-.2-.4-.2-1-.2-2.1V7.2Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 20h2.5m9-11h0m-9-3H5.7C4.6 6 4 6 3.6 6.2a2 2 0 0 0-.9.9c-.2.4-.2 1-.2 2.1v3.6c0 1.1 0 1.7.2 2.1.2.4.5.7.9.9.4.2 1 .2 2.1.2h2.8m7.2 4h3.6c1.1 0 1.7 0 2.1-.2.4-.2.7-.5.9-.9.2-.4.2-1 .2-2.1V7.2c0-1.1 0-1.7-.2-2.1a2 2 0 0 0-.9-.9c-.4-.2-1-.2-2.1-.2h-3.6c-1.1 0-1.7 0-2.1.2a2 2 0 0 0-.9.9c-.2.4-.2 1-.2 2.1v9.6c0 1.1 0 1.7.2 2.1.2.4.5.7.9.9.4.2 1 .2 2.1.2Zm2.8-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
    </Icon>
  )
}
