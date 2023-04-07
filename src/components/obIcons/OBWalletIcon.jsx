import React from 'react'
import Icon from './OBIcon'

export default function OBWalletIcon({ fill, stroke, ...rest }) {
  return (
    <Icon className={stroke ?? 'stroke-primary'} {...rest}>
      <path
        opacity="0.2"
        className={fill ?? 'fill-primary'}
        d="M2.5 12.5h4.6l.7.3 1 .5.5.4 1 .5.6.3H14c.3 0 .5-.2.7-.3l1-.5.5-.4 1-.5.6-.3h4.6v4.3c0 1.1 0 1.7-.2 2.1a2 2 0 0 1-.9.9c-.4.2-1 .2-2.1.2H5.7c-1.1 0-1.7 0-2.1-.2a2 2 0 0 1-.9-.9c-.2-.4-.2-1-.2-2.1v-4.3Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22.5 8.5h-20m0 4h4.6l.7.3 1 .5.5.4 1 .5.6.3H14c.3 0 .5-.2.7-.3l1-.5.5-.4 1-.5.6-.3h4.6m-20-5.3v9.6c0 1.1 0 1.7.2 2.1.2.4.5.7.9.9.4.2 1 .2 2.1.2h13.6c1.1 0 1.7 0 2.1-.2.4-.2.7-.5.9-.9.2-.4.2-1 .2-2.1V7.2c0-1.1 0-1.7-.2-2.1a2 2 0 0 0-.9-.9c-.4-.2-1-.2-2.1-.2H5.7C4.6 4 4 4 3.6 4.2a2 2 0 0 0-.9.9c-.2.4-.2 1-.2 2.1Z"
      />
    </Icon>
  )
}
