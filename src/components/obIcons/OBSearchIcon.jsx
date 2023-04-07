import React from 'react'
import Icon from './OBIcon'

export default function OBSearchIcon({ fill, stroke, className, ...rest }) {
  return (
    <Icon
      className={`${stroke ?? 'stroke-primary'} ${className ?? ''}`}
      {...rest}
    >
      <path
        opacity=".2"
        d="M10.5 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
        className={fill ?? 'fill-primary'}
      />
      <path
        d="m21.5 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  )
}
