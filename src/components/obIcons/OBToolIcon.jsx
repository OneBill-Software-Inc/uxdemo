import React from 'react'
import Icon from './OBIcon'

export default function OBToolIcon({ fill, stroke, ...rest }) {
  return (
    <Icon className={stroke ?? 'stroke-primary'} {...rest}>
    <path opacity="0.2" className={fill ?? 'fill-primary'} d="M16.1 7.6c-.4-.4-.6-.6-.6-.8v-.6c0-.2.2-.4.6-.8L19 2.5a6 6 0 0 0-8.3 6.9l.1 1v.3l-.6.6L4 17.5a2.1 2.1 0 0 0 3 3l6.2-6.2.6-.5.4-.1.9.1A6 6 0 0 0 22 5.5L19 8.4c-.4.4-.6.6-.8.6a1 1 0 0 1-.6 0c-.2 0-.4-.2-.8-.6l-.8-.8Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.1 7.6c-.4-.4-.6-.6-.6-.8v-.6c0-.2.2-.4.6-.8L19 2.5a6 6 0 0 0-8.3 6.9l.1 1v.3l-.6.6L4 17.5a2.1 2.1 0 1 0 3 3l6.2-6.2.6-.5.4-.1.9.1A6 6 0 0 0 22 5.5L19 8.4c-.4.4-.6.6-.8.6a1 1 0 0 1-.6 0c-.2 0-.4-.2-.8-.6l-.8-.8Z"/>
    </Icon>
  )
}
